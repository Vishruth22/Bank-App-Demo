import React from "react";
const AdSection = () => {
    return (
      <aside className="bg-light text-center py-4  ">
        <div style={{width:'200px'}} className="image-gallery ">
          <img src='ads/ibaco.jpg' alt="Ad 1" className="img-fluid mb-3 " />
          <img src="ads/vtech.jpeg" alt="Ad 2" className="img-fluid mb-3 " />
          <img src="ads/swiggy.jpg" alt="Ad 3" className="img-fluid mb-3 " />
          <img src="ads/lic.jpg" alt="Ad 4" className="img-fluid " />
        </div>
      </aside>
    );
  };
  export default AdSection;