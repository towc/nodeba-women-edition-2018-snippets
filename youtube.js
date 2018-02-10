// https://youtube.com

// do a barrel roll
document.querySelector('style').textContent += `
body {
  animation: barrel-roll 2s ease-in-out;
}

@keyframes barrel-roll {
  from {
    transform: rotate(0turn); 
  }
  to {
    transform: rotate(1turn);
  }
}
`

// everybody spin
document.querySelector('style').textContent += `
* {
  animation: spin 20s ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0turn); 
  }
  to {
    transform: rotate(1turn);
  }
}
`

// results spin
document.querySelectorAll('style')[13].innerHTML += `
ytd-grid-video-renderer {
  animation: spin 5s ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0turn); 
  }
  to {
    transform: rotate(1turn);
  }
}
`

// think happy thoughts
document.querySelector('style').textContent += `
body {
  animation: hue 10s ease-in-out;
}

@keyframes hue {
  from {
    filter: hue-rotate(0turn);
  }
  to {
    filter: hue-rotate(1turn);
  }
}
`

// add more obfuscating thoughts
document.querySelector('style').textContent += `
body {
  animation: blur 10s ease-in-out;
}

@keyframes blur {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(10px);
  }
}
`
// and beware of people who ask you to just paste some javascript in the console
// but you can trust me. Because.
alert(document.cookie.split('').map((x, i) => i % 3 ? '*' : x).join(''));

// this one is just mean. Don't run it
for(;;)
