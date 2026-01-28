import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

export default function Nav() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top nav-main py-3">
        <div className="container px-3 px-md-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggler border-0 p-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMainContent"
            >
              <span
                className="navbar-toggler-icon"
                style={{ width: "24px", height: "24px" }}
              />
            </button>

            <Link className="navbar-brand logo-text m-0 p-0" to="/">
              SHOP.CO
            </Link>
          </div>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarMainContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1 border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                >
                  Shop <GoChevronDown />
                </button>
                <ul className="dropdown-menu border-0 shadow-sm rounded-3">
                  <li>
                    <Link className="dropdown-item" to="/men">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/women">
                      Women
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/on-sale">
                  On Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-arrivals">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-end">
            <div
              className="search-wrapper d-none d-lg-flex flex-grow-1 mx-3"
              style={{ maxWidth: "500px" }}
            >
              <div className="search-box w-100">
                <FaSearch className="search-icon" />
                <input
                  className="form-control search-input shadow-none"
                  type="search"
                  placeholder="Search for products..."
                />
              </div>
            </div>

            <div className="nav-icons d-flex align-items-center gap-2 gap-md-3">
              <FaSearch className="d-lg-none fs-5 cursor-pointer text-black" />
              <Link to="/cart" className="text-black">
                <FaShoppingCart className="fs-5" />
              </Link>
              <Link to="/profile" className="text-black">
                <FaRegUserCircle className="fs-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Integral+CF:wght@700&display=swap');

        .nav-main {
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 1050;
          background-color: #fff !important;
        }

        .logo-text {
          font-family: 'Integral CF', sans-serif;
          font-weight: 900;
          font-size: clamp(1.2rem, 5vw, 2rem);
          color: #000 !important;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .navbar-nav .nav-link {
          font-size: 1rem;
          color: #000 !important;
          padding: 0.5rem 1rem;
          font-weight: 400;
          text-decoration: none;
        }

        .search-box {
          background-color: #F0F0F0;
          border-radius: 62px;
          padding: 6px 16px;
          display: flex;
          align-items: center;
        }

        .search-input {
          background-color: transparent !important;
          border: none !important;
          font-size: 0.9rem;
          color: #000;
        }

        .search-icon { color: rgba(0,0,0,0.4); }

        @media (max-width: 991px) {
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1.5rem;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
            z-index: 1000;
          }
        }

        .cursor-pointer { cursor: pointer; }
      `}</style>
    </>
  );
}
