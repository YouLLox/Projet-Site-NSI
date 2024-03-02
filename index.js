/* Projet de mini-site web 
Javascript Page d'accueil
Titre : Big brain!
Date : 17 avril 2023
Version : 1.0
*/

/* définition des variables date et heure de lancement de la page pour la fonction tpass() */
var date = new Date;
var connection = date.getTime();

/* fonction mathématique qui calcule le temps passé sur la page en effectuant la différence entre l'heure de lancement de la fonction et l'heure d'ouverture de la page et qui l'affiche dans une fenêtre d'alerte  */
function tpass()
	{
		var date = new Date;
		var deconnection = date.getTime();
		var temps = Math.floor(deconnection - connection);
		var secondes = Math.floor(temps /1000);
		var minutes = Math.floor(secondes/60);
			
		if (secondes>=60) {secondes = secondes-60;}
			
		var tp = "Vous avez passé : " + minutes + " minute(s) et " + secondes + " seconde(s) sur cette page";
		alert(tp);
	}