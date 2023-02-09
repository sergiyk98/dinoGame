const dino = document.getElementById('dino'),
   cactus = document.getElementById('cactus');

let counter = document.getElementById('counter');

document.addEventListener('keydown', function (event) {
   counter.innerHTML++;
   jump();

});


function jump() {
   if (dino.classList != 'jump') {
      dino.classList.add('jump');
   }

   setTimeout(function () {
      dino.classList.remove('jump');
   }, 300);
}

let isAlive = setInterval(function () {

   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

   if (cactusLeft < 50 && dinoTop >= 140) {
      alert(`Гру закінчено, ваш результат: ${counter.innerHTML}`);
   }

}, 10);