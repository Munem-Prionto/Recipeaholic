const mealId = localStorage.getItem('currentMealId');

const container = document.querySelector('.container');

////////////////
const dish__heading_text = document.querySelector('.dish__heading-text');
const dish__img = document.querySelector('.dish__img');
const dish__in = document.querySelector('.dish__in');
const dish__inst = document.querySelector('.dish__inst');
const dish__vid = document.querySelector('.dish__vid');


mealById(mealId)
    .then(data => {
        const meal = data.meals[0];
        const mealI = meal.strInstructions;




        dish__heading_text.innerHTML = 
        `<h1 class="dish__heading-text">${meal.strMeal}</h1>`;

        dish__img.innerHTML = 
        `<img src="${meal.strMealThumb}" alt="" srcset="">`;

        dish__in.innerHTML = 
        `<h2>Ingredient</h2>`;
        for(let i = 1; i < 21; i++) {
        if(meal[`strIngredient${i}`]) {
            
            dish__in.innerHTML += 

            `
            <div>- ${meal[`strIngredient${i}`]} (${meal[`strMeasure${i}`]})</div>`;  
            }
        }; 

        dish__inst.innerHTML = 
        `
        <h2>Instructions</h2>
        <p>
        ${mealI}
           
        </p>
        `;

        //video
        let yTlink = meal.strYoutube;
/*         let n = 11;
        let embedLink = yTlink.slice(-n)
        <iframe  src="https://www.youtube.com/embed/${embedLink}?controls=1">
        </iframe> */

        dish__vid.innerHTML = `<a href="${yTlink}" target="_blank"><h2>Video Tutorial</h2></a>`;


 

        
    });

    