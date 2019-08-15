import React from 'react';
import Formulario from './Formulario';

const Header = ({titulo, consultarNoticias}) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" >{titulo}</a>
        <Formulario consultarNoticias={consultarNoticias}/>
    </nav>  
);

export default Header;