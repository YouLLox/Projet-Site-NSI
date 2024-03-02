/* Projet de mini-site web 
Javascript pour page de connexion
Titre : Big brain!
Date : 17 avril 2023
Version : 1.0
*/

/* fonction permettant de rechercher l'élément contenant l'id "texte" puis de changer sa couleur en rouge */
  
function change_couleur() {
  var test = document.getElementById("text");
  test.style.color = 'blue';
}

/* fonction permettant de rechercher l'élément contenant l'id "texte" puis de changer sa couleur en noir */

function reset_couleur() {
  var test = document.getElementById("text");
  test.style.color = 'black';
}

/* fonction permettant de rechercher toutes les cases à cocher portant le nom "news" puis de les cocher toutes automatiquement */

function ToutCocher() {
  var cases=document.getElementsByName("news");
  for (var i=0; i < cases.length; i++) {
    cases[i].checked=true;
  }
}
