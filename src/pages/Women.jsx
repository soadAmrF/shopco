import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <AiOutlineLoading3Quarters className="fs-1 text-black" />
        </motion.div>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="women-page py-5"
    >
      <div className="container mt-4 mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none text-muted opacity-75 hover-black"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active fw-bold text-black">
              Women's Clothing
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mb-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <motion.h2
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="section-black-title m-0"
          >
            WOMEN'S FASHION
          </motion.h2>
          <div className="text-muted fs-6">
            Showing 1-{products.length} of {products.length} Products
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              className="col-6 col-md-4 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/product/${p.id}`}
                className="text-decoration-none group-card h-100 d-block"
              >
                <div className="product-card h-100 d-flex flex-column border-0">
                  <div className="product-img-holder p-3 p-md-4 mb-3">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={p.image}
                      alt={p.title}
                      className="img-fluid object-fit-contain w-100 h-100 main-img"
                    />
                  </div>

                  <div className="product-info-wrap flex-grow-1 d-flex flex-column px-1">
                    <h6 className="fw-bold mb-1 text-black title-clamp text-capitalize">
                      {p.title.toLowerCase()}
                    </h6>

                    <div className="mt-auto pt-2">
                      <div className="d-flex align-items-center gap-1 mb-2">
                        <span className="text-warning fs-6">
                          {"★".repeat(Math.round(p.rating.rate))}
                        </span>
                        <span
                          className="text-muted small ms-1"
                          style={{ fontSize: "13px" }}
                        >
                          {p.rating.rate}/5
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold fs-5 text-black">
                          ${p.price}
                        </span>
                        <span className="text-muted text-decoration-line-through small opacity-50">
                          ${(p.price * 1.4).toFixed(2)}
                        </span>
                        <span className="badge-discount-small">-40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <hr className="my-5 opacity-10" />
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-5">
          <motion.button
            whileHover={{ x: -5 }}
            className="btn btn-pagination-square-arrow"
          >
            ← Previous
          </motion.button>
          <div className="d-flex gap-2">
            {[1, 2].map((num) => (
              <motion.button
                key={num}
                whileHover={{ y: -3 }}
                className={`btn-page-square ${num === 1 ? "active" : ""}`}
              >
                {num}
              </motion.button>
            ))}
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="btn btn-pagination-square-arrow"
          >
            Next →
          </motion.button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Integral+CF:wght@900&display=swap');
        
        .section-black-title { 
            font-family: 'Integral CF', sans-serif; 
            font-weight: 900; 
            letter-spacing: -1px; 
            font-size: clamp(1.5rem, 4vw, 2.5rem); 
            text-transform: uppercase;
        }

        .product-img-holder { 
            background-color: #F0F0F0; 
            border-radius: 20px; 
            aspect-ratio: 1/1.1; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            transition: 0.3s ease; 
            overflow: hidden; 
        }

        .group-card:hover .product-img-holder { 
            background-color: #e8e8e8; 
        }

        .title-clamp { 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            min-height: 2.6rem; 
            line-height: 1.3; 
            font-size: 0.95rem; 
            font-weight: 800; 
            color: #000; 
        }

        .badge-discount-small { 
            background: rgba(255, 51, 51, 0.1); 
            color: #FF3333; 
            border-radius: 50px; 
            padding: 2px 8px; 
            font-size: 10px; 
            font-weight: bold; 
        }

        .btn-pagination-square-arrow { 
            background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; 
            padding: 8px 16px; font-weight: 600; font-size: 14px; transition: 0.3s; 
        }
        .btn-pagination-square-arrow:hover { background: #000; color: #fff; }

        .btn-page-square { 
            width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; 
            border: 1px solid #e0e0e0; border-radius: 8px; background: #fff; 
            font-weight: 600; color: #666; transition: 0.3s; 
        }
        .btn-page-square.active { background: #000; color: #fff; border-color: #000; }
        
        .hover-black:hover { color: #000 !important; }

        @media (max-width: 576px) {
          .product-img-holder { border-radius: 15px; }
          .title-clamp { font-size: 0.85rem; min-height: 2.3rem; }
        }
      `}</style>
    </motion.div>
  );
}
