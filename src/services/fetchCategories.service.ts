import { fetchCategories as endpoint } from "../constants/endpoint.constant";

export const fetchCategories = async () =>
  (await fetch(endpoint)).json();
