function renderScriptLink(filePath) {
  return `<script src="${filePath}" crossorigin></script>`;
}

function renderStyleLink(filePath) {
  return `<link rel="stylesheet" type="text/css" href=${filePath}>`;
}

function trim(string) {
  return string.trim();
}

module.exports = function renderTemplate(htmlWebpackPluginData) {
  const { htmlWebpackPlugin, compilation } = htmlWebpackPluginData;
  const { files, options } = htmlWebpackPlugin;

  return trim(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          ${process.env.NODE_ENV === 'production' ? files.css.map(renderStyleLink).join('\n') : ''}
          <title>Ida's calendar app</title>
        </head>
        <body>
            <div id="root"></div>
            ${files.js.map(renderScriptLink).join('\n')}
        </body>
        </html>
    `);
};
