
export const fetchCategories = "https://api.chucknorris.io/jokes/categories"
export const fetchByCategory = ({ category }: { category: string }) => `https://api.chucknorris.io/jokes/random?category=${category}`
