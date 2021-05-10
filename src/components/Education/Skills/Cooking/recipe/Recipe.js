import React from 'react';
import { Card } from 'react-bootstrap';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <Card className="bg-light d-flex justify-content-around align-items-center m-4" style={{ minWidth: "40%" }}>
            <h2 className="text-info p-3">{title}</h2>
            <p style={{ fontWeight: "bold" }}>Calories: {calories}</p>
            <img style={{ width: "200px", height: "200px", borderRadius: "8px" }} src={image} alt="" />
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </Card>
    );
};

export default Recipe;