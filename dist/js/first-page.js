const category__list__div = document.querySelector('.category__list__div');

const category__grid = document.querySelector('.category__grid')


const img = document.querySelector('.category__img');
category__grid.innerHTML = '';

category_list()
    .then(data => {
   
        const filterCategory = data.categories.filter(category => {
            if(category.strCategory === 'Pork' || category.strCategory === 'Miscellaneous') {
                return false;
            }else {
                return true
            }
        })
    


        filterCategory.forEach(li => {
        
            category__grid.innerHTML += `
            <div class="category__img__div">
                <a href="./second.html" class="category__img" >
                    <img src="./img/${li.strCategory}.jpg" alt="" srcset="" data-name="${li.strCategory}">
                </a> 
            </div>
            `;
        }) 

        const footer = document.querySelector('.footer')
        footer.style.display = 'block';
    })

    category__grid.addEventListener('click' , e=> {
        console.log(e.target.tagName)
        if(e.target.tagName === 'IMG') {

            const currentCat = e.target.getAttribute("data-name")
            localStorage.setItem("currentCategory" , currentCat)


        }

    })
