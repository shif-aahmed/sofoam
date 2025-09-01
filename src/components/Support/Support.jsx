import React from "react";
import "./Support.css";

// Import your orange icons
import expressIcon from "../../assets/support1.svg";
import supportIcon from "../../assets/support2.svg";
import codIcon from "../../assets/support3.svg";

const Support = () => {
  return (
    <section className="support-section">
      <div className="support-item">
        <img src={expressIcon} alt="Fast Nationwide Delivery" className="support-icon" />
        <h3 className="support-title">Fast Nationwide Delivery</h3>
        <p className="support-text">
          Enjoy doorstep delivery within 7 days — anywhere in Pakistan.
        </p>
      </div>

      <div className="support-item">
        <img src={supportIcon} alt="Dedicated Customer Care" className="support-icon" />
        <h3 className="support-title">Dedicated Customer Care</h3>
        <p className="support-text">
          Our team is here 24/7 to assist you! <br />
          Call us at (03316227699).
        </p>
      </div>

      <div className="support-item">
        <img src={codIcon} alt="Secure Cash On Delivery" className="support-icon" />
        <h3 className="support-title">Secure Cash On Delivery</h3>
        <p className="support-text">
          Shop with confidence — pay only when your SOFOAM order arrives.
        </p>
      </div>
    </section>
  );
};

export default Support;
