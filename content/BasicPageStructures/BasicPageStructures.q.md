# HTML Basic Page Structure

+++

### Part 1: Sample Code Analysis

:::

/// type=REPL, readonly=true

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Basic Page Structure</title>
    </head>
    <body>
        <h1>Welcome to HTML</h1>
        <p>Lesson1: Basic Page Structure of HTML</p>
    </body>
</html>

```

/// type=SS, choiceType=HTML, id=3fef29e6-0a97-498d-a673-24f2235aa374, answer=[3]

Execute the program. What is its output?

- Welcome to HTML <p>Lesson1: Basic Page Structure of HTML</p>

- Welcome to HTML Lesson1: Basic Page Structure of HTML

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p>

- <h1>Welcome to HTML</h1>

- <p>Lesson1: Basic Page Structure of HTML</p><h1>Welcome to HTML</h1>


/// type=SS, id=01af02e5-b2fc-41d9-86e1-f0102d9580ff, answer=[3]

What is the purpose of `<!DOCTYPE>`?

- It does not have any purpose.

- It is the documentation of HTML.

- It defines the type of document.

- It is the portal for saving files.

- It serves as the comment section of HTML.


/// type=SS, id=dae9160f-856b-4fec-a166-3c2338c7f9e8, answer=[4]

On line 2, what does the `<html>` opening tag indicate?

- The type of document.

- The title of the web page. 

- The end of the HTML document.

- The beginning of the HTML document.

- The content to display on the web page.


/// type=SS, id=19cf8d3e-a8e0-4ef9-8119-0bcd4f1c06c7, answer=[3]

On line 10, what does the `</html>` closing tag indicate?

- The type of document.

- The title of the web page. 

- The end of the HTML document.

- The beginning of the HTML document.

- The content to display on the web page.


/// type=SS, id=a349cdb4-b5c3-4ad0-b873-d73bc87108e6, answer=[4]

What type of tag is `<title>`?

- An ending tag.

- A closing tag.

- A starting tag.

- An opening tag.

- A beginning tag.


/// type=SS, id=76771b06-3a45-48c9-a3ee-497293d0a60a, answer=[5]

What does the `<head>` element do?

- It defines the name for the document.

- It sets the label for the HTML document.

- It specifies the content to display on the web page.

- It contains heading elements for the HTML document.

- It contains machine-readable data that provide information to the web page.


/// type=SS, id=a22756c8-a7bb-4d17-8508-d0c6eba8a24c, answer=[4]

What does the `<h1>` element do?

- It defines the document type.

- It sets the title of the web page.

- It contains information about the web page.

- It defines the largest and important heading.

- It specifies the content to display on the web page.


/// type=SS, id=67451976-61e2-42ff-a42b-594cd29a6c2a, answer=[5]

On line 8, what does the element `<p>Lesson1: Basic Page Structure of HTML</p>` represent?

- The text element.

- The heading element.

- The content element.

- The thought element. 

- The paragraph element.


/// type=SS, id=852b421d-ec51-405a-b7a9-fe1904bb0517, answer=[5]

What does the `<body>` element do?

- It defines the document type.

- It sets the title of the web page.

- It sets the heading of the document.

- It encloses the entire HTML document.

- It defines the content that is displayed on the web page.


/// type=SS, id=fc000ec9-1f06-4d3f-a809-c1933da91eaf, answer=[3]

Which text is displayed on the browser tab?

- `Untitled`

- `Welcome to HTML`

- `HTML Basic Page Structure`

- `Lesson1: Basic Page Structure of HTML`

- No text is displayed on the browser tab.


/// type=SS, id=6c1d8f6f-3355-41e1-9066-ebe334e4aacf, answer=[4]

On line 7, what does the element `<h1>Welcome to HTML</h1>` represent?

- The title element.

- The label element.

- The content element.

- The heading element.

- The paragraph element.


/// type=MS, id=73a23b5a-1241-436c-a027-f6c6a9308333, answer=[3,5]

Which elements are inside the `<body>` element?

- `<html></html>`

- `<!DOCTYPE html>`

- `<h1>Welcome to HTML</h1>`

- `<title>HTML Basic Page Structure</title>`

- `<p>Lesson1: Basic Page Structure of HTML</p>`


/// type=MS, id=095e4b60-2526-40fa-971d-ff77bfd2f1e4, answer=[2,3,4]

Which statements correctly describe the output?

- It does not display anything, just a blank page.

- It displays the text `Welcome to HTML` as the main heading.

- It displays the text `Lesson1: Basic Page Structure of HTML`.

- It displays the text `HTML Basic Page Structure` on the browser tab.

- It displays the text `Lesson1: Basic Page Structure of HTML` at the center of the web page.


/// type=SS, id=21ce64cc-185e-471d-92fb-c26127bc0e30, answer=[3]

Which element displays the largest heading on the web page?

- `<head></head>`

- `<!DOCTYPE html>`

- `<h1>Welcome to HTML</h1>`

- `<title>HTML Basic Page Structure</title>`

- `<p>Lesson1: Basic Page Structure of HTML</p>`


/// type=MS, id=a2ae7ceb-3303-496c-8572-1c48b04972c5, answer=[3,4,5]

Which of the following are HTML elements?

- `</head>`

- `<!DOCTYPE html>`

- `<h1>Welcome to HTML</h1>`

- `<title>HTML Basic Page Structure</title>`

- `<p>Lesson1: Basic Page Structure of HTML</p>`

:::

:::

/// type=REPL, readonly=true

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Basic Page Structure</title>
    </head>
    <body>
        <h1>Welcome to HTML</h1>
        <p>Lesson1: Basic Page Structure of HTML</p><hr />
        <p>This lesson is about: <br /> How HTML code should be structured.</p>
    </body>
</html>

```

