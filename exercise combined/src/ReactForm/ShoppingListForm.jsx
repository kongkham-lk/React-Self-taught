import { useState } from "react";
import { useForm } from "react-hook-form";
function ShoppingListForm({ addItem }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleChange = (e) => {
    setFormData((newItem) => {
      return {
        ...newItem,
        [e.target.name]: e.target.value
      };
    });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };

  const registerOptions = {
    product: {
      require: true,
      message: "Product name cannot be empty"
    },
    quantity: {
      require: true,
      min: {
        value: 1,
        message: "Purchase item must more than 0"
      },
      max: {
        value: 10,
        message: "Cannot purchase more than 10 itmes"
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        name="product"
        id="product"
        placeholder="Product Name"
        value={formData.product}
        onChange={handleChange}
        {...register("product", registerOptions.product)}
      />
      <span className="text-danger">
        {errors.product && errors.product.message}
      </span>
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder={formData.quantity}
        value={formData.quantity}
        onChange={handleChange}
        {...register("quantity", registerOptions.quantity)}
      />
      <span className="text-danger">
        {errors.quantity && errors.quantity.message}
      </span>
      <button>Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
