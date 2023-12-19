import React, { useState } from "react";
import { Table, Tbody, Td, Th, Thead, Tr, Input, Button, VStack } from "@chakra-ui/react";

const ProductTable = () => {
  const fetchedProducts: any[] = [
    {
      image: {
        product_id: "7871018598598",
        position: 1,
        created_at: "2023-11-06T13:49:49.000Z",
        updated_at: "2023-11-06T13:49:49.000Z",
        alt: null,
        width: 631,
        height: 283,
        src: "https://cdn.shopify.com/s/files/1/0604/2409/3894/products/18df8a4ecf5fbf9aa67166c4aade7482.jpg?v=1699278589",
        variant_ids: [],
      },
      _id: 7871018598598,
      title: "GUERNICA | PABLO PICASSO",
      handle: "guernica-pablo-picasso",
      body_html:
        "The most famous painting by Picasso, completed in 1937. The painting was painted in Paris and is Inspired by the bombing of Guernica in Spain during the Spanish Civil War. The painting is on permanent display in Museo Reina Sofia, Madrid, Spain.",
      vendor: "PAINT",
      product_type: "PAINTING",
      created_at: "2023-11-06T13:49:49.000Z",
      updated_at: "2023-11-06T13:49:55.000Z",
      published_at: "2023-11-06T13:49:49.000Z",
      published_scope: "global",
      tags: "egnition-sample-data, painting, surrealism",
      variants: [42911748030662],
      options: [
        {
          _id: "9883009876166",
          product_id: "7871018598598",
          name: "Title",
          position: 1,
          values: ["Default Title"],
        },
      ],
      images: [
        {
          _id: "35979984208070",
          product_id: "7871018598598",
          position: 1,
          created_at: "2023-11-06T13:49:49.000Z",
          updated_at: "2023-11-06T13:49:49.000Z",
          alt: null,
          width: 631,
          height: 283,
          src: "https://cdn.shopify.com/s/files/1/0604/2409/3894/products/18df8a4ecf5fbf9aa67166c4aade7482.jpg?v=1699278589",
          variant_ids: [],
        },
      ],
      metafields: [],
      createdAt: "2023-11-21T01:23:34.699Z",
      updatedAt: "2023-11-21T01:23:34.699Z",
      __v: 0,
      shop_id: 60424093894,
    },
    {
      image: {
        product_id: "7871259607238",
        position: 1,
        created_at: "2023-11-06T17:42:25.000Z",
        updated_at: "2023-11-06T17:42:25.000Z",
        alt: null,
        width: 631,
        height: 283,
        src: "https://cdn.shopify.com/s/files/1/0604/2409/3894/products/18df8a4ecf5fbf9aa67166c4aade7482_e259e687-a01d-4636-88c7-c738b837e944.jpg?v=1699292545",
        variant_ids: [],
      },
      _id: 7871259607238,
      title: "GUERNICA | PABLO PICASSO",
      handle: "guernica-pablo-picasso-1",
      body_html:
        "The most famous painting by Picasso, completed in 1937. The painting was painted in Paris and is Inspired by the bombing of Guernica in Spain during the Spanish Civil War. The painting is on permanent display in Museo Reina Sofia, Madrid, Spain.",
      vendor: "PAINT",
      product_type: "PAINTING",
      created_at: "2023-11-06T17:42:25.000Z",
      updated_at: "2023-11-06T17:42:31.000Z",
      published_at: "2023-11-06T17:42:25.000Z",
      published_scope: "global",
      tags: "egnition-sample-data, painting, surrealism",
      variants: [42913071333574],
      options: [
        {
          _id: "9883276214470",
          product_id: "7871259607238",
          name: "Title",
          position: 1,
          values: ["Default Title"],
        },
      ],
      images: [
        {
          _id: "35981112737990",
          product_id: "7871259607238",
          position: 1,
          created_at: "2023-11-06T17:42:25.000Z",
          updated_at: "2023-11-06T17:42:25.000Z",
          alt: null,
          width: 631,
          height: 283,
          src: "https://cdn.shopify.com/s/files/1/0604/2409/3894/products/18df8a4ecf5fbf9aa67166c4aade7482_e259e687-a01d-4636-88c7-c738b837e944.jpg?v=1699292545",
          variant_ids: [],
        },
      ],
      metafields: [],
      createdAt: "2023-11-21T01:23:34.753Z",
      updatedAt: "2023-11-21T01:23:34.753Z",
      __v: 0,
      shop_id: 60424093894,
    },
  ];
  const [editableProducts, setEditableProducts] = useState<any[]>(fetchedProducts);
  const [editsExist, setEditsExist] = useState(false);

  const handleFieldChange = (productId: number, columnName: string, value: string) => {
    setEditableProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product._id === productId) {
          const edited = product[columnName as keyof typeof product] !== value;
          return { ...product, [columnName]: value, edited };
        } else {
          return product;
        }
      });

      const editsRemaining = updatedProducts.some((product) => product.edited);

      setEditsExist(editsRemaining);

      return updatedProducts;
    });
  };

  const handleShowEdits = () => {
    const tableCells = document.querySelectorAll("td");
    tableCells.forEach((cell) => {
      if (cell.classList.contains("edited")) {
        cell.style.backgroundColor = "#ffffcc";
      }
    });
  };

  const handleSave = () => {
    const editedProducts = editableProducts.filter((product) => product.edited);

    const editedProductsWithoutEditedKey = editedProducts.map((product) => {
      const { edited, ...productWithoutEditedKey } = product;
      return productWithoutEditedKey;
    });
    console.log(editableProducts);

    setEditableProducts((prevProducts) => prevProducts.map((product) => ({ ...product, edited: false })));
    setEditsExist(false);
  };

  const handleDiscard = () => {
    setEditableProducts(fetchedProducts);
    setEditsExist(false);
  };

  const columns = ["tags", "vendor", "product_type", "published_scope"];

  return (
    <VStack spacing={4} align="stretch">
      <Button colorScheme="teal" onClick={handleShowEdits}>
        Show Edits
      </Button>
      <Button colorScheme="green" onClick={handleSave} isDisabled={!editsExist}>
        Save
      </Button>
      <Button colorScheme="red" onClick={handleDiscard} isDisabled={!editsExist}>
        Discard
      </Button>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {editableProducts.map((product) => (
            <Tr key={product._id}>
              {columns.map((column) => (
                <Td key={column} className={product.edited ? "edited" : ""}>
                  <Input
                    type="text"
                    value={product[column]}
                    onChange={(e) => handleFieldChange(product._id, column, e.target.value)}
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default ProductTable;
