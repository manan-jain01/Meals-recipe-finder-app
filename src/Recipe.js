import React from 'react'
import './recipe.css'

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div className="container">
            <div className="box-1">
                <div className="head">
                    <h3>{title}</h3>
                </div>
                
                <div className="items">
                    {ingredients.map((ing)=>(
                        <ul>{ing.text}</ul>
                    ))}
                </div>
                
                <div className="cal">
                    <h3>calories: {calories}</h3>
                </div>
            </div>

            <div className="img">
                <img src={image} alt="image not available" />
            </div>
        </div>
    )
}

export default Recipe;