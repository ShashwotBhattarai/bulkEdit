import React, { useState, ChangeEvent } from "react";
import { operators } from "constants/operators.constants";
import { Query } from "constants/query.interface";
import productStore from "store/filteredProduct";

const FilterComponent = () => {
  const [queries, setQueries] = useState<Query[]>([{ condition: "", operator: "", value: "" }]);
  const [logic, setLogic] = useState<string>("or");
  const { fetchedProducts, fetchProducts } = productStore((state: any) => state);
  const handleQueryChange = (index: number, field: keyof Query, newValue: string) => {
    const newQueries = [...queries];
    newQueries[index][field] = newValue;
    setQueries(newQueries);
  };

  const addQuery = () => {
    setQueries([...queries, { condition: "", operator: "", value: "" }]);
  };

  const removeQuery = (index: number) => {
    const newQueries = [...queries];
    newQueries.splice(index, 1);
    setQueries(newQueries);
  };

  const handleLogicChange = (newLogic: string) => {
    setLogic(newLogic);
  };

  const getOperatorOptions = (condition: string) => {
    return operators[condition] || [];
  };

  const handleSearch = async () => {
    try {
      console.log("im inside handle search ");
      await fetchProducts(queries, logic);
      const { fetchedProducts } = productStore((state: any) => state);
      console.log(fetchedProducts);
    } catch (error) {
      /// need to add an area where loader and error can be shown
    }
  };

  return (
    <div>
      <h2>Filter Component</h2>
      {queries.map((query, index) => (
        <div id="inputdiv" key={index}>
          <label>Condition:</label>
          <select
            value={query.condition}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleQueryChange(index, "condition", e.target.value)}
          >
            <option value="">Select Operator</option>
            {Object.keys(operators).map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>

          <label>Operator:</label>
          <select
            value={query.operator}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleQueryChange(index, "operator", e.target.value)}
          >
            <option value="">Select Operator</option>
            {getOperatorOptions(query.condition).map((operator) => (
              <option key={operator} value={operator}>
                {operator}
              </option>
            ))}
          </select>

          <label>Value:</label>
          <input
            type="text"
            value={query.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleQueryChange(index, "value", e.target.value)}
          />

          <button type="button" onClick={() => removeQuery(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addQuery}>
        Add Query
      </button>

      <label>Logic:</label>
      <select value={logic} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleLogicChange(e.target.value)}>
        <option value="and">AND</option>
        <option value="or">OR</option>
      </select>

      <button type="button" onClick={handleSearch}>
        Search
      </button>

      {fetchedProducts && (
        <div>
          <h3>Search Result:</h3>
          <pre>{JSON.stringify(fetchedProducts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
