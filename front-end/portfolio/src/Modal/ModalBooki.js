import React, { useState } from "react";
import "./Modal.css";
import booki from "../img/booki.PNG"

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
          <img src={booki} alt="booki" />
        </btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Booki</h2>
            <h3>Description</h3>
            <p>
              L’entreprise souhaite développer un site Internet qui permette aux usagers 
              de trouver des hébergements et des activités dans la ville de leur choix.
              Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS.
            </p>
            <h3>Problématiques</h3>
            <p>Sélection des fonctionnalités / Contenu et images de qualité / Design responsive / Gestion des commentaires et avis</p>
            <h3>Compétences</h3>
            <p>HTML / CSS / FIGMA</p>
            <a href="https://slimaty.github.io/Projet-2-Openclassrooms/">
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