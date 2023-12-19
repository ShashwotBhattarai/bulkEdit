export const operators: Record<string, string[]> = {
  title: ["is equal to", "is not equal to", "starts with", "ends with", "contains", "does not contain"],
  product_type: ["is equal to", "is not equal to", "starts with", "ends with", "contains", "does not contain"],
  vendor: ["is equal to", "is not equal to", "starts with", "ends with", "contains", "does not contain"],
  tags: ["is equal to"],
  price: ["is equal to", "is not equal to", "is greater than", "is less than"],
  compare_at_price: ["is equal to", "is not equal to", "is greater than", "is less than", "is not empty", "is empty"],
  weight: ["is equal to", "is not equal to", "is greater than", "is less than"],
  inventory_stock: ["is equal to", "is greater than", "is less than"],
  variants_title: ["is equal to", "is not equal to", "starts with", "ends with", "contains", "does not contain"],
};
