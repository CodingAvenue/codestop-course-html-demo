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
                            });

                            it('The text enclosed inside the <title> element should be "HTML Practice 2".', async function() {
                                assert.equal(headChildren[0].textContent.trim(), 'HTML Practice 2');
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
                
                it('The inner elements of the <body> element should be one <h1> element followed by one <p> element.', async function() {
                    const bodyChildren = bodyElement.children;
                    assert.equal(bodyChildren.length, 2);

                    if(bodyChildren[0]) {
                        describe('<h1> element: ', async function() {
                            it('The first inner element inside the <body> element should be the <h1> element.', async function() {
                                assert.equal(bodyChildren[0].tagName, 'H1');

                                if(bodyChildren[0].tagName == 'H1') {  
                                    describe('<h1> element: ', async function() {
                                        it('The text enclosed in the <h1> element should be "This text is inside the heading.".', async function() {
                                            assert.equal(bodyChildren[0].textContent.trim(), 'This text is inside the heading.');
                                        });
                                    });
                                }
                            });
                        });
                    }

                    if(bodyChildren[1]) {
                        describe('<p> element: ', async function() {
                            it('The second element inside the <body> element should be the <p> element.', async function() {
                                assert.equal(bodyChildren[1].tagName, 'P');

                                if(bodyChildren[1].tagName == 'P') {
                                    describe('<p> element: ', async function() {
                                        it('The text enclosed in the <p> element should be "This text is inside a paragraph.".', async function() {
                                            assert.equal(bodyChildren[1].textContent.trim(), 'This text is inside a paragraph.');
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