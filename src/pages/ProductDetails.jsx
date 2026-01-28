import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState("#4F4631");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        return fetch(
          `https://fakestoreapi.com/products/category/${data.category}`,
        );
      })
      .then((res) => res.json())
      .then((related) => {
        setRelatedProducts(
          related.filter((p) => p.id !== parseInt(id)).slice(0, 4),
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <AiOutlineLoading3Quarters className="fs-1 text-black" />
        </motion.div>
      </div>
    );

  const oldPrice = (product.price * 1.3).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container py-5 mt-4"
    >
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-muted opacity-75">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link
              to="/on-sale"
              className="text-decoration-none text-muted opacity-75"
            >
              Shop
            </Link>
          </li>
          <li className="breadcrumb-item active fw-bold text-black text-capitalize">
            {product.category}
          </li>
        </ol>
      </nav>

      <div className="row g-lg-5 mb-5 pb-5 border-bottom">
        <div className="col-lg-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="product-detail-img-holder rounded-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-f0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={product.image}
              className="img-fluid object-fit-contain h-100"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="col-lg-6 mt-4 mt-lg-0"
        >
          <h1 className="fw-900 detail-title text-uppercase mb-2">
            {product.title}
          </h1>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="fs-4 text-warning">
              {"★".repeat(Math.round(product.rating.rate))}
              <span className="text-muted opacity-25">
                {"★".repeat(5 - Math.round(product.rating.rate))}
              </span>
            </div>
            <span className="text-black fw-bold ms-2">
              {product.rating.rate}/5
            </span>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <h2 className="fw-bold fs-1 m-0 text-black">${product.price}</h2>
            <h2 className="fw-bold fs-1 m-0 text-muted text-decoration-line-through opacity-50">
              ${oldPrice}
            </h2>
            <span className="badge-discount px-3 py-1">-30%</span>
          </div>

          <p className="text-muted lh-lg mb-4 fs-6">{product.description}</p>
          <hr />

          <div className="mb-4 pt-2">
            <p className="fw-bold mb-3">Select Colors</p>
            <div className="d-flex gap-3">
              {["#4F4631", "#314F4A", "#31344F"].map((c) => (
                <div
                  key={c}
                  className={`color-circle ${selectedColor === c ? "active" : ""}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                >
                  {selectedColor === c && (
                    <span className="text-white small">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div className="mb-4 pt-2">
            <p className="fw-bold mb-3">Choose Size</p>
            <div className="d-flex gap-2 flex-wrap">
              {["Small", "Medium", "Large", "X-Large"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <hr />

          <div className="d-flex gap-3 pt-3 flex-wrap">
            <div className="quantity-box d-flex align-items-center rounded-pill px-4 py-2">
              <button
                className="btn p-0 fw-bold fs-4"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 fw-bold">{quantity}</span>
              <button
                className="btn p-0 fw-bold fs-4"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="btn btn-dark flex-grow-1 rounded-pill fw-bold py-3 fs-5 shadow">
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>

      <div className="related-section py-5 mt-5">
        <h2 className="section-black-title text-center mb-5">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="row g-3 g-md-4">
          {relatedProducts.map((rp) => (
            <div key={rp.id} className="col-6 col-md-4 col-lg-3">
              <Link
                to={`/product/${rp.id}`}
                className="text-decoration-none h-100 d-flex group-card"
              >
                <div className="small-product-card w-100 d-flex flex-column border-0">
                  <div className="small-img-holder p-3 mb-3">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      src={rp.image}
                      className="img-fluid object-fit-contain w-100 h-100"
                      alt={rp.title}
                    />
                  </div>

                  <div className="px-1 d-flex flex-column flex-grow-1">
                    <h6 className="fw-bold text-black title-clamp-related mb-2">
                      {rp.title}
                    </h6>
                    <div className="mt-auto">
                      <div className="text-warning mb-1 fs-6">
                        {"★".repeat(Math.round(rp.rating.rate))}
                      </div>
                      <p className="fw-bold text-black fs-5 m-0">${rp.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Integral+CF:wght@900&display=swap');
        
        .bg-f0 { background-color: #F0F0F0; }
        .detail-title, .section-black-title { font-family: 'Integral CF', sans-serif; font-weight: 900; letter-spacing: -1px; }
        .detail-title { font-size: clamp(1.8rem, 5vw, 2.8rem); line-height: 1.1; }
        .section-black-title { font-size: clamp(1.5rem, 4vw, 2.5rem); text-transform: uppercase; }

        .product-detail-img-holder { height: clamp(350px, 60vh, 600px); border-radius: 20px; }
        .badge-discount { background: rgba(255, 51, 51, 0.1); color: #FF3333; border-radius: 50px; font-weight: bold; }

        .color-circle { width: 37px; height: 37px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; border: 2px solid transparent; transition: 0.2s; }
        .color-circle.active { border-color: #000; }

        .size-btn { padding: 12px 28px; border-radius: 62px; border: none; background: #F0F0F0; color: rgba(0,0,0,0.6); transition: 0.3s; font-weight: 500; }
        .size-btn.active { background: #000; color: #fff; }

        .small-img-holder { 
          background-color: #F0F0F0;
          border-radius: 20px;
          aspect-ratio: 1 / 1.1;
          width: 100%;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          overflow: hidden;
          transition: 0.3s ease;
        }
        .group-card:hover .small-img-holder { background-color: #e8e8e8; }

        .title-clamp-related { 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden; 
          font-size: 1rem; 
          font-weight: 800;
          line-height: 1.3; 
          min-height: 2.6rem;
        }

        .small-product-card { height: 100%; transition: transform 0.3s ease; }
        .group-card:hover { transform: translateY(-8px); }

        .quantity-box { background: #F0F0F0; }

        @media (max-width: 768px) {
          .detail-title { font-size: 1.6rem; }
          .product-detail-img-holder { height: 350px; }
        }
      `}</style>
    </motion.div>
  );
}
