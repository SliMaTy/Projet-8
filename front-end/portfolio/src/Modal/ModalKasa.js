import React, { useState } from "react";
import "./Modal.css";
import kasa from "../img/kasa.PNG"

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
          <img src={kasa} alt="kasa" />
        </btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Kasa</h2>
            <h3>Description</h3>
            <p>
            Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle 
            plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis
             près de 10 ans maintenant.<br></br> Avec plus de 500 annonces postées chaque jour, Kasa fait partie des 
             leaders de la location d’appartements entre particuliers en France.
            </p>
            <h3>Problématiques</h3>
            <p>Intégration des données immobilières / Gestion des annonces / Interface utilisateur conviviale (Animation) </p>
            <h3>Compétences</h3>
            <p>HTML / SCSS / REACT / FIGMA </p>
            <a href="https://slimaty.github.io/Projet-6/">
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