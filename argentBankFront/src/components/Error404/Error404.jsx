
import { Link } from "react-router-dom";


import "./Error404.scss";




const Error404 = () => {
    return (
        <div className='error404'>
            <h2 className='error-title'>404</h2>
            <p className='error-text'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='back-home' >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Retourner sur la page d'accueil</Link>
        </div>
    );
};


export default Error404 ;
