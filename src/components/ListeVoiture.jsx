import React from 'react';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
    // Initialisation de l'état pour stocker la liste des voitures
    const [voitures, setVoitures] = React.useState([
        { id: "v1", Marque: "RANGE ROVER", TypeCarburant: "Essence", PrixLocation: 600, image: "image8.png" },
        { id: "v2", Marque: "Dacia Logan", TypeCarburant: "Diesel", PrixLocation: 250, image: "image1.png" },
        { id: "v3", Marque: "BMW", TypeCarburant: "Essence", PrixLocation: 400, image: "image7.png" },
        { id: "v4", Marque: "Toyota Corolla", TypeCarburant: "Diesel", PrixLocation: 300, image: "image2.png" },
        { id: "v5", Marque: "Mercedes-Benz", TypeCarburant: "Diesel", PrixLocation: 300, image: "image4.png" },
    ]);

    // État pour contrôler l'affichage du formulaire d'ajout de voiture
    const [showForm, setShowForm] = React.useState(false);

    // Fonction pour supprimer une voiture de la liste en filtrant par id
    const deleteVoiture = (id) => {
        setVoitures(voitures.filter(voiture => voiture.id !== id));
    };

    // Fonction pour ajouter une nouvelle voiture au début de la liste
    const addVoiture = (newVoiture) => {
        setVoitures([newVoiture, ...voitures]);
        setShowForm(false); // Ferme le formulaire après l'ajout
    };

    // Styles personnalisés pour les différents éléments du composant
    const styles = {
        container: {
            maxWidth: "950px",
            margin: '30px auto',
            padding: '50px',
            color: '#FFEB00',
        },
        header: {
            textAlign: 'center',
            color: '#FFEB00',
            marginBottom: '30px',
            fontSize: '36px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        addButton: {
            display: 'block',
            margin: '10px',
            padding: '12px 24px',
            backgroundColor: '#FFEB00',
            color: '#1A1A1D',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
        },
        table: {
            width: '100%',
            marginTop: '20px',
            backgroundColor: '#2C2C2E',
            borderRadius: '8px',
            overflow: 'hidden',
            color: '#FFEB00',
        },
        tableHead: {
            backgroundColor: '#FFEB00',
            color: '#1A1A1D',
            padding: '12px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        tableBodyRow: {
            backgroundColor: '#1A1A1D',
        },
        tableBodyCell: {
            padding: '15px',
            textAlign: 'center',
            fontSize: '16px',
            color: '#FFEB00',
            borderBottom: '1px solid #333',
            backgroundColor: '#89898a',
        },
        image: {
            width: '90px',
            height: '60px',
            borderRadius: '5px',
        },
        deleteButton: {
            fontSize: '16px',
            padding: '6px 12px',
            color: '#1A1A1D',
            backgroundColor: '#FFEB00',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            
            <h1 style={styles.header}>Liste des Voitures</h1>
            <button style={styles.addButton} onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Annuler' : 'Ajouter une Voiture'}
            </button>
            {showForm && <AjouterVoiture onAdd={addVoiture} />}
            
            {/* Tableau pour afficher les voitures */}
            <table style={styles.table} className="table mt-4">
                <thead>
                    <tr>
                        <th style={styles.tableHead}>Image</th>
                        <th style={styles.tableHead}>Marque</th>
                        <th style={styles.tableHead}>Type de Carburant</th>
                        <th style={styles.tableHead}>Prix de Location</th>
                        <th style={styles.tableHead}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Boucle sur chaque voiture pour afficher une ligne dans le tableau */}
                    {voitures.map(voiture => (
                        <tr key={voiture.id} style={styles.tableBodyRow}>
                            <td style={styles.tableBodyCell}>
                                <img src={`./images/${voiture.image}`} alt={voiture.Marque} style={styles.image} />
                            </td>
                            <td style={styles.tableBodyCell}>{voiture.Marque}</td>
                            <td style={styles.tableBodyCell}>{voiture.TypeCarburant}</td>
                            <td style={styles.tableBodyCell}>{voiture.PrixLocation} MAD</td>
                            <td style={styles.tableBodyCell}>
                                {/* Bouton pour supprimer la voiture */}
                                <button style={styles.deleteButton} onClick={() => deleteVoiture(voiture.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeVoitures;
