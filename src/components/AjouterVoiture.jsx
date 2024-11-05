import React, { useState } from 'react';

const AjouterVoiture = ({ onAdd }) => {
    const [marque, setMarque] = useState('');
    const [typeCarburant, setTypeCarburant] = useState('');
    const [prixLocation, setPrixLocation] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVoiture = {
            id: Date.now().toString(),
            Marque: marque,
            TypeCarburant: typeCarburant,
            PrixLocation: parseInt(prixLocation),
            image: image
        };
        onAdd(newVoiture);
        setMarque('');
        setTypeCarburant('');
        setPrixLocation('');
        setImage('');
    };

    return (
        <>
            <style>
                {`

                    

                    form {
                        background-color: #f9f8f5;
                        padding: 40px;
                        border: 3px solid #FFEB00;
                        border-radius: 15px;
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); 
                        width: 400px;
                        margin: 20px auto;
                    }

                    .form-label {
                        font-size: 18px; 
                        color: #333;
                        margin-bottom: 10px;
                    }

                    .form-control {
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #FFEB00;
                        border-radius: 8px;
                        font-size: 16px;
                        margin-bottom: 20px;
                        transition: border-color 0.3s, box-shadow 0.3s; 
                    }

                    .form-control:focus {
                        border-color: #383735;
                        box-shadow: 0 0 5px #403f3b; 
                        outline: none; 
                    }

                    .btn {
                        background-color: #FFEB00; 
                        color: #1A1A1D;
                        border: none;
                        border-radius: 8px;
                        padding: 12px;
                        cursor: pointer;
                        font-size: 20px;
                        transition: background-color 0.3s, transform 0.3s;
                        width: 100%;
                    }

                    .btn:hover {
                        background-color: #1A1A1D; 
                        transform: translateY(-2px); 
                    }

                    @media (max-width: 600px) {
                        form {
                            width: 90%; 
                        }
                    }
                `}
            </style>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Marque :</label>
                    <input type="text" className="form-control" value={marque} onChange={(e) => setMarque(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Type de Carburant :</label>
                    <input type="text" className="form-control" value={typeCarburant} onChange={(e) => setTypeCarburant(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Prix de Location :</label>
                    <input type="number" className="form-control" value={prixLocation} onChange={(e) => setPrixLocation(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Image :</label>
                    <input type="file" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
                <button type="submit" className="btn">Ajouter</button>
            </form>
        </>
    );
};

export default AjouterVoiture;
