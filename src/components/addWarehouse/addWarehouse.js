import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./addWarehouse.scss";
import backlogo from "../../assets/Icons/arrow_back-24px.svg";

const AddWarehouse = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleWarehouseNameChange = (e) => {
    setWarehouseName(e.target.value);
  };

  const handleStreetAddressChange = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleContactNameChange = (e) => {
    setContactName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const id = uuidv4();

    try {
      const response = await axios.post("http://localhost:8080/warehouses", {
        warehouse_name: warehouseName,
        address: streetAddress,
        city: city,
        country: country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phoneNumber,
        contact_email: email,
      });

      setIsFormSubmitted(true);
      setWarehouseName("");
      setStreetAddress("");
      setCity("");
      setCountry("");
      setContactName("");
      setPosition("");
      setPhoneNumber("");
      setEmail("");

      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    // Redirect to "/"
    window.location.href = "/";
  };

  if (isFormSubmitted) {
    window.alert("Successfully submitted");
    window.location.href = "/";
  }

  return (
    <div className="new-warehouse">
      <article className="new-warehouse__container">
        <div className="new-warehouse__title">
          <img className="new-warehouse__title--button" src={backlogo} />
          <h1 className="new-warehouse__title--text"> Add New Warehouse</h1>
        </div>
        <div className="new-warehouse__display">
          <form className="new-warehouse__details" onSubmit={handleSubmit}>
            <div className="new-warehouse__details--forms">
              <div className="new-warehouse__display--details">
                <h2 className="new-warehouse__subtitle">Warehouse Details</h2>

                <section className="new-warehouse__section--top">
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">
                      Warehouse Name
                    </p>
                    <input
                      className="new-warehouse__input--text"
                      value={warehouseName}
                      onChange={handleWarehouseNameChange}
                      placeholder="Warehouse Name"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">
                      Street Address
                    </p>
                    <input
                      className="new-warehouse__input--text"
                      value={streetAddress}
                      onChange={handleStreetAddressChange}
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">City</p>
                    <input
                      className="new-warehouse__input--text"
                      value={city}
                      onChange={handleCityChange}
                      placeholder="City"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">Country</p>
                    <input
                      className="new-warehouse__input--text"
                      value={country}
                      onChange={handleCountryChange}
                      placeholder="Country"
                    />
                  </div>
                </section>
              </div>
              <div className="new-warehouse__display--contact">
                <h2 className="new-warehouse__subtitle">Contact Details</h2>

                <section className="new-warehouse__section--bottom">
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">Contact Name</p>
                    <input
                      className="new-warehouse__input--text"
                      value={contactName}
                      onChange={handleContactNameChange}
                      placeholder="Contact Name"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">Position</p>
                    <input
                      className="new-warehouse__input--text"
                      value={position}
                      onChange={handlePositionChange}
                      placeholder="Position"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">Phone Number</p>
                    <input
                      className="new-warehouse__input--text"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="new-warehouse__input">
                    <p className="new-warehouse__input--title">Email</p>
                    <input
                      className="new-warehouse__input--text"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                    />
                  </div>
                </section>
              </div>
            </div>
            <div></div>
            <div className="new-warehouse__button-container">
              <button
                className="new-warehouse__button--cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancel{" "}
              </button>
              <button className="new-warehouse__button--add" type="submit">
                + Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};

export default AddWarehouse;
