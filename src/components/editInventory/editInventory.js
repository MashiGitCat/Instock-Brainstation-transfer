import React, { useState, useEffect } from "react";
import axios from "axios";
import "./editInventory.scss";
import backlogo from "../../assets/Icons/arrow_back-24px.svg";

const AddInventory = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouseOptions, setWarehouseOptions] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        console.log(response.data[0].category);
        setCategoryOptions(response.data);
        setWarehouseOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category options:", error);
      });
  }, []);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleWarehouseChange = (e) => {
    const selectedWarehouseName = e.target.value;
    const warehouse = warehouseOptions.find(
      (option) => option.warehouse_name === selectedWarehouseName
    );
    setSelectedWarehouse(warehouse ? warehouse.warehouse_id : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inventoryData = {
      item_name: itemName,
      description: description,
      category: selectedCategory,
      status: status,
      quantity: quantity,
      warehouse_id: selectedWarehouse,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/inventories",
        inventoryData
      );
      console.log("Form submitted successfully");
      setIsSubmitSuccessful(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleCancel = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      window.location.href = "/";
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="new-inventory">
      <article className="new-inventory__container">
        <div className="new-inventory__title">
          <img
            className="new-inventory__title--button"
            src={backlogo}
            alt="Back"
          />
          <h1 className="new-inventory__title--text">Add New Inventory Item</h1>
        </div>
        <div className="new-inventory__display">
          <form className="new-inventory__details" onSubmit={handleSubmit}>
            <div className="new-inventory__details--forms">
              <div className="new-inventory__display--details">
                <h2 className="new-inventory__subtitle">Item Details</h2>

                <section className="new-inventory__section--top">
                  <div className="new-inventory__input">
                    <p className="new-inventory__input--title">Item Name</p>
                    <input
                      className="new-inventory__input--text"
                      value={itemName}
                      onChange={handleItemNameChange}
                      placeholder="Item Name"
                    />
                  </div>
                  <div className="new-inventory__input">
                    <p className="new-inventory__input--title">Description</p>
                    <input
                      className="new-inventory__input--text new-inventory__input--description"
                      value={description}
                      onChange={handleDescriptionChange}
                      placeholder="Please enter a brief item description..."
                    />
                  </div>
                  <div className="new-inventory__input">
                    <p className="new-inventory__input--title">Category</p>
                    <select
                      className="new-inventory__input--text"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Please Select</option>
                      {[
                        ...new Set(
                          categoryOptions.map((option) => option.category)
                        ),
                      ].map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>
              </div>
              <div className="new-inventory__display--contact">
                <h2 className="new-inventory__subtitle">Item Availability</h2>

                <section className="new-inventory__section--bottom">
                  <div className="new-inventory__input">
                    <p className="new-inventory__input--title">Status</p>
                    <div className="new-inventory__input--stock">
                      <div>
                        <input
                          type="radio"
                          id="inStock"
                          value="In Stock"
                          checked={status === "In Stock"}
                          onChange={handleStatusChange}
                        />
                        <label htmlFor="inStock">In Stock</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="outOfStock"
                          value="Out of Stock"
                          checked={status === "Out of Stock"}
                          onChange={handleStatusChange}
                          className="new-inventory__input--stock-out"
                        />
                        <label htmlFor="outOfStock">Out of Stock</label>
                      </div>
                    </div>
                  </div>
                  {status !== "Out of Stock" && (
                    <div className="new-inventory__input new-inventory__input--quantity">
                      <p className="new-inventory__input--title">Quantity</p>
                      <input
                        className="new-inventory__input--text"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="0"
                        disabled={status === "Out of Stock"}
                      />
                    </div>
                  )}

                  <div className="new-inventory__input">
                    <p className="new-inventory__input--title">Warehouse</p>
                    <select
                      className="new-inventory__input--text"
                      value={selectedWarehouse}
                      onChange={handleWarehouseChange}
                    >
                      <option value="">Please Select</option>
                      {[
                        ...new Set(
                          warehouseOptions.map(
                            (option) => option.warehouse_name
                          )
                        ),
                      ].map((warehouse, index) => (
                        <option key={index} value={warehouse}>
                          {warehouse}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>
              </div>
            </div>
            <div></div>
            <div className="new-inventory__button-container">
              <button
                className="new-inventory__button--cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="new-inventory__button--add" type="submit">
                + Add Inventory
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};

export default AddInventory;
