import { fetchByCategory as endpoint } from "../constants/endpoint.constant";

export const fetchByCategory = async ({
  category
}: {
  category: string
}) =>
  (await fetch(endpoint({ category }))).json();
