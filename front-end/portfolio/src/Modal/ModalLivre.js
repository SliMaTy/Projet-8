import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import livre from "../img/livre.PNG"

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
          <img src={livre} alt="livre" />
        </btn>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Mon vieux Grimoire</h2>
            <h3>Description</h3>
            <p>
            Vous êtes développeur back-end en freelance.
            <br></br> 
            Kévin vous contacte pour vous proposer de travailler avec lui en mutualisant vos compétences 
            front / back sur un tout nouveau projet qui lui a été proposé. 
            <br></br>
            Il s’agit d’une chaîne de 
            librairies qui souhaite ouvrir un site de référencement et de notation de livres. 
            </p>
            <h3>Problématiques</h3>
            <p>Gestion des utilisateurs / Système de notation et de commentaires / Stockage des données / Sécurité / Gestion des erreurs / Synchronisation des données en temps réel</p>
            <h3>Compétences</h3>
            <p>MONGO DB / NODE JS / EXPRESS / FIGMA </p>
            <a href="https://slimaty.github.io/Projet-7/">
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