/// type=SS, choiceType=HTML, id=da08330f-6d12-462d-ba4b-0816d181899c, answer=[3]

Execute the program. What is its output?

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p><hr /><p>This lesson is about: How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p><p>This lesson is about: <br /> How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p><hr /><p>This lesson is about: <br /> How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p><hr /><p>This lesson is about: <br /></p>

- <p>Welcome to HTML</p><p>Lesson1: Basic Page Structure of HTML</p><p>This lesson is about: <br /> How HTML code should be structured.</p>


/// type=SS, id=2f7df442-1802-4747-97f8-77c355e3fb6e, answer=[2]

On line 8, what empty element is used?

- `<br />`

- `<hr />`

- `<horizontal>`

- `<breakline />`

- `<horizontalrule />`


/// type=SS, id=e78c375e-e456-427b-a81f-54c14b81bc26, answer=[5]

What is `<hr />` after the element `<p>Lesson1: Basic Page Structure of HTML</p><hr />`?

- It is the element that indicates the end of the first `<p>` element.

- It is the element that creates a single space between `<p>` elements.

- It is the empty element that defines a line break in the `<p>` element.

- It is the element that indents the first line of the second `<p>` element.

- It is the empty element that draws a horizontal line between the `<p>` elements. 


/// type=SS, id=9e4b4842-5f61-4738-949e-82391624c8ed, answer=[2]

On line 9, what empty element is used?

- `<p>`

- `<br />`

- `<hr />`

- `<linebreak>`

- `<breakline />`


/// type=SS, id=6aa249c5-65c5-477f-afad-7916e239f81f, answer=[4]

What is `<br />` in the element `<p>This lesson is about: <br /> How HTML code should be structured.</p>`?

- It is the element that indents text in the `<p>` element.

- It is the element that separates text in the `<p>` element.

- It is the element that creates a single space in the `<p>` element. 

- It is the empty element that defines a line break in the `<p>` element.

- It is the empty element that draws a horizontal line between text to separate content.
 

:::


+++

+++

### Part 2: Knowledge Assessment

/// type=SS, id=5f8d016c-50dd-422a-aa91-b5feb3d0a973, answer=[5]

What does the acronym `HTML` stand for?

- Hypertext Mark Language

- Hyperlink Mark Language

- Hypertext Mark Languages

- Hyperlink Markup Language

- Hypertext Markup Language


/// type=SS, id=26427d00-6249-4455-a781-189b883522a0, answer=[3]

