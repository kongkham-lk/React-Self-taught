import { useState } from "react";
function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (e) => {
    setFormData((newItem) => {
      return { 
        ...newItem, 
        [e.target.name]: e.target.value 
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        name="product"
        id="product"
        placeholder="Product Name"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder={formData.quantity}
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
