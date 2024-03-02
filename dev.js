/* Projet de mini-site web 
Javascript pour page d'information : site en développement
Titre : Big brain!
Date : 17 avril 2023
Version : 1.0
*/

/* fonction permettant de faire défiler du texte à la vitesse désirée */

function defilement(texte, vitesse) {
  /* création de l'élément paragraphe qui contient le texte */
  var element = document.createElement("p");
  /* définition des propriétés de l'élément paragraphe */
  element.style.whiteSpace = "nowrap";
  element.style.position = "fixed";
  element.style.bottom = "15%";
  element.style.left = "0";
  element.style.margin = "0";
  element.style.padding = "0";
  element.style.fontSize = "48px";
  element.style.color = "#005ce6";
  element.style.fontWeight = "bold";
  /* insertion du texte dans l'élément paragraphe */
  element.textContent = texte;
  /* insertion de l'élément paragraphe dans la page */
  document.body.appendChild(element);

  /* définition des variables pour la fonction deplacer : recuperation de la lergeur du texte, puis de l'écran et positionnement du point de départ du texte */
  var largeurTexte = element.clientWidth;
  var largeurEcran = window.innerWidth;
  var position = 1200;

  /* sous-fonction permettant le déplacement du texte lorsqu'il arrive au bout de l'écran */
  function deplacer() {
    position -= 2;
    /* si l'élément dépasse la largeur de l'écran, il est repositionné à droite */
    if (position < -largeurTexte) {
      position = largeurEcran;
    }
    element.style.left = position + "px";
  }
  /* appel de la sous-fontion deplacer() toutes les x ms */
  setInterval(deplacer, vitesse);
}
