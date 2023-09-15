import React, { useState } from "react";
import "./Modal.css";
import nina from "../img/nina.PNG"

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
          <img src={nina} alt="nina" />
        </btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Nina Carducci</h2>
            <h3>Description</h3>
            <p>
            Vous êtes développeur freelance, et vous décidez de proposer vos services d’optimisation 
            SEO à de nouveaux clients. Pour ce faire, vous avez analysé plusieurs sites internet. 
            Parmi vos prospects, il y a le site de Nina Carducci, une photographe dont vous a parlé 
            l’un de vos amis.
            </p>
            <h3>Problématiques</h3>
            <p>Optimisation des images / Optimisation pour les moteurs de recherche (SEO) / Gestion de la vitesse de chargement / Analytiques et suivi de performances / Contrôle de la qualité</p>
            <h3>Compétences</h3>
            <p>HTML / CSS / JAVASCRIPT / FIGMA </p>
            <a href="https://slimaty.github.io/Projet-5-nouveauSite/">
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