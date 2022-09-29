const config = require('../../config'),
    hljs = require('./highlight');
config.highlight.forEach(item => {
  hljs.registerLanguage(item, require(`./languages/${item}`).default);
});

hljs.registerLanguage('c-like', require(`./languages/c-like`).default);
hljs.registerLanguage('java', require(`./languages/java`).default);
hljs.registerLanguage('bash', require(`./languages/bash`).default);
hljs.registerLanguage('javascript', require(`./languages/javascript`).default);
hljs.registerLanguage('go', require(`./languages/go`).default);
hljs.registerLanguage('css', require(`./languages/css`).default);
hljs.registerLanguage('shell', require(`./languages/shell`).default);
hljs.registerLanguage('python', require(`./languages/python`).default);
hljs.registerLanguage('xml', require(`./languages/xml`).default);
hljs.registerLanguage('php', require(`./languages/php`).default);
module.exports = hljs;