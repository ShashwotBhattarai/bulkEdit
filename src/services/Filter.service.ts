import { Query } from "constants/query.interface";
import dotenv from "dotenv";

dotenv.config();

export async function filterService(queries: Query[], logic: string) {
  const url = process.env.REACT_APP_FILTER_BACKEND || "https://sas-filter.onrender.com/filter";
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queries, logic }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
}
