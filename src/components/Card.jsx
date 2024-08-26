import React from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';


function Card() {
   return (
      <div className=" col-md-6 col-sm-12 card">
         <div class="Product__UpdatedOfferContainer">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>
            <div class="Product__UpdatedOfferTitle">20%
         OFF
         </div>
         </div>
      <div class="Product__UpdatedImageContainer">
         <div class="Product__UpdatedImage">
            <div width="140" height="140" class="Imagestyles__ImageContainer">
               <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249" alt="Onion (Pyaz)" width="140" height="140" loading="lazy" />
               </div>
               </div>
               </div>
      
      <div className="Product_Detail_container">
         <div className="updated_timer">
            <div><FontAwesomeIcon icon={faStopwatch} style={{ fontSize: '18px', color: '#000', color: "grey", fontSize: "10px" }} />10 mins</div>
         </div>
         <div className="Product_Title">
            Onion (Pyaz)
         </div>
         <div className="Product_varient d-flex justify-content-between">
            <div className="Product_quantity">0.95 - 1.05kg</div>
            <div className="icon"><FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '12px', paddingBottom: "2px" }} /></div>
         </div>
         <div className="ProductUpdetedPrice_and_ADDBtn_container d-flex justify-content-between py-2">
            <div className="product_price">
               <div className="updeted_price">59rp</div>
               <div className="last_price">79rp</div>
            </div>
            <div className="Addbtn">
            <button type="button" class="btn">ADD</button>
            </div>
         </div>
      </div>
     </div>
   )

}

export default Card;