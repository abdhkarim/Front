// const express = require('express'); // module chargé 
// const app = express(); // Instance du serveur web
// const port = 3000; // port du serveur web
/* eslint-env node */



// function main ()
// {
//     app.use(express.static('public'));
//     app.get('/', function (req, res) {

//         console.log('I M IN');
//         res.send("Hello Maxime le Forestier");
//     });

//     app.get('/test', function (req, res) => {

//         res.sendFile(__dirname + "public/test.html");
//     });

//     app.listen(port, () =>) {
//         console.log('Example app listening on port');
//     }
// }

// Importer le module express
const express = require('express');

// Créer une instance de l'application express
const app = express();

// Définir le port sur lequel le serveur écoutera les requêtes
const port = 3000;

// Lancer le serveur et afficher un message dans la console pour indiquer que le serveur est en cours d'exécution
app.listen(port, () => 
{
    console.log(`Le serveur est en cours d'exécution sur le port ${port}.`);
});
