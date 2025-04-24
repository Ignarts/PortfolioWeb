const fs = require('fs');
const path = require('path');

// Define the HTML template
const htmlTemplate = (title, subtitle, tags, image, content) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="icon" href="../Resources/Home/Images/avatar.jpg">
    <link rel="stylesheet" href="../../Styles/GeneralStyles.css">
    <link rel="stylesheet" href="../../Styles/HeaderTitle.css">
    <link rel="stylesheet" href="../../Styles/BlogStyles.css">
</head>

<body>
    <header>
        <a href="../portfolio">
            <h1 class="title"><strong class="bold-title">igna</strong>rts</h1>
        </a>
    </header>

    <main>
        <section class="header-Space"></section>

        <section class="blog-article">
            <section class="blog-title anchor" id="intro">
                <h1><strong>${title}</strong></h1>
                <h3>${subtitle}</h3>
            </section>
            <section class="blog-tags">
                ${tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('\n')}
            </section>

            <hr>

            <img src="${image}" alt="blog-image" class="blog-image">

            <section class="blog-content">
                ${content}
            </section>
        </section>
    </main>

    <footer>
        <p class="footer-text">&copy; 2024 Ignarts. All rights reserved.</p>
        <p class="footer-text">
            Created with passion by <strong>Ignacio Meléndez Uriz</strong>,
            videogames and multiplatform application developer and creativity lover.
        </p>
        <p class="footer-text">
            Do you have an interesting project? Let's talk!
            <a href="mailto:ignarts.dev@gmail.com" target="_blank">ignarts.dev@gmail.com</a>
        </p>
    </footer>

    <div class="overlay"></div>

</body>

<script src="../Code/SmoothScroll.js"></script>

</html>
`;

// Function to generate the blog
function generateBlog(inputFilePath, outputDir) {
    // Read the input .txt file
    const inputContent = fs.readFileSync(inputFilePath, 'utf-8');

    // Parse the content (assuming a specific structure in the .txt file)
    const [title, subtitle, tagsLine, image, ...contentLines] = inputContent.split('\n');
    const tags = tagsLine.split(',').map(tag => tag.trim());
    const content = contentLines.join('\n').replace(/\n/g, '<p></p>');

    // Generate the HTML content
    const htmlContent = htmlTemplate(title, subtitle, tags, image, content);

    // Define the output file path
    const outputFileName = `${title.toLowerCase().replace(/\s+/g, '-')}.html`;
    const outputFilePath = path.join(outputDir, outputFileName);

    // Write the HTML file
    fs.writeFileSync(outputFilePath, htmlContent, 'utf-8');
    console.log(`Blog generated: ${outputFilePath}`);
}

// Example usage
const inputFilePath = path.join(__dirname, '../Resources/blogInput.txt'); // Path to the .txt file
const outputDir = path.join(__dirname, '../blog'); // Directory to save the generated HTML

generateBlog(inputFilePath, outputDir);