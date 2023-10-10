// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key)
// console.log(listeKeycode);

document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString;
})

document.addEventListener('click', (e) => {
  // console.log(e);
  const valeur = e.target;
  console.log(valeur);
})