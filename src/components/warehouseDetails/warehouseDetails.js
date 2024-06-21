import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import backlogo from "../../assets/Icons/arrow_back-24px.svg";
import editicon from "../../assets/Icons/edit-24px-white.svg";
import "./warehouseDetails.scss";

const WarehouseDetails = ({ id }) => {
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${id}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouse data:", error);
      });
  }, [id]);
  useEffect(() => {
    console.log("ID in details:", id);
  }, [id]);
  if (!warehouse) {
    return <div>Loading...</div>;
  }
  const isEditPage = window.location.pathname.includes(`/warehouses/${id}/edit`);


  return (
    <section className="warehouse-details">
      <div className="warehouse-details__container">
        <div className="warehouse-details__content-wrapper">
          <div className="warehouse-details__content">
            <div className="warehouse-details__align">
              <div className="warehouse-details__header">
                <img alt="back-arrow" src={backlogo}></img>
                <h1 className="warehouse-details__title">
                  {warehouse.warehouse_name}
                </h1>
              </div>
              <div className="warehouse-details__edit"> 
			  <Link to={`/warehouses/${id}/edit`}>
                <img
                  className="warehouse-details__edit--logo"
                  alt="edit-icon"
                  src={editicon}
                ></img>
			</Link>
              </div>
              <div className="warehouse-details__tablet">
			  <Link to={`/warehouses/${id}/edit`}>
                <img
                  className="warehouse-details__edit--logo"
                  alt="edit-icon"
                  src={editicon}
                ></img>{" "}
                Edit
				</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="warehouse-details__content-wrapper">
          <div className="warehouse-details__content">
            <div className="warehouse-details__contacts-container">
              <div className="warehouse-details__contact-wrapper">
                <div className="warehouse-details__address">
                  <h4 className="warehouse-details__headings">
                    warehouse address
                  </h4>
                  <p className="warehouse-details__text">
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                  </p>
                </div>
                <div className="warehouse-details__contact-info">
                  <div className="warehouse-details__contacts">
                    <h4 className="warehouse-details__headings">
                      contact name:
                    </h4>
                    <div className="warehouse-details__person-info">
                      <p className="warehouse-details__text">
                        {warehouse.contact_name}
                      </p>
                      <p className="warehouse-details__text">
                        {warehouse.contact_position}
                      </p>
                    </div>
                  </div>

                  <div className="warehouse-details__contacts--info">
                    <h4 className="warehouse-details__headings">
                      contact information:
                    </h4>
                    <div className="warehouse-details__person-info">
                      <p className="warehouse-details__text">
                        {warehouse.contact_phone}
                      </p>
                      <p className="warehouse-details__text">
                        {warehouse.contact_email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WarehouseDetails;