Which element displays the content of a web page on a browser window?

- `<head>` 

- `<html>`

- `<body>`

- `<title>`

- `<!DOCTYPE html>`


/// type=MS, id=f43c9d55-8ea7-48cd-a433-95b76de3ab9d, answer=[1,3,4,5]

Which of the following are needed to construct an HTML tag?

- An element name.

- A question mark `?`.

- A forward slash `/`.

- A left angle bracket `<`.

- A right angle bracket `>`.


/// type=MS, id=016a1387-a766-4a6f-9978-509be9360f0d, answer=[1,2,3]

Which of the following are HTML tags?

- `<h1>`

- `<head>`

- `<body>`

- `<contents>`

- `<paragraph>`


/// type=SS, id=b2a658f0-fd2a-4fd9-9347-f66339de717f, answer=[4]

Which character is used to indicate a closing tag?

- A percent character `%`.

- An ampersand character `&`.

- A backslash character `\`.

- A forward slash character `/`.

- A double quote character `""`.


/// type=SS, id=5d84b7da-6588-41ff-bbf8-76f6eb2e7c6c, answer=[1]

Which tag indicates the beginning of a paragraph element?

- `<p>`

- `</p>`

- `<body>`

- `<content>`

- `<paragraph>`


/// type=MS, id=e91a519b-b4f1-4f5c-a61e-5b273b02add4, answer=[1,2]

Which statements correctly describe empty elements?

- These are elements that do not have content.

- These are elements that do not require a closing tag. 

- These elements tell the web browser how to structure a text document.

- These are special elements that are used to format the appearance of an element. 

- These elements have an opening tag and a closing tag that indicate where the element begins and where it ends.


/// type=MS, id=fc9b51ac-96be-4caf-93f8-ea65e84baf80, answer=[1,2]

Which of the following are empty elements?

- `<hr />`

- `<br />`

- `<break />`

- `<linebreak />`

- `<horizontal />`


/// type=SS, id=46427187-a6cc-4b86-936e-9b88f873a060, answer=[2]

Which element defines a line break?

- `<hr />`

- `<br />`

- `<break />`

- `<breakline />`

- `<linebreak />`


+++

+++

### Part 3: Finding and Fixing Errors

:::

/// type=REPL, readonly=true

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Practice</title>
    </head>
    <body>
        This text is inside the heading.</h1>
        <p>This text is inside a paragraph.</p>
    </body>
</html>

```

/// type=SS, choiceType=HTML, id=6697ae03-58d3-4f63-b31e-cb5b866f23b0, answer=[1]

Execute the program. What is its output?

- This text is inside the heading.</h1><p>This text is inside a paragraph.</p>

- <h1>This text is inside the heading.</h1><p>This text is inside a paragraph.</p>
    
- <p>This text is inside a paragraph.</p><h1>This text is inside the heading.</h1>

- <h1>This text is inside the heading.</h1>

- <p>This text is inside a paragraph.</p>


/// type=SS, id=2e61cd78-738f-4a74-a413-f65c83bb8c35, answer=[5]

Why does the text `This text is inside the heading.` not appear as a heading?

- There is no `<heading>` opening tag before the `<body>` opening tag.

- There is no `<heading>` opening tag for the text `This text is inside the heading.`.

- There is no `<headline>` element for the text `This text is inside the heading.`. 

- The text `This text is inside the heading.` should be inside the `<head>` element.

- There is no `<h1>` opening tag before the text `This text is inside the heading.` on line 7.

:::


/// type=CR, id=d091797c-2e70-4d0c-bec7-993ecea20b79, answer=[tests/BasicPageStructure/MissingOpeningHeadingTagTest.js]

Correct the HTML code so that it outputs the text `This text is inside the heading.` as a heading of the web page.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Practice</title>
    </head>
    <body>
        This text is inside the heading.</h1>
        <p>This text is inside a paragraph.</p>
    </body>
</html>

```


:::

/// type=REPL, readonly=true

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Practice 2</title>
    </head>
    <body>
        <h1>This text is inside the heading.
        <p>This text is inside a paragraph.</p>
    </body>
</html>

```

