const HTMLLoader = require('codestop-css-proof');
const commandlineArgs = require('command-line-args');
const assert = require('assert');
const optionDef = [ 
    { 'name': 'html', 'alias': 'h', 'type': String },
    { 'name': 'css', 'alias': 'c', 'type': String }
];
let options;
let loader;
describe('Test Styles', function() {
    before(async function() {
    
        options = commandlineArgs(optionDef, { partial: true }); 
        loader = new HTMLLoader(options.html);
    
        if (options.css) {
            await loader.addExternalCSS(options.css);
        }
        await loader.load();
    });

    ///<html> element
    it('Expecting the <html> element: ', async function() {
        const htmlElement = loader.getElement('html');
        assert.notEqual(htmlElement, null);

        if(htmlElement) {
            describe('<html> element: ', async function() {
                it('The inner element of the <html> element should be one <head> element followed by one <body> element.', async function() {
                    const htmlChildren = htmlElement.children;
                    assert.equal(htmlChildren.length, 2);

                    if(htmlChildren[0]) {
                        describe('<head> element: ',async function() {
                            it('The first inner element of the <html> element should be the <head> element.', async function() {
                                assert.equal(htmlChildren[0].tagName, 'HEAD');
                            });
                        });
                    }

                    if(htmlChildren[1]) {
                        describe('<body> element: ', async function() {
                            it('The second inner element of the <html> element should be the <body> element.', async function() {
                                assert.equal(htmlChildren[1].tagName, 'BODY');
                            });
                        });
                    }
                });
            });
        }
    });

    ///<head> element
    it('Expecting the <head> element.', async function() {
        const headElement = loader.getElement('head');
        assert.notEqual(headElement, null);

        if(headElement) {
            describe('<head> element: ', async function() {
                it('The inner element of the <head> element should be one <title> element.', async function() {
                    const headChildren = headElement.children;
                    assert.equal(headChildren.length, 1);
                    
                    ///<title> element
                    if(headChildren[0]) {
                        describe('<title> element: ', async function() {
                            it('The inner element of the <head> element should be the <title> element.', async function() {
                                assert.equal(headChildren[0].tagName, 'TITLE');

                                if(headChildren[0].tagName == 'TITLE') {
                                    describe('<title> element: ', async function() {
                                        it('The text enclosed inside the <title> element should be "HTML Basic Page Structure".', async function() {
                                            assert.equal(headChildren[0].textContent.trim(), 'HTML Basic Page Structure');
                                        });
                                    });
                                }
                            });
                        });
                    }
                });
            });
        }
    });

    ///<body> element
    it('Expecting the <body> element: ', async function() {
        const bodyElement = loader.getElement('body');
        assert.notEqual(bodyElement, null);

        if(bodyElement) {
            describe('<body> element: ', async function() {
                it('The inner elements of the <body> element should be one <h1> element followed by one <hr /> empty element; then one <p> element.', async function() {
                    const bodyChildren = bodyElement.children;
                    assert.equal(bodyChildren.length, 3);

                    ///<h1> element
                    if(bodyChildren[0]) {
                        describe('<h1> element: ', async function() {
                            it('The first inner element inside the <body> element should be the <h1> element.', async function() {
                                assert.equal(bodyChildren[0].tagName, 'H1');

                                if(bodyChildren[0].tagName == 'H1') {
                                    describe('<h1> element: ', async function() {
                                        it('The text enclosed in the <h1> element should be "Travel Goals".', async function() {
                                            assert.equal(bodyChildren[0].textContent.trim(), 'Travel Goals');
                                        });
                                    });
                                }
                            });
                        });
                    }

                    ///<hr /> empty element
                    if(bodyChildren[1]) {
                        describe('<hr /> empty element: ', async function() {
                            it('The <hr /> empty element should be written between the <h1> element and the <p> element.', async function() {
                                assert.equal(bodyChildren[1].tagName, 'HR');
                            });
                        });
                    }

                    ///<p> element
                    if(bodyChildren[2]) {
                        describe('<p> element: ', async function() {
                            it('The second inner element inside the <body> element should be the <p> element.', async function() {
                                assert.equal(bodyChildren[2].tagName, 'P');
                            });

                            it('Expecting the text "New York, Paris, Singapore, Japan" and three <br /> empty elements inside the <p> element.', async function() {
                                const pChildren = bodyChildren[2].childNodes;
                                assert.equal(pChildren.length, 7);

                                if(pChildren[0]) {
                                    describe('First text in the <p> element: ', async function() {
                                        it('The text "New York" should be written before the text "Paris".', async function() {
                                            assert.equal(pChildren[0].textContent.trim(), 'New York')
                                        });
                                    });
                                }

                                ///<br /> element
                                if(pChildren[1]) {
                                    describe('First <br /> empty element: ', async function() {
                                        it('Expecting the <br /> empty element inside the <p> element between the text "New York" and "Paris".', async function() {
                                            assert.equal(pChildren[1].tagName, 'BR');
                                        });
                                    });
                                }

                                if(pChildren[2]) {
                                    describe('Second text in the <p> element: ', async function() {
                                        it('The text "Paris" should be written after the text "New York".', async function() {
                                            assert.equal(pChildren[2].textContent.trim(), 'Paris');
                                        });
                                    });
                                }

                                ///<br /> empty element
                                if(pChildren[3]) {
                                    describe('Second <br /> empty element: ', async function() {
                                        it('Expecting the second <br /> empty element inside the <p> element between the text "Paris" and "Singapore".', async function() {
                                            assert.equal(pChildren[3].tagName, 'BR');
                                        });
                                    });  
                                }

                                if(pChildren[4]) {
                                    describe('Third text in the <p> element: ', async function() {
                                        it('The text "Singapore" should be written after the text "Paris".', async function() {
                                            assert.equal(pChildren[4].textContent.trim(), 'Singapore');
                                        });
                                    });
                                }

                                ///<br /> empty element
                                if(pChildren[5]) {
                                    describe('Third <br /> empty element: ', async function() {
                                        it('Expecting the third <br /> empty element inside the <p> element between the text "Singapore" and "Japan".', async function() {
                                            assert.equal(pChildren[5].tagName, 'BR');
                                        });
                                    });  
                                }
                                
                                if(pChildren[6]) {
                                    describe('Fourth text in the <p> element: ', async function() {
                                        it('The text "Japan" should be written after the text "Singapore".', async function() {
                                            assert.equal(pChildren[6].textContent.trim(), 'Japan');
                                        });
                                    });
                                }
                            });
                        });
                    }
                });
            });
        }
    });
});