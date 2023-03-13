/* eslint-env node */

const express = require('express');
const app = express();

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});

// Définir les routes
app.get('/listeClients', (req, res) => {
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

    // Validation des champs
    // Utilisation de la bibliothèque Joi (permet de faire des validation de champs)
    const Joi = require('joi');
    const schema = Joi.object({
        email: Joi.string().email().required(),
        prenom: Joi.string().required(),
        nom: Joi.string().required(),
        societe: Joi.string().required(),
        pays: Joi.string().required()
    });
    const { error, value } = schema.validate({ email, prenom, nom, societe, pays });
    if (error) {
        console.log(error.details);
        // Si la validation échoue, vous pouvez renvoyer un message d'erreur à l'utilisateur ou rediriger vers une page d'erreur
        res.redirect('/erreur');
        return;
    }

    // Créer un objet "client" à partir des informations récupérées dans le formulaire
    const client = { email, prenom, nom, societe, pays };

    // Ajouter le client à la base de données ou à un fichier
    // Ici, nous allons simplement ajouter le client à un tableau en mémoire pour cet exemple
    client.push(client);

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
    if (!id || !email || !prenom || !nom || !societe || !pays) {
        return res.status(400).send('Tous les champs sont obligatoires');
    }
    // Modifier le client dans la base de données ou dans un fichier

    // Rediriger vers la page de liste des clients
    res.redirect('/');
});



