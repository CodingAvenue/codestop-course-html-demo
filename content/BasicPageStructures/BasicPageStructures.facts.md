### Facts for HTML Basic Page Structure

1. `Hypertext Markup Language (HTML)` is a markup language that tells the browser how to structure web pages.

    - `Hypertext` refers to the way of writing and displaying text that links to a website or different part of the document.

    - `Markup Language` is a computer language that uses tags to add elements in a document.

    - An HTML document consists of `tags` that define `elements` within the document.

2. Tags and Element

    - Tags contain the element name inside angle brackets `<>`.

    - The opening tag `<>` starts an `HTML element` and the closing tag `</>` ends an `HTML element`.

3. Empty Elements

   - An `empty element` does not require a closing tag because it is a self-closing tag. It has the element name inside angle brackets `<>` followed by a space and ends with a forward slash `/`.
   
   - Some of the empty elements are the `<br />` and `<hr />` elements.

The basic HTML elements are the following:

- `<!DOCTYPE html>` - It defines the HTML version or the type of document.

- `<html>` -  It encloses the entire HTML document. It signifies the start and end of an HTML document.

- `<head>` - It contains machine-readable data such as `title`, `scripts`, and `style sheets` that provide information to the web page.

- `<title>` - It sets the title of the web page. Content inside the `<title>` element is displayed on the browser tab.

- `<body>` - It specifies the content to display on the web page. Contents inside the `<body>` element are displayed on the browser window. 

The example code below shows an HTML structure of elements:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>The document title</title>
    </head>
    <body>
        <h1>This is the Heading <br /> of the document.</h1>
        <p>Page content is written here.</p><hr />
        <p>Second page content is written here.</p>
    </body>
</html>

```

Output:
<!DOCTYPE html>
<html>
    <head>
        <title>The document title</title>
    </head>
    <body>
        <h1>This is the Heading <br /> of the document.</h1>
        <p>Page content is written here.</p><hr />
        <p>Second page content is written here.</p>
    </body>
</html>