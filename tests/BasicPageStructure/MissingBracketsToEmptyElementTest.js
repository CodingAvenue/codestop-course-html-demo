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
    it('Expecting the <html> element.', async function() {
        const htmlElement = loader.getElement('html');
        assert.notEqual(htmlElement, null);
        
        if(htmlElement){
            describe('<html> element: ', async function() {
                it('The inner elements of the <html> element should be one <head> element followed by one <body> element.', async function() {
                    const htmlChildren = htmlElement.children;
                    assert.equal(htmlChildren.length, 2);

                    if(htmlChildren[0]) {
                        describe('<head> element: ', async function() {
                            it('The first inner element of the <html> element should be the <head> element.', async function() {
                                assert.equal(htmlChildren[0].tagName, 'HEAD');
                            });
                        });
                    }

                    if(htmlChildren[1]) {
                        describe('<body> element: ',async function() {
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

    //<body> element
    it('Expecting <body> element.', async function() {
        const bodyElement =loader.getElement('body');
        assert.notEqual(bodyElement, null);

        if(bodyElement) {
            describe('<body> element: ', async function(){ 
                it('The inner elements of the <body> element should be the <h1> element followed by the first <p> element; then the empty element <hr /> followed by the second <p> element.', async function() {
                    const bodyChildren = bodyElement.children;
                    assert.equal(bodyChildren.length, 4);

                    ///<h1> element
                    if(bodyChildren[0]) {
                        describe('<h1> element: ', async function() {
                            it('The first element inside the <body> element should be the <h1> element.', async function() {
                                assert.equal(bodyChildren[0].tagName, 'H1');

                                if(bodyChildren[0].tagName == 'H1') {
                                    describe('<h1> element: ', async function() {
                                        it('The text inside the <h1> element should be "Welcome to HTML".', async function() {
                                            assert.equal(bodyChildren[0].textContent.trim(), 'Welcome to HTML');
                                        });
                                    });
                                }
                            });
                        });
                    }

                    ///first <p> element
                    if(bodyChildren[1]) {
                        describe('First <p> element: ', async function() {
                            it('The second element inside the <body> element should be the <p> element.', async function() {
                                assert.equal(bodyChildren[1].tagName, 'P');

                                if(bodyChildren[0].tagName == 'P') {
                                    describe('<p> element: ', async function() {
                                        it('The text inside the first <p> element should be "Lesson1: Basic Page Structure of HTML".', async function() {
                                            assert.equal(bodyChildren[1].textContent.trim(), 'Lesson1: Basic Page Structure of HTML');
                                        });
                                    });
                                }
                            });
                        });
                    }

                    ///<hr /> empty element
                    if(bodyChildren[2]) {
                        describe('<hr> element: ', async function() {
                            it('The <hr /> empty element should be written between two <p> elements.', async function() {
                                assert.equal(bodyChildren[2].tagName, 'HR');
                            });
                        });
                    }

                    ///second <p> element
                    if(bodyChildren[3]) {
                        describe('second <p> element: ', async function() {
                            it('The fourth element inside the <body> element should be the <p> element.', async function() {
                                assert.equal(bodyChildren[3].tagName, 'P');
                            });
                          
                            it('Expecting the <br /> empty element inside the second <p> element between the text "This lesson is about:" and "How HTML code should be structured.".', async function() {
                                const p2Children = bodyChildren[3].childNodes;
                                assert.equal(p2Children.length, 3);
                                
                                if(p2Children[0]) {
                                    describe('First text inside the <p> element: ', async function() {
                                        it('The text enlcosed inside the second <p> element should be "This lesson is about:" and is written before the <br /> empty element.', async function() {
                                            assert.equal(p2Children[0].textContent.trim(), 'This lesson is about:');
                                        });
                                    });
                                }

                                ///<br /> empty element
                                if(p2Children[1]) {
                                    describe('<br /> empty element: ', async function(){
                                        it('The <br /> empty element should be written inside the second <p> element between the text "This lesson is about:" and "How HTML code should be structured.".', async function() {
                                            assert.equal(p2Children[1].tagName, 'BR');
                                        });
                                    });
                                }

                                if(p2Children[2]) {
                                    describe('Second text inside the <p> element: ', async function() {
                                        it('The text enclosed inside the second <p> element should be "How HTML code should be structured." and is written after the <br /> empty element.', async function() {
                                            assert.equal(p2Children[2].textContent.trim(), 'How HTML code should be structured.');
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
