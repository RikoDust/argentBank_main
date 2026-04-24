# Site_Argent_Bank


## 📋 À propos

Projet de formation consistant en la réalisation d'une application bancaire avec espace utilisateur

Contexte : Projet de formation (Openclassrooms)

## ✨ Fonctionnalités principales

- Interface d'une application bancaire
- Authentification pour espaces utilisateurs
- Changement de "surnom" de l'utilisateur


## 🖼️ Aperçu

Captures d'écran :

<img width="1417" height="941" alt="argent_bank_home" src="https://github.com/user-attachments/assets/38d6faf7-c0b9-471f-8777-4d5a598b9ced" />
<img width="1413" height="940" alt="argent_bank_signin" src="https://github.com/user-attachments/assets/77bb794f-aca7-4c07-a5f2-c9fd69eb697f" />
<img width="1416" height="942" alt="argent_bank_user" src="https://github.com/user-attachments/assets/32f5303e-e225-4434-9b63-6de070ecea2b" />
<img width="1411" height="937" alt="argent_bank_name" src="https://github.com/user-attachments/assets/c7dd4d93-d549-4cd6-a6da-f73dcf2ac2e3" />



## 🛠️ Technologies utilisées

**Frontend :**
- React
- Redux
- JavaScript
- HTML
- CSS

**Backend :**
- Node.js
- Express
- MongoDB
- Mongoose

**Outils & DevOps :**
- Git / GitHub
- VS Code
- npm
- Swagger


## 🚀 Installation et utilisation 

**Prérequis**
- Node.js (v12 min recommandé pour le projet)
- MongoDB Community Server
- npm


## Installation

bash
Cloner le repository
git clone [https://github.com/ton-pseudo/argentBank.git](https://github.com/RikoDust/argentBank_main)

── BACKEND ──
cd argentBankBack
npm install

Lancer MongoDB (dans un autre terminal)
mongod

Démarrer le serveur backend
npm run dev:server

Peupler la base de données
npm run populate-db

Le serveur tourne sur http://localhost:3001
Documentation API :
http://localhost:3001/api-docs

── FRONTEND ──
cd ../argentBankFront
npm install
npm start

Le site tourne généralement sur :
http://localhost:3000


Comptes de test :

Tony Stark
Email    : tony@stark.com
Password : password123

Steve Rogers
Email    : steve@rogers.com
Password : password456



## 📚 Apprentissages & Défis

Ce que j'ai appris :
- Implémentation de l'interface de l'application bancaire
- Gestion de l'authentification utilisateur avec appel API
- Requête pour récupération des informations de l'utilisateur
- Déploiement de Redux pour la gestion des états et données
- Utilisation de Swagger pour documenter les API


**Objectifs pédagogiques :**
- Afficher les données du back end sur l'interface via des appels API 
- Configurer des routes API pour la communication client / serveur 
- Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front


## 👤 Auteur

**Emeric**
- Portfolio : https://www.epataut.fr/
- LinkedIn : https://www.linkedin.com/in/emeric-pataut/
- GitHub : https://github.com/RikoDust/argentBank_main

## 📝 Licence

Projet d'apprentissage réalisé dans le cadre de ma formation.  
Non destiné à une utilisation en production.
