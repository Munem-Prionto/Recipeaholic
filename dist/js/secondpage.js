const container = document.querySelector('.dishes')
const categoryName = localStorage.getItem('currentCategory')

const dishes__heading = document.querySelector('.dishes__heading');
dishes__heading.textContent = localStorage.getItem('currentCategory');


 category(categoryName)
    .then(data => {

        data.meals.forEach((meal , i) => {
            container.innerHTML += `
     
                <div class="dishes__item">
                    
                    <a href="./third.html" data-id="${meal.idMeal}">
                        <img src="${meal.strMealThumb}" alt="" data-id="${meal.idMeal}">
                        ${i+1} .  ${meal.strMeal}
                    </a>
                </div> 
   
            `;

        })

        const footer = document.querySelector('.footer')
        footer.style.display = 'block';
    }) 

    container.addEventListener('click' , e=> {
        if(e.target.tagName === 'A' || e.target.tagName === 'IMG') {
            const id = e.target.getAttribute("data-id");
            localStorage.setItem("currentMealId" , id)

        }

    })