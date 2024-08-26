import React from "react"; import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faThreads } from "@fortawesome/free-brands-svg-icons";

function Footer() { return(
    <footer className="footer">
        <h5>India's last minute app - blinkit</h5>
        <div className="container-fluid footerSection ">
            <div className="row ">
    
                < div className="col-12 col-md-3">
                    <div className="row">
                        <h4 className="footer-heading text-left">Useful Links</h4>
                        <div className="col-12 col-md-4">
                            <ul className="footer-list">
                                <li>
                                    <a href="/aboutus" target="_blank" rel="noopener noreferrer">
            About
            </a>
                                </li>
                                <li>
                                    <a href="/careers" target="_blank" rel="noopener noreferrer nofollow">
            Careers
            </a>
                                </li>
                                <li>
                                    <a href="/blog" target="_blank" rel="noopener noreferrer">
            Blog
            </a>
                                </li>
                                <li>
                                    <a href="/press" target="_blank" rel="noopener noreferrer">
            Press
            </a>
                                </li>
                                <li>
                                    <a href="/leadership" target="_blank" rel="noopener noreferrer">
            Lead
            </a>
                                </li>
                                <li>
                                    <a href="/values" target="_blank" rel="noopener noreferrer">
            Value
            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4">
                            <ul className="footer-list">
                                <li>
                                    <a href="/privacy" target="_blank" rel="noopener noreferrer nofollow">
            Privacy
            </a>
                                </li>
                                <li>
                                    <a href="/terms" target="_blank" rel="noopener noreferrer nofollow">
            Terms
            </a>
                                </li>
                                <li>
                                    <a href="/faq" target="_blank" rel="noopener noreferrer nofollow">
            FAQs
            </a>
                                </li>
                                <li>
                                    <a href="/security" target="_blank" rel="noopener noreferrer nofollow">
            Security
            </a>
                                </li>
                                <li>
                                    <a href="/download" target="_blank" rel="noopener noreferrer nofollow">
            Mobile
            </a>
                                </li>
                                <li>
                                    <a href="/contactUs" target="_blank" rel="noopener noreferrer nofollow">
            Contact
            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4">
                            <ul className="footer-list">
                                <li>
                                    <a href="/partner" target="_blank" rel="noopener noreferrer nofollow">
            Partner
            </a>
                                </li>
                                <li>
                                    <a href="/franchise" target="_blank" rel="noopener noreferrer nofollow">
            Franchise
            </a>
                                </li>
                                <li>
                                    <a href="/seller" target="_blank" rel="noopener noreferrer nofollow">
            Seller
            </a>
                                </li>
                                <li>
                                    <a href="/warehouse-partner" target="_blank" rel="noopener noreferrer nofollow">
            Warehouse
            </a>
                                </li>
                                <li>
                                    <a href="/delivery" target="_blank" rel="noopener noreferrer nofollow">
            Deliver
            </a>
                                </li>
                                <li>
                                    <a href="/resources" target="_blank" rel="noopener noreferrer nofollow">
            Resources
            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="col-12 col-md-9">
                <div className="row">
                    <div className="col-auto">
                        <h4 className="footer-heading">Categories</h4></div>
                    <div className="col-auto "> <a className="footer-see-all" href="/categories" target="_blank" rel="noopener noreferrer">see all
            </a></div>
    
                </div>
                <div className="row">
    
                    {/* Categories list */}
                    <div className="col-12 col-md-4">
                        {/* list 1 */}
                        <ul className="footer-list">
                            <li>
                                <a href="#">
            Vegetables & Fruits
            </a>
                            </li>
                            <li>
                                <a href="/cn/beverages-gift-packs/cid/332/1323">
            Cold Drinks & Juices
            </a>
                            </li>
                            <li>
                                <a href="/cn/biscuit-gift-pack/cid/888/2380">
            Bakery & Biscuits
            </a>
                            </li>
                            <li>
                                <a href="/cn/oil/cid/1557/917">
            Dry Fruits, Masala & Oil
            </a>
                            </li>
                            <li>
                                <a href="/cn/oil-ghee/cid/175/799">
            Organic & Premium
            </a>
                            </li>
                            <li>
                                <a href="/cn/sexual-wellness/cid/287/741">
            Pharma & Wellness
            </a>
                            </li>
                            <li>
                                <a href="/cn/sticks/cid/1969/263">
            Ice Creams & Frozen Desserts
            </a>
                            </li>
                            <li>
                                <a href="/cn/bath-body-essentials/cid/13/206">
            Beauty & Cosmetics
            </a>
                            </li>
                            <li>
                                <a href="/cn/action-toys-toy-vehicles/cid/675/151">
            Toys & Games
            </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
    
                        {/* list 2 */}
                        <ul className="footer-list">
                            <li>
                                <a href="/cn/milk/cid/14/922">Dairy & Breakfast</a>
                            </li>
                            <li>
                                <a href="/cn/noodles/cid/15/962">
            Instant & Frozen Food
            </a>
                            </li>
                            <li>
                                <a href="/cn/indian-sweets/cid/9/943">Sweet Tooth</a>
                            </li>
                            <li>
                                <a href="/cn/tomato-chilli-ketchup/cid/972/277">
            Sauces & Spreads
            </a>
                            </li>
                            <li>
                                <a href="/cn/cigarettes/cid/229/1948">Paan Corner</a>
                            </li>
                            <li>
                                <a href="/cn/fresheners/cid/18/1085">
            Cleaning Essentials
            </a>
                            </li>
                            <li>
                                <a href="/cn/body-moisturizers-more/cid/163/690">
            Personal Care
            </a>
                            </li>
                            <li>
                                <a href="/cn/current-affairs-business/cid/851/1015">
            Magazines
            </a>
                            </li>
                            <li>
                                <a href="/print">Print Store</a>
                            </li>
                        </ul>
    
                    </div>
                    <div className="col-12 col-md-4">
                        {/* list 3 */}
                        <ul className="footer-list">
                            <li>
                                <a href="/cn/chips-crisps/cid/1237/940">Munchies</a>
                            </li>
                            <li>
                                <a href="/cn/tea/cid/12/957">
            Tea, Coffee & Health Drinks
            </a>
                            </li>
                            <li>
                                <a href="/cn/atta/cid/16/1165">Atta, Rice & Dal</a>
                            </li>
                            <li>
                                <a href="/cn/fresh-meat/cid/4/1201">
            Chicken, Meat & Fish
            </a>
                            </li>
                            <li>
                                <a href="/cn/diapers-more/cid/7/1000">Baby Care</a>
                            </li>
                            <li>
                                <a href="/cn/appliances/cid/1379/1886">Home & Office</a>
                            </li>
                            <li>
                                <a href="/cn/accessories-other-supplies/cid/5/3609">
            Pet Care
            </a>
                            </li>
                            <li>
                                <a href="/cn/childrens-books/cid/1559/273">Books</a>
                            </li>
    
                            <li>
                                <a href="/cln/rakhi-specials/clid/66afb3a388e3c00022809497/834" target="_blank" rel="noopener noreferrer">
            Rakhi Store
            </a>
                            </li>
                        </ul>
    
                    </div>
                </div>
    
            </div>
    
        </div>
        
        <div className="row socialmediaContainer">
            <div className="col-md-4 d-flex align-items-center justify-content-end">
                <p className="copyrightP">
                    © Blink Commerce Private Limited, 2016-2024
                </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end p-0">
                <div className="row align-items-center ">
                    <div className="col-12  col-lg-4">
                        <p className="DownLoadP"> Download App</p>
                    </div>
                    <div className="col-6  col-lg-4"> <img className="app-store-image" src="https://blinkit.com/d61019073b700ca49d22.png" alt="appstore" /></div>
                    <div className="col-6  col-lg-4"> <img className="app-store-image" src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="playstore" /></div>
    
                </div>
    
            </div>
            <div className="col-md-4 pr-0 social-media-icons">
            
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="iconFooter" size="2x" />
      </a>
      
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="iconFooter" size="2x" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="iconFooter" size="2x" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="iconFooter" size="2x" />
      </a>
      <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faThreads} className="iconFooter" size="2x" />
      </a>
    </div>
          
        </div>
        <div className="row mt-4">
            
                <p className="footer-disclaimer">
                    "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited".
                </p>
            
        </div>
        </div>
    </footer>
    ) } export default Footer;