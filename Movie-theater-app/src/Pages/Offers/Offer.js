import React from "react";
import "./offer.css";

function Offer() {
  return (
    <div className="ofertat">
      <div className="oferta">
        <div>
          <img
            src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,w_1600/v1662484002/amc-cdn/general/hispanic-heritage-month/MG_1106_HispanicHertiageMonth_Promo_1200x856.jpg"
            alt="ofer"
          />
        </div>
        <div className="ofertateksti">
          <h2>Cheers to Hispanic Heritage Month</h2>
          <p>
            We re celebrating Hispanic Heritage Month with two NEW deliciosas
            drinks! Swing by MacGuffins Bar to try our Spicy Margarita with
            Teremana Tequila or our Michelada mixed with a refreshing Modelo
            Especial.
          </p>
          <button className="butoni1">Check Offer</button>
        </div>
      </div>
      <div className="oferta">
        <div className="ofertateksti">
          <h2>Hold on to the Taste of Summer</h2>
          <p>
            Keep summer going with a drink too cool for school! Upgrade your
            ICEE to a collectible color-changing cup for just $3+tax extra.
            Plus, try our new watermelon flavor. Available at select locations
            while supplies last.
          </p>
          <button className="butoni1">Order Now</button>
        </div>
        <div>
          <img
            src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,w_1600/v1661876120/amc-cdn/general/icee/FB_1515_ICEE%20Color-Changing%20Cup-Promo_Pod_1250x892.jpg"
            alt="ofer"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
