import React from 'react'

class Movie extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            titre : props.titre,
            description : props.description,
            posterUrl : props.posterUrl,
            classification : props.classification,
            

        }
    }



    render()
    {
        return <div>
                <img src= {this.state.posterUrl} alt="SupermanPic"/>
                <p>
                    {this.state.title}
                </p>
                <p>
                    {this.state.description}
                </p>
                <p>
                    {this.state.classification}
                </p>
                
            
        </div>
    }
}

Movie.defaulProps={
    titre : "Name-Movie",
    description : "Description du film",
    posterUrl : "Imgae du film",
    classification : "Classement du film",

}
export default Movie;