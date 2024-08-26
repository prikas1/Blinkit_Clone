import React from "react";
import './middle.css';
import listItems from "./listItems";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


function Middle() {
  
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (listItems.length > 0) {
      setActiveItem(listItems[0].id);
    }
  }, [listItems]);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };
  
    
   return (
    <div className="row middle_body">
    <div className="row m-0 p-0">
       
       <aside className="col-3 m-0 p-0 left_section">
       {listItems.map(item => (
         <div
           key={item.id}
           className={`intems_list d-flex ${activeItem === item.id ? 'active' : ''}`}
           onClick={() => handleItemClick(item.id)}
         >
           <div className="img_div">
             <img src={item.img} alt={item.name} />
           </div>
           <p>{item.name}</p>
         </div>
       ))}
     </aside>
     
   
   <div className="col-9 m-0 p-0">
   <div className="Right_section">
    <div className="headingFilterContainer">
   <div className="Heading_filter_section d-flex justify-content-between align-items-center">
     <h5>Buy Fresh Vegetables Online</h5>
     <div className="filter_section d-flex align-items-center">
         <p className="m-0 p-0">Sort By</p>
         <div className="filter d-flex align-items-center justify-content-between ml-2 ">
             Relevance <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '12px', paddingBottom: "2px" }} />
         </div>
     </div>
 </div>
 </div>
 
     <div className="filter_items_container d-flex">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
     </div>
   </div>
   </div>
   
 </div>
<div className="SEO_Section_container">
<h2 class="SeoContainerSeoTitle">Fresh Vegetables</h2>
  <div className="SEOContainerDiscription">
  
  Fresh vegetables are an essential part of a healthy diet. Packed with vitamins, minerals, and fiber, they provide numerous health benefits and contribute to overall well-being. In this article, we will explore the world of fresh vegetables, discussing their importance, nutritional value, selection, and storage.<br /><br />
  
  Importance of Fresh Vegetables:<br />
  Including fresh vegetables in your diet offers a myriad of advantages for your health:<br />
  Nutrient-rich: Fresh vegetables are abundant in essential nutrients, such as vitamins (A, C, K, and B-complex), minerals (iron, potassium, and calcium), and dietary fiber.<br />
  Disease prevention: The consumption of fresh vegetables has been linked to a reduced risk of chronic diseases, including heart disease, certain types of cancer, and obesity.<br />
  Weight management: Vegetables are generally low in calories and high in fiber, making them ideal for weight management and maintaining a healthy body weight.<br />
  Digestive health: The fiber content in fresh vegetables promotes healthy digestion, aids in regular bowel movements, and contributes to gut health.<br /><br />
  
  Nutritional Value of Fresh Vegetables:<br />
  Different types of fresh vegetables offer varying nutritional profiles. Here are some examples of commonly consumed vegetables and their key nutrients:<br />
  Leafy Greens (Spinach, Kale, and Lettuce): Rich in vitamins A, C, K, and folate, as well as minerals like iron and calcium.<br />
  Cruciferous Vegetables (Broccoli, Cauliflower, and Brussels Sprouts): Packed with vitamin C, fiber, and phytochemicals that may have anti-cancer properties.<br />
  Root Vegetables (Carrots, Potatoes, and Sweet Potatoes): Excellent sources of vitamin A, potassium, and dietary fiber.<br />
  Allium Vegetables (Onions, Garlic, and Leeks): Contain sulfur compounds that may offer immune-boosting and anti-inflammatory benefits.<br />
  Colorful Vegetables (Bell Peppers, Tomatoes, and Eggplants): Vibrant-colored vegetables are rich in vitamins, antioxidants, and phytochemicals that support overall health.<br /><br />
  
  Selecting and Storing Fresh Vegetables:<br />
  To make the most of your fresh vegetables, consider the following tips for selection and storage:<br />
  Choose fresh and vibrant vegetables: Look for vegetables with bright colors, firm texture, and minimal blemishes or bruises. This indicates freshness and optimal nutrient content.<br />
  Organic and local options: Opt for organic vegetables when possible, as they are grown without synthetic pesticides and fertilizers. Local produce tends to be fresher, as it spends less time in transit.<br />
  Proper storage: Different vegetables have varying storage requirements. Generally, it's advisable to store vegetables in the refrigerator's crisper drawer, except for tomatoes, onions, and potatoes, which are best stored at room temperature.<br />
  Handling with care: Handle vegetables gently to avoid bruising or damage. Rinse them before consumption, but avoid washing them before storing, as excess moisture can accelerate spoilage.<br /><br />
  
  Conclusion:<br />
  Fresh vegetables are a cornerstone of a healthy diet, providing an array of essential nutrients and health benefits. Including a variety of fresh vegetables in your meals can support overall well-being, enhance your immune system, and reduce the risk of chronic diseases. Remember to select fresh vegetables carefully, store them appropriately, and enjoy the vibrant flavors and textures they bring to your plate.
