const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://towardsdatascience.com/understanding-cnn-convolutional-neural-network-69fd626ee7d4')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});