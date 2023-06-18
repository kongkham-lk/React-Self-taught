import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Banana", quantity: 5 },
    { id: uuid(), product: "Egg", quantity: 12 }
  ]);
  function addItem(newItem) {
    setItems((oldItems) => {
      return [...oldItems, { ...newItem, id: uuid() }];
    });
  }
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
