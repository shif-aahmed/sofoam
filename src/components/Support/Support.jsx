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
        <img src={expressIcon} alt="Express Delivery" className="support-icon" />
        <h3 className="support-title">Express Delivery</h3>
        <p className="support-text">
          We deliver to your door within 7 days all over Pakistan.
        </p>
      </div>

      <div className="support-item">
        <img src={supportIcon} alt="24/7 Support" className="support-icon" />
        <h3 className="support-title">24/7 Support</h3>
        <p className="support-text">
          We are here for you 24/7! Contact us <br />
          (03316227699) anytime.
        </p>
      </div>

      <div className="support-item">
        <img src={codIcon} alt="Cash On Delivery" className="support-icon" />
        <h3 className="support-title">Cash On Delivery</h3>
        <p className="support-text">
          The easiest way to make your
          purchase is to use the cash on delivery option.
        </p>
      </div>
    </section>
  );
};

export default Support;
