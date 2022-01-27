
import { useState, useEffect } from "react";
import "./RecipeApi.scss"
import React from 'react';
import axios from "axios";

const RecipeApi = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setRecipe(res.data.meals[0])
      })
  }, [])

  console.log(recipe)

  const reFetch = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setRecipe(res.data.meals[0])
      })
  }


  return <section className='rSection'>
      <div className="rSection__container">
        <div className="rSection__container__split">
          <div className="rSection__container__split__left">
            <h1>Recipe generator</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure omnis impedit obcaecati dignissimos labore quam voluptate necessitatibus repellendus reiciendis!ing elit. Hic, ea.</p>
          </div>
          <div className="rSection__container__split__right">
          <div className="content">
            <div className="content__buttons">
              <button onClick={reFetch}>New recipe</button>
            </div>
            <div className="content__container">
              <div className="content__container__card">
                <div className="content__container__card__header">
                  <h1>{recipe.strMeal}</h1>
                </div>
                <div className="content__container__card__split">
                  <div className="content__container__card__split__left">
                    <img src={recipe.strMealThumb}  alt="" />
                  </div>
                  <div className="content__container__card__split__right">
                    <ul>
                    <li>{recipe.strIngredient1}</li>
                    <li>{recipe.strIngredient2}</li>
                    <li>{recipe.strIngredient3}</li>
                    <li>{recipe.strIngredient4}</li>
                    <li>{recipe.strIngredient5}</li>
                    <li>{recipe.strIngredient6}</li>
                      <li>{recipe.strIngredient7}</li>
                  </ul>
                  </div>
                </div>
                <div className="content__container__card__instruction">
                  <p>{recipe.strInstructions}</p>
                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </section>
};

export default RecipeApi;
