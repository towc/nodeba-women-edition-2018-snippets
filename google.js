// https://www.google.sk/search?q=nodeschool+bratislava

// index results
Array.from(document.querySelectorAll('.rc')).forEach((el, i) => {
  el.outerHTML = `<h1 class=r>${i}</h1> ${el.outerHTML}`;
})

// clean up
Array.from(document.querySelectorAll('.st')).forEach((el) => {
  el.textContent = '';
})

// select a random one
let results = Array.from(document.querySelectorAll('h3.r > a'));
results[Math.floor(Math.random() * results.length)].click();

// shuffle letters
const shuffle = (ar) => {
  let ret = [];
  while(ar.length) {
    ret.push(ar.splice(Math.random() * ar.length |0, 1));
  }
  return ret;
}
['h3.r > a', '._Rm', '.st'].forEach((selector) => Array.from(document.querySelectorAll(selector)).forEach((el) => {
  el.textContent = shuffle(el.textContent.split('')).join('');
}))
