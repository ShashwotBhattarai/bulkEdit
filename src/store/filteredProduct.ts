import { create } from "zustand";
import { filterService } from "services/Filter.service";
import { Query } from "constants/query.interface";
const productStore = create((set) => ({
  fetchedProducts: [],

  fetchProducts: async (queries: Query[], logic: string) => {
    console.log("state fired");
    const result = await filterService(queries, logic);
    console.log(result);
    set({ fetchedProducts: result });
  },
}));

export default productStore;
