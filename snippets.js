// http://twitter.com

// hacker theme
document.querySelector('style').textContent = `
* { 
  //border: 1px solid green !important;
  //color: green !important;
  background-color: black !important;
  font-family: monospace !important;
  border-radius: 0px !important;
}`

// edit all
document.body.contentEditable = true;

// add a button
Array.from(document.querySelectorAll('.js-actions')).forEach((el) => {
  const button = document.createElement('div');
  button.className = 'ProfileTweet-action ProfileTweet-action--reply custom-run-button';
  button.textContent = '→';
  button.onclick = () => { alert('hello'); }
  el.appendChild(button);
});

// use first tweet as editor
document.querySelector('.js-tweet-text').onclick = function() {
  console.log(this.textContent);
  eval(this.textContent);
}


