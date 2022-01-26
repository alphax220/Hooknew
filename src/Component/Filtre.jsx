import React from 'react';
import Movie from './MovieCard'
import './style.css'
import Superman from './images/Superman.jpg'
import Batman from './images/Btaman.jpg'
import Doom from './images/doom4.jpg'


//Gere la recherche d'un film 
class Filter extends React.Component{
   
        //Initialisation du constructeur
        constructor(props)
        {
            super(props)
            this.state = {
                fullname : props.fullname,
                movie : props.movie,
            }
        }

        //Chargement des films
        Changefullname = (event)=>{
       
            console.log(typeof(event.target.value))
        if(event.target.value === "Superman")
        {
            this.setState({movie:<Movie titre="Superman" description="Un mec qui vole!!" posterUrl={Superman} classification="1er" />})
        }
        else if (event.target.value === "")
        {
            this.setState({movie: "Champ de saisi vide"})
        }
        else if (event.target.value === "Batman")
        {
            this.setState({movie:<Movie titre="Batman" description=" Une mec qui ne sait pas voler!!" posterUrl={Batman} classification="Dernier" />})
        }
        else if (event.target.value === "Doom")
        {
            this.setState({movie:<Movie titre="Doom-SLAYER" description=" Une mec qui tue des démons!!" posterUrl={Doom} classification="Dernier" />})
        }
        }
    

   
    render()
    {
        //Entree pour chercher un film
        return <div className='clean'>
            <p>
            <label for="fullname"> The Movies </label> 
            <br/>
            <input type='search' name="s" id="fullname" onChange={this.Changefullname} placeholder="Recherche un Film.." required/>
            <p>
            Film Disponible : Batman-Superman-Doom
            </p>
           
            </p>
            
            {
                //Affichage du film selectionné
                this.state.movie
            }


            </div>

      
        
    }

}


export default Filter;