/// type=SS, choiceType=HTML, id=f8529a2b-e04a-41ac-8b9a-d10de9f7362b, answer=[5]

Execute the program. What is its output?

- This text is inside the heading.<p>This text is inside a paragraph.</p>

- This text is inside the heading. This text is inside a paragraph.

- <p>This text is inside a paragraph.</p><h1>This text is inside the heading.
    
- <h1>This text is inside the heading.</h1><p>This text is inside a paragraph.</p>

- <h1>This text is inside the heading.<p>This text is inside a paragraph.</p>


/// type=SS, id=b1348a2d-384e-46d3-a6ac-669f0c8c6c77, answer=[5]

What makes the text `This text is inside a paragraph.` appear as a heading?

- There is no `</heading>` closing tag.

- The `<p>` element should be written before the `<h1>` element.

- The text `This text is inside a paragraph.` is inside the `<body>` element.

- The text `This text is inside a paragraph.` is outside the `<body>` element. 

- There is no `</h1>` closing tag after the text `This text is inside the heading.`.

:::


/// type=CR, id=e172e806-1f65-49c3-92e0-4725e0edd8fb, answer=[tests/BasicPageStructure/MissingClosingHeadingTagTest.js]

Correct the HTML code so that the text `This text is inside a paragraph.` does not appear as a heading.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Practice 2</title>
    </head>
    <body>
        <h1>This text is inside the heading.
        <p>This text is inside a paragraph.</p>
    </body>
</html>

```


:::

/// type=REPL, readonly=true

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Basic Page Structure</title>
    </head>
    <body>
        <h1>Welcome to HTML</h1>
        <p>Lesson1: Basic Page Structure of HTML</p> hr /
        <p>This lesson is about:<br />How HTML code should be structured.</p>
    </body>
</html>

```

/// type=SS, choiceType=HTML, id=c6f02bce-10c1-4a5d-9cc0-eb39deab8399, answer=[3]

Execute the program. What is its output?

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p> hr /<p><br />How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p> hr /

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p> hr /<p>This lesson is about:<br />How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p> hr /<p>This lesson is about: How HTML code should be structured.</p>

- <h1>Welcome to HTML</h1><p>Lesson1: Basic Page Structure of HTML</p> hr /<p>This lesson is about:<br /></p>


/// type=SS, id=88c4f3ce-44dc-4a99-b019-b94ee455c734, answer=[3]

What makes the `<hr />` element between paragraphs not draw a line to separate the content of the paragraphs?

- The `hr /` element lacks the `<hr>` opening tag.

- The `hr /` element should be enclosed in parentheses `()`.

- The `hr /` element is not enclosed in angle brackets `<>`.

- The `hr /` element should end with a backslash character `\`.

- The `hr /` element should be enclosed in angle brackets `<>` and should have an `</hr>` closing tag.

:::


/// type=CR, id=c7d0850c-c306-48bd-9f65-4c9dc0a727c7, answer=[tests/BasicPageStructure/MissingBracketsToEmptyElementTest.js]

Correct the HTML code so that the `<hr />` element draws a horizontal line between the two paragraphs.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Basic Page Structure</title>
    </head>
    <body>
        <h1>Welcome to HTML</h1>
        <p>Lesson1: Basic Page Structure of HTML</p> hr /
        <p>This lesson is about:<br />How HTML code should be structured.</p>
    </body>
</html>

```
+++

+++

### Part 4: Practice

/// type=CR, id=14672127-a68b-4ac6-afd7-f6eb7534cde9, answer=[tests/BasicPageStructure/CreateBasicPageStructureTest.js]

Write an HTML document with the title `HTML Basic Page Structure` using the `<title>` element. Place the `<title>` element inside the `<head>` element. Then, inside the `<body>` element, add the `<h1>` element to display the text: `Travel Goals`; and the `<p>` element to display the text: `New York Paris Singapore Japan`.  Next, add a line break using the `<br />` empty element between the text `New York` and `Paris`, `Paris` and `Singapore`; and `Singapore` and `Japan`. Add a horizontal line using the `<hr />` empty element after the `</h1>` closing tag. Execute the program to view the output. 

```html


```

+++