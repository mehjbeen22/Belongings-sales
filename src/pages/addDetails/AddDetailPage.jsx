import React, { useState } from "react";
import styles from "./AddDetailPage.module.css";

export const AddDetailPage = () => {
  const [formData, setFormData] = useState({
    address: "",
    geolocation: "",
    configuration: "",
    amenities: "",
    availability: "",
    photos: "",
    rent: "",
    maintenance: "",
    deposit: "",
  });

  // Handle Functions __________
  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.mainCantainer}>
        <form className={styles.formHolder} onSubmit={formSubmitHandler}>
          <h1 className="detail-heading">ADD DETAILS</h1>

          <label> Address </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Geo Location</label>

          <input
            type="text"
            name="geolocation"
            value={formData.geolocation}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Configuration </label>

          <input
            type="text"
            name="configuration"
            value={formData.configuration}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label>Amenities </label>
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Availability</label>

          <input
            type="text"
            name="availability"
            value={formData.availability}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Upload Photo </label>
          <input
            type="file"
            name="photos"
            value={formData.photos}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <div className={styles.PriceCase}>
            {/* Rent Block */}
            <div className={styles.priceBlock}>
              <label>Rent</label>
              <input
                type="number"
                name="rent"
                value={formData.rent}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>

            {/* Maintenance */}
            <div className={styles.priceBlock}>
              <label>Maintenance</label>
              <input
                type="number"
                name="maintenance"
                value={formData.maintenance}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>

            {/* Desposit */}
            <div className={styles.priceBlock}>
              <label>Desposit</label>
              <input
                type="number"
                name="deposit"
                value={formData.deposit}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>
          </div>

          <button className={styles.Submit}>Submit</button>
          <div style={{ margin: "10px" }}></div>
        </form>
      </div>
    </>
  );
};
