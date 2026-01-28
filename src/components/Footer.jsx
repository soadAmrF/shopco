import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import visaImg from "../assets/img/Badge.png";
import mastercardImg from "../assets/img/Badge1.png";
import paypalImg from "../assets/img/Badge (2).png";
import applePayImg from "../assets/img/Badge (3).png";
import googlePayImg from "../assets/img/Badge (4).png";

export default function Footer() {
  const paymentLogos = [
    visaImg,
    mastercardImg,
    paypalImg,
    applePayImg,
    googlePayImg,
  ];

  return (
    <footer style={{ backgroundColor: "#F0F0F0", marginTop: "150px", position: "relative" }}>
      
      <div className="container" style={{ transform: "translateY(-50%)", marginBottom: "-50px" }}>
        <div className="bg-black text-white p-4 p-md-5 rounded-5 d-flex flex-column flex-md-row justify-content-between align-items-center shadow-lg">
          <h1 className="fw-bold mb-4 mb-md-0 text-start" style={{ fontFamily: "Integral CF", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", maxWidth: "550px", lineHeight: "1.1" }}>
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: "350px" }}>
            <div className="position-relative">
              <HiOutlineMail className="position-absolute top-50 translate-middle-y ms-3 text-muted" style={{ fontSize: "1.5rem" }} />
              <input 
                type="email" 
                className="form-control rounded-pill py-3 ps-5 border-0 shadow-none" 
                placeholder="Enter your email address" 
              />
            </div>
            <button className="btn btn-light rounded-pill py-3 fw-bold text-black border-0">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="container pb-5 pt-4">
        <div className="row g-4 justify-content-between text-start">
          
          <div className="col-lg-3 col-md-6">
            <h2 className="fw-bold mb-3" style={{ fontFamily: "Integral CF" }}>SHOP.CO</h2>
            <p className="text-muted mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="d-flex gap-3">
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaFacebookF />} isFacebook={true} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaGithub />} />
            </div>
          </div>

          <FooterLinks title="COMPANY" links={["About", "Features", "Works", "Career"]} />
          <FooterLinks title="HELP" links={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />
          <FooterLinks title="FAQ" links={["Account", "Manage Deliveries", "Orders", "Payments"]} />
          <FooterLinks title="RESOURCES" links={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
        </div>

        <hr className="my-5" style={{ opacity: "0.1" }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          <p className="text-muted m-0" style={{ fontSize: "0.85rem" }}>
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          
          <div className="d-flex gap-2 align-items-center">
            {paymentLogos.map((imgSrc, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2 shadow-sm d-flex align-items-center justify-content-center" 
                style={{ 
                  width: "65px",
                  height: "40px", 
                  padding: "4px",
                  overflow: "hidden" 
                }}
              >
                <img 
                  src={imgSrc} 
                  alt="payment method" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain" 
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <h6 className="fw-bold mb-4" style={{ letterSpacing: "2px", fontSize: "1rem" }}>{title}</h6>
      <ul className="list-unstyled">
        {links.map((link, i) => (
          <li key={i} className="mb-3">
            <a href="#" className="text-decoration-none text-muted hover-dark" style={{ fontSize: "0.95rem" }}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon, isFacebook }) {
  return (
    <a href="#" 
       className="rounded-circle d-flex align-items-center justify-content-center shadow-sm text-decoration-none border" 
       style={{ 
         width: "38px", 
         height: "38px", 
         fontSize: "1rem", 
         transition: "0.3s",
         backgroundColor: isFacebook ? "#000" : "#fff",
         color: isFacebook ? "#fff" : "#000",
         borderColor: isFacebook ? "#000" : "#0000001A"
       }}>
      {icon}
    </a>
  );
}