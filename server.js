/* eslint-env node */

const express = require('express');
const app = express();

// Définir les routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/listeClients.html');
});

app.get('/creerClient', (req, res) => {
    res.sendFile(__dirname + '/public/CreeClient.html');
});

app.get('/modifierClient', (req, res) => {
    res.sendFile(__dirname + '/public/modif.html');
});

// Ajouter un nouveau client
app.post('/ajouterClient', (req, res) => 
{
    // Récupérer les informations du formulaire
    const email = req.body.email;
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const societe = req.body.societe;
    const pays = req.body.pays;

    // Effectuer la validation des champs ici

    // Ajouter le client à la base de données ou à un fichier

    // Rediriger vers la page de liste des clients
    res.redirect('/');
});

// Modifier un client existant
app.post('/modifierClient/:id', (req, res) => {
    // Récupérer l'ID du client à modifier
    const id = req.params.id;

    // Récupérer les informations du formulaire
    const email = req.body.email;
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const societe = req.body.societe;
    const pays = req.body.pays;

    // Effectuer la validation des champs ici

    // Modifier le client dans la base de données ou dans un fichier

    // Rediriger vers la page de liste des clients
    res.redirect('/');
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});

