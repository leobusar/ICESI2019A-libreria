import React, { Component } from 'react';
<<<<<<< HEAD
import firebase from '../../config/Firebase';

=======
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
import LibroList from  './LibroList';
import LibroForm from './LibroForm';

class Libros extends Component {

  constructor(){
      super();

      this.state ={
            libros: [
                { id: 1,  name: "Hojarasca", author: "Gabriel GM" },
                { id: 2,  name: "Cien  años de soledad", author: "Gabriel GM" },
<<<<<<< HEAD
                { id: 3,  name: "platero y yo", author: "Juan Ramón Jimenez" },
                { id: 4,  name: "Romeo y julieta", author: "William Shakespeare" }
            ],
            libroEdit: { id: "",  name: "", author: ""},
            db: firebase.firestore()
=======
                { id: 3,  name: "platero y yo", author: "Rafael Pombo" },
                { id: 4,  name: "Romeo y julieta", author: "William Shakespeare" }
            ],
            libroEdit: { id: "",  name: "", author: ""}
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
      };

  }

<<<<<<< HEAD

  componentDidMount(){
    var libros = this.state.db.collection("libros").get().then((querySnapshot)=>
        querySnapshot.forEach(doc =>{
          console.log(doc.data())
        })
    );
  }

=======
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
  agregarLibro(libro){

      let  libros = this.state.libros;

<<<<<<< HEAD
      if(libro.id!==""){
        let index = libros.findIndex( (libroItem) => {return libroItem.id===libro.id });
=======
      if(libro.id!=""){
        let index = libros.findIndex( (libroItem) => {return libroItem.id==libro.id });
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
        libros[index] = libro;
      }
      else{
        let  id  = Math.floor(Math.random()*100000)+1;
        libro.id = id;
        libros.push(libro);
      }
      this.setState({
        libros: libros,
        libroEdit: { id: "",  name: "", author: ""}
      });
      //console.log(libros);

  }

  editarLibro(libro){
    console.log(libro);
    this.setState({
       libroEdit: libro
     });
  }


  render() {
    return (

      <div className="Libros container mt-5">
<<<<<<< HEAD
         <h1> Librería de {this.props.owner}</h1>
=======
         <h1> Librería {this.props.owner}</h1>
>>>>>>> 61e53b7b85c040d530da9057c5349f539dd4163d
         <LibroList  libros={this.state.libros} handleEditarLibro={this.editarLibro.bind(this)}/>
         <LibroForm handleNuevoLibro={this.agregarLibro.bind(this)}  libroEdit={this.state.libroEdit} />
      </div>
    );
  }
}

export default Libros;
