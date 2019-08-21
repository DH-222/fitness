import React from "react";
// import routes from "../routes";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Home() {
  return (
    <body className="home-big" id="home-big-return">
      <div className="middle-container-home">
        <img
          className="logo"
          src="https://fiverr-res.cloudinary.com/image/upload/t_collaboration_hd,q_auto,f_auto/v1/secured-attachments/message/delivery_attachments/2050301da5fc044b28a1f1e4859d792f-1565013592769/2.jpg?__cld_token__=exp=1566423274~hmac=bf0f621fe0d8e41550f8a4aab6dd1664fdb09bae83e2a17841de5de924295072"
          alt="logo"
        />
      </div>
      <div className="bottom-container-home">
        <h1>Simply Fitness</h1>
      </div>
      <div className="bottom-container-mini">
        <h2>FIND YOUR NEARBY FITNESS NEEDS</h2>
      </div>
      <div className="soft-scroll">
        <Link
          activeClass="active"
          to="map"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button class="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click Here To Start
          </button>
        </Link>
      </div>
    </body>
  );
}

export default Home;
