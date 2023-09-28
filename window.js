let body = document.body;
let header = document.querySelector('header');
let opnMn = document.querySelector('.opnMn');
let rightMn = document.querySelector('.rightMn');

let chg = false

opnMn.addEventListener('click', () => {
  if(!chg){
    rightMn.classList.toggle('rightMnOpen')
    opnMn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    chg = true;
  }else{
    rightMn.classList.toggle('rightMnOpen')
    opnMn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    chg = false;
  }
})
