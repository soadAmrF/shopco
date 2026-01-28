import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Layouts() {
  const [showPin, setShowPin] = useState(true);

  return (
    <>
      {showPin && (
        <div className="top-banner">
          <div className="container d-flex justify-content-center align-items-center position-relative">
            <p className="banner-text mb-0 py-2">
              Sign up and get 20% off to your first order. 
              <Link to="/signup" className="signup-link"> Sign Up Now</Link>
            </p>
            <button className="close-btn" onClick={() => setShowPin(false)} aria-label="Close banner">
              ✕
            </button>
          </div>
        </div>
      )}

      <Nav />
      
      <style>{`
        .top-banner {
          background: #000;
          color: #fff;
          width: 100%;
          position: relative;
          z-index: 2000;
        }
        .banner-text {
          font-size: clamp(11px, 3vw, 14px);
          text-align: center;
          width: 100%;
        }
        .signup-link {
          color: #fff;
          font-weight: 600;
          text-decoration: underline;
          margin-left: 5px;
        }
        .close-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 14px;
          opacity: 0.8;
        }
        .close-btn:hover { opacity: 1; }
      `}</style>
    </>
  );
}