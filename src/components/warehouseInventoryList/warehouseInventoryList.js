
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Forward from "../../assets/Icons/chevron_right-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
import "./warehouseInventory.css";

const WarehouseInventoryList = ({ id }) => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/warehouses/${id}/inventories`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched inventories:", data); 
        setInventories(data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  }, [id]);

  const getInventoryStatusClass = (inventory) => {
    if (inventory.status === "In Stock") {
      return "inventory__in-stock";
    } else {
      return "inventory__out-stock";
    }
  };

  return (
    <section className="inventory">
      <div className="inventory__list-card">
        <div className="inventory__list-header-set">
          <div className="inventory__list-header">
            <div className="inventory__list-itemset">
              <p className="inventory__detail-heading-tab">inventory item</p>
              <img className="inventory__sort-image" src={Sort} alt="sort" />
            </div>
            <div className="inventory__list-header-address">
              <p className="inventory__detail-heading-tab">category</p>
              <img className="inventory__sort-image" src={Sort} alt="sort" />
            </div>
          </div>
          <div className="inventory__list-header-left">
            <div className="inventory__list-header-name">
              <p className="inventory__detail-heading-tab">status</p>
              <img className="inventory__sort-image" src={Sort} alt="sort" />
            </div>
            <div className="inventory__list-header-contactinfo">
              <p className="inventory__detail-heading-tab"> Qty </p>
              <img className="inventory__sort-image" src={Sort} alt="sort" />
            </div>
            <div className="inventory__list-header-action">
              <p className="inventory__detail-heading-tab">actions</p>
            </div>
          </div>
        </div>
        <div className="inventory__content-wrapper-list">
          {inventories.map((inventory) => (
            <div className="inventory__content-list" key={inventory.id}>
              <div className="inventory__content-flex">
                <div className="inventory__content-left">
                  <div className="inventory__content-space">
                    <div className="inventory__sort-icon">
                      <p className="inventory__detail-heading">inventory item</p>
                    </div>
                    <div className="inventory__forward-next">
                      <Link className="inventory__link-align" to={`inventories/${inventory.id}`}>
                        <p className="inventory__detail-name">
                          {inventory.item_name}
                          
                        </p>
                        <img src={Forward} alt="forward" />
                      </Link>
                    </div>
                  </div>
                  <div className="inventory__icon-wrap">
                    <p className="inventory__detail-heading">category</p>
                    <p className="inventory__detail">
                      {inventory.category} {}
                    </p>
                  </div>
                </div>
                <div className="inventory__content-right">
                  <div className="inventory__content-space-name">
                    <p className="inventory__detail-heading">status</p>
                    <p className={`inventory ${getInventoryStatusClass(inventory)}`}>
                      {inventory.status}
                    </p>
                  </div>
                  <div>
                    <p className="inventory__detail-heading">
                    qty
                    </p>
                    <p className="inventory__detail">
                      {inventory.quantity}
                    </p>
                    <p className="inventory__detail">{}</p>
                  </div>
                </div>
              </div>
              <div className="inventory__item-icon">
                <img
                  className="inventory__icon-image"
                  src={Delete}
                  alt="delete"
                />
                <Link to={`/inventories//edit`}>
                  <img
                    className="inventory__icon-image"
                    src={Edit}
                    alt="edit"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WarehouseInventoryList ;