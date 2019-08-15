import React, {Component, Fragment} from 'react';
import Header from './componentes/Header';
import ListaNoticias from './componentes/ListaNoticias';



class App extends Component {
  state = {
    //creo el objeto para cargar el fetch
    noticias: []
  }

  //cargo los metodos de carga de datos
  componentDidMount(){
    this.consultarNoticias();
   
  }

  //llamar a la api en un metodo propio
  consultarNoticias = async (categoria = 'general') => {
    //cargo la url
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=79f2e301b7fa4e2886aaaa4b6d092fdc`;
    //hago un fetch de la noticia
    const respuesta = await fetch (url);
    //retornamos la respuesta en un json (para procesarla)
    const noticias = await respuesta.json();

    //envio la respuesta al state noticias
    this.setState({
      //llamo solo a los articulos, por que no uso el resto de la API (response y demas)
      noticias : noticias.articles
    })
  }


  render(){
    return(
      <Fragment>
        <Header 
            titulo='API de Noticias'
            consultarNoticias={this.consultarNoticias}
        />
        <div className="container">
          <h1 className="text-white text-center my-4">Últimas Noticias</h1>
            <ListaNoticias
              noticias={this.state.noticias}
            />
        </div>

      </Fragment>
      
    );
  }
}

export default App;
