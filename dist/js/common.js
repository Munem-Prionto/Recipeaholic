
const category_list = async () => {
    const base = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(base);
    const data = await response.json()

    return data
}

const category = async (name) => {
    const base = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
    const response = await fetch(base);
    const data = await response.json()

    return data
    
}
const mealById = async (id) => {
    const base = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(base)
    const data = await response.json()

    return data
}