// http://twitter.com

// edit all
document.body.contentEditable = true;

// hacker theme
document.querySelector('style').textContent = `
* { 
  //border: 1px solid green !important;
  //color: green !important;
  background-color: black !important;
  font-family: monospace !important;
  border-radius: 0px !important;
}`

// add a button
Array.from(document.querySelectorAll('.js-actions')).forEach((el) => {
  const container = document.createElement('div');
  container.className = 'ProfileTweet-action ProfileTweet-action--reply';

  const button = document.createElement('button');
  button.className = 'ProfileTweet-actionButton custom-run-button';
  button.innerHTML = 'RUN';
  button.onclick = () => { alert('hello'); }

  container.appendChild(button);
  el.appendChild(container);

});

// use first tweet as editor
Array.from(document.querySelectorAll('.custom-run-button')).forEach((button) => {
  button.onclick = function() {
    eval(this.parentElement.parentElement.parentElement.parentElement.querySelector('.js-tweet-text').textContent);
  }
})


