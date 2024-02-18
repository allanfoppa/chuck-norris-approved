
const BASE_URL = "https://api.chucknorris.io/jokes"

export const fetchCategories = `${BASE_URL}/categories`
export const fetchByCategory = ({ category }: { category: string }) => `${BASE_URL}/random?category=${category}`
