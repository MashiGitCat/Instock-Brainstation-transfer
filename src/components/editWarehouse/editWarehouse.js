import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backlogo from "../../assets/Icons/arrow_back-24px.svg";
import Header from '../header/header';
import './editWarehouse.scss';
import { useParams } from 'react-router-dom';

const EditWarehouse = () => {
    const { id } = useParams();
  const [warehouseName, setWarehouseName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [contactName, setContactName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
        const warehouseData = response.data;
        setWarehouseName(warehouseData.warehouse_name);
        setStreetAddress(warehouseData.address);
        setCity(warehouseData.city);
        setCountry(warehouseData.country);
        setContactName(warehouseData.contact_name);
        setPosition(warehouseData.contact_position);
        setPhoneNumber(warehouseData.contact_phone);
        setEmail(warehouseData.contact_email);
        console.log('Fetched warehouse data:', warehouseData);
      } catch (error) {
        console.error('Error fetching warehouse data:', error);
      }
    };

    fetchWarehouseData();
  }, [id]);

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

    const formData = {
      warehouse_name: warehouseName,
      address: streetAddress,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    };

    try {
      await axios.put(`http://localhost:8080/warehouses/${id}`, formData);
      setIsFormSubmitted(true);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(false);
    }
  };

  const handleAlertOK = () => {
    setIsFormSubmitted(false);
    setIsSuccess(false);
  };

  const handleCancel = () => {
    setIsFormSubmitted(false);
    setIsSuccess(false);
  };

  if (isFormSubmitted) {
    if (isSuccess) {
      return (
        <section>
          <Header />
          <div className='success-message'>
            Form successfully submitted.
            <button onClick={handleAlertOK}>OK</button>
          </div>
        </section>
      );
    } else {
      return (
        <section>
          <Header />
          <div className='error-message'>Form submission failed.</div>
        </section>
      );
    }
  }

  return (
    <div className='edit-warehouse'>
      <article className='edit-warehouse__container'>
        <div className='edit-warehouse__title'>
          <img className='edit-warehouse__title--button' alt='' src={backlogo} />
          <h2 className='edit-warehouse__subtitle'>Edit Warehouse</h2>
        </div>
        <div className='edit-warehouse__display'>
          <div className='edit-warehouse__display--details'>
            <form className='edit-warehouse__details' onSubmit={handleSubmit}>
              <section className='edit-warehouse__form'>
                <section className='edit-warehouse__section--top'>
                  <h2 className='edit-warehouse__subtitle'>Warehouse Details</h2>
                  <div className='edit-warehouse__input'>
                    <p className='edit-warehouse__input--title'>Warehouse Name</p>
                    <input
                      className='edit-warehouse__input--text'
                      value={warehouseName}
                      onChange={handleWarehouseNameChange}
                      placeholder='Warehouse Name'
                    />
                  </div>
                  <div className='edit-warehouse__input'>
                    <p className='edit-warehouse__input--title'>Street Address</p>
                    <input
                      className='edit-warehouse__input--text'
                      value={streetAddress}
                      onChange={handleStreetAddressChange}
                      placeholder='Street Address'
                    />
                  </div>
                  <div className='edit-warehouse__input'>
                    <p className='edit-warehouse__input--title'>City</p>
                    <input
                      className='edit-warehouse__input--text'
                      value={city}
                      onChange={handleCityChange}
                      placeholder='City'
                    />
                  </div>
                  <div className='edit-warehouse__input'>
                    <p className='edit-warehouse__input--title'>Country</p>
                    <input
                      className='edit-warehouse__input--text'
                      value={country}
                      onChange={handleCountryChange}
                      placeholder='Country'
                    />
                  </div>
                </section>
                <section className='edit-warehouse__section--bottom'>
                  <h2 className='edit-warehouse__subtitle'>Contact Details</h2>
                  <section>
                    <div className='edit-warehouse__input'>
                      <p className='edit-warehouse__input--title'>Contact Name</p>
                      <input
                        className='edit-warehouse__input--text'
                        value={contactName}
                        onChange={handleContactNameChange}
                        placeholder='Contact Name'
                      />
                    </div>
                    <div className='edit-warehouse__input'>
                      <p className='edit-warehouse__input--title'>Position</p>
                      <input
                        className='edit-warehouse__input--text'
                        value={position}
                        onChange={handlePositionChange}
                        placeholder='Position'
                      />
                    </div>
                    <div className='edit-warehouse__input'>
                      <p className='edit-warehouse__input--title'>Phone Number</p>
                      <input
                        className='edit-warehouse__input--text'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder='Phone Number'
                      />
                    </div>
                    <div className='edit-warehouse__input'>
                      <p className='edit-warehouse__input--title'>Email</p>
                      <input
                        className='edit-warehouse__input--text'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Email'
                      />
                    </div>
                  </section>
                </section>
              </section>

              <div className='edit-warehouse__button-container'>
                <button className='edit-warehouse__button--cancel' type='button' onClick={handleCancel}>
                  Cancel
                </button>
                <button className='edit-warehouse__button--add' type='submit'>
                  + Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EditWarehouse;