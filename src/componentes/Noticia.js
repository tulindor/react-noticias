import React from 'react';


const Noticia = ({noticia}) =>{

    //extraer datos de noticia
    const {urlToImage, url, title, description, source} = noticia;

    //cargar valor si existe

    const imagen = (urlToImage) ?
        <img className="img-fluid rounded-top" src={urlToImage} alt={title} />
    : null;

    return(
        <div className="col-lg-4">
            {imagen}
            <div className="p-4 rounded-bottom bg-white shadow-sm mb-4">
                <h4>{title}</h4>
                <p><span className="bg-dark small text-white rounded py-1 px-3">Fuente: {source.name}</span></p>
                <p>"{description}"</p>
                <p className="small text-muted float-right"></p>
                <a className="btn btn-danger" href={url} target="_blank" rel="noopener noreferrer" >Leer más</a>
            </div>
        </div>
    );
}



export default Noticia;