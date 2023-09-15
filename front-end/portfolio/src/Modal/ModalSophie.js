import React, { useState } from "react";
import "./Modal.css";
import sophie from "../img/sophie.PNG"

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
        <btn onClick={toggleModal}>
          <img src={sophie} alt="sophie" />
        </btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Sophie Bluel</h2>
            <h3>Description</h3>
            <p>
              Vous travaillez comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés. 
              Ayant terminé votre dernier projet avec un peu d'avance, vous êtes envoyé en 
              renfort comme développeur front-end d’une équipe qui travaille sur la conception du site
               portfolio d’une architecte d’intérieur.
            </p>
            <h3>Problématiques</h3>
            <p>Interaction utilisateur / Contenu et images de qualité / Authentification et gestion des utilisateurs / Synchronisation des données en temps réel</p>
            <h3>Compétences</h3>
            <p>HTML / CSS / JAVASCRIPT / FIGMA</p>
            <a href="https://github.com/SliMaTy/Projet-3-openclassroom">
              <btn className="site">Site</btn>
            </a>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}