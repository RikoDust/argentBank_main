// FEATURES_COMPONENT

import featuresData from "../../data/featuresData.json";
import "./Features.scss";


// Import.meta.glob() pour charger toutes les images du dossier assets/img
const images = import.meta.glob("../../assets/img/*.webp", { eager: true });



const Features = () => {
    return (
        <div className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map((feature) => (
                <div key={feature.id} className="feature-item">
                    <img
                        src={images[`../../assets/img/${feature.icon}`].default}
                        alt={feature.alt}
                        className="feature-icon"
                    />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};




export default Features;
