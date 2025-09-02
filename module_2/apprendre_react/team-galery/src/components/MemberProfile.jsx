import React from "react";

function MemberProfile({ props }) {
  return (
    <>
      <div style={{
        border: '2px solid #e1e5e9',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '250px'
      }}>
        <img
          // Mettre les propriétés manquantes
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '10px'
          }}
        />
        <h3 style={{ color: '#2c3e50', marginBottom: '5px' }}>
          {/*Afficher le nom*/}
        </h3>
        <p style={{
          color: '#3498db',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          {/*Afficher le poste*/}
        </p>
        <p style={{
          color: '#7f8c8d',
          fontSize: '14px',
          marginBottom: '15px'
        }}>
          {/*Afficher une description*/}
        </p>
        {/* 🔥 TON TRAVAIL : Ajoute ici l'affichage des compétences */}
        <div style={{ marginTop: '15px' }}>
          <strong>Compétences :</strong>
          {/* Remplace ce commentaire par l'affichage des compétences */}
        </div>
      </div>
    </>
  )
}

export default MemberProfile