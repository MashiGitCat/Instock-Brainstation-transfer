import { useState, useEffect } from "react";
import axios from "axios";
import DeleteWarehouse from "../delete/deleteWarehouse";
import { Link } from "react-router-dom";
import Search from "../../assets/Icons/search-24px.svg";
import Forward from "../../assets/Icons/chevron_right-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
import "./warehouse.scss";

const Warehouse = () => {
  const apiUrl = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [modal, setModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState("");

  const handleOpenModal = (warehouse) => {
    setModal(true);
    setWarehouseToDelete(warehouse);
  };

  const handleCloseModal = () => {
    setModal(false);
    setWarehouseToDelete("");
  };

  const handleDelete = () => {
    if (warehouseToDelete) {
      const warehouseId = warehouseToDelete.id;
      console.log(warehouseId);

      axios
        .delete(`${apiUrl}/${warehouseId}`)
        .then((response) => {
          console.log("Warehouse deleted successfully!");
        })
        .catch((error) => {
          console.log("Error deleting warehouse: ", error);
        });

      setModal(false);
      setWarehouseToDelete("");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/warehouses")
      .then((response) => response.json())
      .then((data) => {
        setWarehouses(data);
      })
      .catch((error) => {
        console.error("Error fetching warehouse data:", error);
      });
  }, []);
  return (
    <section className="warehouse">
      {modal && (
        <DeleteWarehouse
          warehouseName={warehouseToDelete}
          onDelete={handleDelete}
          onCancel={handleCloseModal}
        />
      )}
      <div className="warehouse__list-card">
        <div className="warehouse__content-wrapper">
          <div className="warehouse__content">
            <h1 className="warehouse__header">Warehouses</h1>

            <div className="warehouse__search-container">
              <img
                src={Search}
                alt="serch-icon"
                className="warehouse__search-icon"
              />
              <input
                type="text"
                placeholder="Search..."
                className="warehouse__search-input"
              />
            </div>
            <button className="warehouse__add-button">
              {" "}
              <Link to={"/warehouses/add"}>+ Add New Warehouse</Link>
            </button>
          </div>
        </div>
        <div className="warehouse__list-header-set">
          <div className="warehouse__list-header">
            <div className="warehouse__list-itemset">
              <p className="warehouse__detail-heading-tab">warehouse</p>
              <img className="warehouse__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="warehouse__list-header-address">
              <p className="warehouse__detail-heading-tab">address</p>
              <img className="warehouse__sort-image" src={Sort} alt="forward" />
            </div>
          </div>
          <div className="warehouse__list-header-left">
            <div className="warehouse__list-header-name">
              <p className="warehouse__detail-heading-tab">contact name</p>
              <img className="warehouse__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="warehouse__list-header-contactinfo">
              <p className="warehouse__detail-heading-tab">
                contact Information
              </p>
              <img className="warehouse__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="warehouse__list-header-action">
              <p className="warehouse__detail-heading-tab">action</p>
            </div>
          </div>
        </div>
        <div className="warehouse__content-wrapper-list">
          {warehouses.map((warehouse) => (
            <div className="warehouse__content-list">
              <div className="warehouse__content-flex">
                <div className="warehouse__content-left">
                  <div className="warehouse__content-space">
                    <div className="warehouse__sort-icon">
                      <p className="warehouse__detail-heading">warehouse</p>
                    </div>
                    <div className="warehouse__forward-next">
                      <Link to={`warehouses/${warehouse.id}`}>
                        <p className=" warehouse__detail-name">
                          {warehouse.warehouse_name}
                        </p>
                        <img src={Forward} alt="forward" />
                      </Link>
                    </div>
                  </div>
                  <div className="warehouse__icon-wrap">
                    <p className="warehouse__detail-heading">address</p>
                    <p className=" warehouse__detail">
                      {warehouse.address}, {warehouse.city}
                    </p>
                  </div>
                </div>
                <div className="warehouse__content-right">
                  <div className="warehouse__content-space-name">
                    <p className="warehouse__detail-heading">contact name</p>

                    <p className=" warehouse__detail">
                      {warehouse.contact_name}
                    </p>
                  </div>
                  <div>
                    <p className="warehouse__detail-heading">
                      contact Information
                    </p>
                    <p className=" warehouse__detail">
                      {warehouse.contact_phone}
                    </p>
                    <p className=" warehouse__detail">{warehouse.email}</p>
                  </div>
                </div>
              </div>
              <div className="warehouse__item-icon">
                <img
                  onClick={() => handleOpenModal(warehouse)}
                  className="warehouse__icon-image"
                  src={Delete}
                  alt="delete"
                />
                <Link to={`/warehouses/${warehouse.id}/edit`}>
                  <img
                    className="warehouse__icon-image"
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

export default Warehouse;