</div>

<div className="SEOQnAContainer">
<div class="SeoContainerQuestion">Why are fresh vegetables important for our health?</div>
    <div class="SeoContainerAnswer">Fresh vegetables are vital for our health due to their rich nutrient content. They provide essential vitamins, minerals, fiber, and antioxidants that support overall well-being, boost immunity, and reduce the risk of chronic diseases.</div>
    <div class="SeoContainerQuestion">How do fresh vegetables contribute to weight management?</div>
    <div class="SeoContainerAnswer">Fresh vegetables are low in calories and high in fiber, which promotes satiety and helps control appetite. Including a variety of fresh vegetables in your diet can assist with weight management by providing nutrient-dense options that are filling
        and satisfying.</div>
    <div class="SeoContainerQuestion">Are all fresh vegetables equally nutritious?</div>
    <div class="SeoContainerAnswer">Different fresh vegetables offer varying nutritional profiles. Leafy greens like spinach and kale are rich in vitamins A, C, and K, while cruciferous vegetables such as broccoli and cauliflower are packed with vitamin C and fiber. It is recommended
        to consume a diverse range of fresh vegetables to benefit from a wide array of nutrients.</div>
    <div class="SeoContainerQuestion">Can fresh vegetables help prevent chronic diseases?</div>
    <div class="SeoContainerAnswer">Yes, fresh vegetables are associated with a reduced risk of chronic diseases. Their high fiber content and antioxidant properties help combat inflammation, oxidative stress, and cellular damage, which can contribute to the development of conditions
        like heart disease, certain cancers, and diabetes.</div>
    <div class="SeoContainerQuestion">Should I choose organic vegetables over conventionally grown ones?</div>
    <div class="SeoContainerAnswer">Opting for organic vegetables is a personal choice. Organic vegetables are grown without synthetic pesticides and fertilizers, which may be appealing to individuals seeking to minimize exposure to these substances. However, both organic and conventionally
        grown vegetables offer important nutritional benefits.</div>
    <div class="SeoContainerQuestion">How can I select the freshest vegetables?</div>
    <div class="SeoContainerAnswer">When selecting fresh vegetables, look for vibrant colors, firm textures, and minimal blemishes or bruises. Fresh vegetables should appear crisp and have a pleasant aroma. It's also helpful to buy from local farmers' markets or grow your own vegetables
        for the freshest options.</div>
    <div class="SeoContainerQuestion">How should I store fresh vegetables to maintain their freshness?</div>
    <div class="SeoContainerAnswer">Most fresh vegetables are best stored in the refrigerator's crisper drawer, where the humidity and temperature are optimized for preserving their freshness. However, certain vegetables like tomatoes, onions, and potatoes should be stored at room temperature
        to maintain their flavor and texture.</div>
    <div class="SeoContainerQuestion">Can I freeze fresh vegetables for later use?</div>
    <div class="SeoContainerAnswer">Yes, many fresh vegetables can be successfully frozen for later use. Blanching them briefly in boiling water and then placing them in airtight containers or freezer bags helps retain their quality. However, note that the texture of some vegetables
        may change after freezing, so they are often better suited for cooked dishes rather than raw consumption.</div>
    <div class="SeoContainerQuestion">How can I incorporate more fresh vegetables into my meals?</div>
    <div class="SeoContainerAnswer">There are numerous ways to incorporate fresh vegetables into your meals. You can add them to salads, stir-fries, soups, stews, omelets, and smoothies. Experimenting with different cooking methods, such as roasting, steaming, or grilling, can also
        enhance the flavors and textures of fresh vegetables.</div>
    <div class="SeoContainerQuestion">Are canned or frozen vegetables as nutritious as fresh vegetables?</div>
    <div class="SeoContainerAnswer">While fresh vegetables are generally preferred, canned or frozen vegetables can still provide important nutrients. The canning and freezing processes may cause slight nutrient losses, but these vegetables are usually harvested at their peak ripeness
        and quickly preserved, retaining much of their nutritional value. When selecting canned vegetables, choose options with no added salt or sugars, and with minimal processing.</div>
