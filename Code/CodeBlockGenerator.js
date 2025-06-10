function createCodeBlock({ filename, language, code }) {
  const container = document.createElement('div');
  container.className = 'code-window';
  container.innerHTML = `
    <div class="code-header">
    <span class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
    </span>
    <span class="code-filename">${filename}</span>
    </div>
    <div class="code-divider"></div>
    <pre class="line-numbers"><code class="language-${language}">${code}</code></pre>
  `;
  return container;
}

function insertCodeBlock({ selector, filename, language, code }) {
  const el = document.querySelector(selector);
  if (el) {
    el.appendChild(createCodeBlock({ filename, language, code }));
    if (window.Prism) Prism.highlightAllUnder(el);
  }
}