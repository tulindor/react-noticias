import React, {Component, Fragment} from 'react';

class Formulario extends Component {
    state={
        categoria : 'general'
    }

    cambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => { //se pone un callback para ejecutarse despues

            //pasarlo a la app principal para hacer la consulta filtrada
            this.props.consultarNoticias(this.state.categoria);
            
        });

    }

    render(){
        return(
          <Fragment>
                <form className="form-inline my-2 my-lg-0">
                    <select onChange={this.cambiarCategoria} className="form-control">
                        <option value="general">Todas</option>
                        <option value="science">Ciencia</option>
                        <option value="technology">Tecnología</option>
                        <option value="sports">Deportes</option>
                    </select>
                </form>
           </Fragment>

        );
    }

}

export default Formulario;