</div>
  <div className="row SEO_section_content_Footer">
 <div className="col-md-6 content_container">
 <h2 class="SeoContainer__SeoTitle">
  Buy Fresh Fruits at
   <a href="/">Online grocery store</a> 
    in india
   </h2>
   <p >
   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
   </p>
   <p >
   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
   </p>
   <p >
   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
   </p>
 </div>
 <div className="col-md-6 table_section">
 <h2 class="SeoContainer__SeoTitle">
 Fresh Vegetables Price List
   </h2>

   <table class="SeoContainerTable ">
  <thead>
    <tr class="SeoContainer__Tr eXTtJo">
      <th align="left">Fresh Vegetables</th>
      <th align="left">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>1. <a class="SeoContainer__BrandLink" href="/prn/onion-pyaz/prid/530158">Onion (Pyaz)</a></td>
      <td>Rs. 58</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>2. <a class="SeoContainer__BrandLink" href="/prn/orange-carrot-gajar/prid/3913">Orange Carrot (Gajar)</a></td>
      <td>Rs. 21</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>3. <a class="SeoContainer__BrandLink" href="/prn/green-chilli-hari-mirch/prid/423735">Green Chilli (Hari Mirch)</a></td>
      <td>Rs. 14</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>4. <a class="SeoContainer__BrandLink" href="/prn/lemon/prid/229627">Lemon</a></td>
      <td>Rs. 73</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>5. <a class="SeoContainer__BrandLink" href="/prn/lady-finger/prid/421708">Lady Finger</a></td>
      <td>Rs. 15</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>6. <a class="SeoContainer__BrandLink" href="/prn/ginger-adrak/prid/95032">Ginger (Adrak)</a></td>
      <td>Rs. 33</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>7. <a class="SeoContainer__BrandLink" href="/prn/hybrid-tomato-tamatar/prid/367909">Hybrid Tomato (Tamatar)</a></td>
      <td>Rs. 31</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>8. <a class="SeoContainer__BrandLink" href="/prn/potato-pack-of-2-aloo/prid/560149">Potato - Pack of 2 (Aloo)</a></td>
      <td>Rs. 91</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>9. <a class="SeoContainer__BrandLink" href="/prn/green-cucumber-kheera/prid/351666">Green Cucumber (Kheera)</a></td>
      <td>Rs. 39</td>
    </tr>
    <tr class="SeoContainer__Tr eXTtJo">
      <td>10. <a class="SeoContainer__BrandLink" href="/prn/bottle-gourd-lauki/prid/217614">Bottle Gourd (Lauki)</a></td>
      <td>Rs. 23</td>
    </tr>
  </tbody>
</table>
<em style={{ fontSize: '14px', color: "grey" }}>
  This data was last updated on 8/26/2024
</em>



 </div>

</div>
</div>
</div>
   )
}

export default Middle;