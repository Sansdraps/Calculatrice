// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
// console.log(listeKeycode);
const ecran = document.querySelector('.ecran');
console.log(ecran);

document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString;
  calculer(valeur);
});

document.addEventListener('click', (e) => {
  // console.log(e);
  const valeur = e.target.dataset.key;
  // console.log(valeur, typeof valeur);
  calculer(valeur)
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case '8':
        ecran.textContent = "";
        break;
      case '13':
        const calcul = eval(ecran.textContent)
        ecran.textContent = calcul;
        break;
      default:
        const indexKeyCode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});