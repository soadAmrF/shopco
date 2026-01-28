import { useRef } from "react";
import StatsCounter from "../components/StatsCounter";
import LogoLoop from "../components/LogoLoop";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { BsPatchCheckFill } from "react-icons/bs";

// Logos
import gucciLogo from "../assets/img/gucci-logo-1 1.png";
import vectorLogo from "../assets/img/Vector (2).png";
import zaraLogo from "../assets/img/zara-logo-1 1.png";
import ccLogo from "../assets/img/cc.png";
import ssLogo from "../assets/img/ss.png";

// Hero images
import img1 from "../assets/img/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg";
import img2 from "../assets/img/Vector.png";
import img3 from "../assets/img/Vector (1).png";

// Style cards images
import girl from "../assets/img/girl.png";
import man from "../assets/img/man1.png";
import man2 from "../assets/img/man2.png";
import man3 from "../assets/img/man3.png";

// Products
import product1 from "../assets/img/black.png";
import product2 from "../assets/img/pantaloon.png";
import product3 from "../assets/img/blose.png";
import product4 from "../assets/img/teshert.png";
import product5 from "../assets/img/e01f5d3cd9029bd465a4c7158689ab1619693014.png";
import product6 from "../assets/img/t-shirt.png";
import product7 from "../assets/img/short.png";
import product8 from "../assets/img/pantalon.png";

export default function Home() {
  const scrollRef = useRef(null);

  const stats = [
    { number: 200, label: "International Brands" },
    { number: 2000, label: "High-Quality Products" },
    { number: 30000, label: "Happy Customers" },
  ];

  const logos = [gucciLogo, vectorLogo, zaraLogo, ccLogo, ssLogo];

  const products = [
    {
      image: product1,
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120",
      rating: 4.5,
    },
    {
      image: product2,
      title: "SKINNY FIT JEANS",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      rating: 3.5,
    },
    { image: product3, title: "CHECKERED SHIRT", price: "$180", rating: 4.5 },
    {
      image: product4,
      title: "SLEEVE STRIPED T-SHIRT",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      rating: 4.5,
    },
  ];

  const products2 = [
    {
      image: product5,
      title: "VERTICAL STRIPED SHIRT",
      price: "$212",
      oldPrice: "$232",
      discount: "-20%",
      rating: 5.0,
    },
    {
      image: product6,
      title: "COURAGE GRAPHIC T-SHIRT",
      price: "$145",
      rating: 4.0,
    },
    {
      image: product7,
      title: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      rating: 3.0,
    },
    {
      image: product8,
      title: "FADED SKINNY JEANS",
      price: "$210",
      rating: 4.5,
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
    },
    {
      name: "Mila G.",
      text: "The customer support and the fit of the clothes are just perfect. Highly recommended!",
    },
    {
      name: "Ethan R.",
      text: "Fast shipping and great packaging. The quality of the denim is top-notch.",
    },
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const renderStars = (rating) => (
    <div
      className="d-flex align-items-center mb-1 text-warning"
      style={{ fontSize: "1rem" }}
    >
      {"★".repeat(Math.floor(rating))}
      <span className="text-muted small ms-2">{rating}/5</span>
    </div>
  );

  return (
    <div className="main-container">
      
      {/* Hero Section */}
      <section
        className="hero-section position-relative overflow-hidden"
        style={{ backgroundColor: "#F2F0F1" }}
      >
        <div className="hero-image-container d-none d-lg-block">
          <img src={img1} alt="Fashion Model" className="hero-main-img" />
        </div>
        <div className="container position-relative hero-content-z">
          <img
            src={img2}
            alt=""
            className="hero-vector star-large d-none d-lg-block"
          />
          <img
            src={img3}
            alt=""
            className="hero-vector star-small d-none d-lg-block"
          />
          <div className="row">
            <div className="col-lg-7 py-5">
              <h1 className="main-black-title">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="text-muted fs-5 mb-4 hero-desc">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality.
              </p>
              <button className="btn-black-wide mb-5">Shop Now</button>
              <div className="mt-md-4">
                <StatsCounter stats={stats} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Loop */}
      <div className="bg-black py-4">
        <LogoLoop logos={logos} />
      </div>

      {/* New Arrivals */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-black-title mb-5">NEW ARRIVALS</h2>
          <div className="row g-3 g-md-4 text-start">
            {products.map((p, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="product-img-box mb-3">
                  <img
                    src={p.image}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt={p.title}
                  />
                </div>
                <h6 className="fw-bold text-truncate">{p.title}</h6>
                {renderStars(p.rating)}
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold fs-5">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-muted text-decoration-line-through small">
                      {p.oldPrice}
                    </span>
                  )}
                  {p.discount && (
                    <span className="badge-discount">{p.discount}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="btn-outline-wide mt-5 shadow-sm">View All</button>
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-5">
        <div className="container text-center border-top pt-5">
          <h2 className="section-black-title mb-5">TOP SELLING</h2>
          <div className="row g-3 g-md-4 text-start">
            {products2.map((p, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="product-img-box mb-3">
                  <img
                    src={p.image}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt={p.title}
                  />
                </div>
                <h6 className="fw-bold text-truncate">{p.title}</h6>
                {renderStars(p.rating)}
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold fs-5">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-outline-wide mt-5 shadow-sm">View All</button>
        </div>
      </section>

      {/* Browse By Dress Style */}
      <section className="py-5 px-2">
        <div className="container">
          <div className="bg-light-gray p-4 p-md-5 rounded-5 shadow-sm">
            <h2 className="section-black-title text-center mb-5">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div
                  className="style-card card-casual"
                  style={{ "--bg": `url(${man})` }}
                >
                  <span>Casual</span>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div
                  className="style-card card-formal"
                  style={{ "--bg": `url(${man2})` }}
                >
                  <span>Formal</span>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div
                  className="style-card card-party"
                  style={{ "--bg": `url(${girl})` }}
                >
                  <span>Party</span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div
                  className="style-card card-gym"
                  style={{ "--bg": `url(${man3})` }}
                >
                  <span>Gym</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-5 mb-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 px-2">
            <h2 className="section-black-title m-0">OUR HAPPY CUSTOMERS</h2>
            <div className="d-flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="btn btn-circle-arrow"
              >
                <HiArrowLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="btn btn-circle-arrow"
              >
                <HiArrowRight />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="d-flex gap-4 overflow-hidden px-2 pb-3 scroll-hide"
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="review-card flex-shrink-0 p-4 rounded-4 border shadow-sm"
              >
                <div className="text-warning mb-2">★★★★★</div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <h6 className="fw-bold m-0">{r.name}</h6>
                  <BsPatchCheckFill className="text-success" />
                </div>
                <p className="text-muted small m-0">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Integral+CF:wght@900&display=swap');

        .main-container { overflow-x: hidden; background: #fff; }
        .scroll-hide { scrollbar-width: none; }
        .scroll-hide::-webkit-scrollbar { display: none; }

        .hero-section { min-height: 90vh; display: flex; align-items: center; }
        .hero-image-container { position: absolute; top: 0; right: 0; width: 45%; height: 100%; z-index: 1; }
        .hero-main-img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
        .hero-vector { position: absolute; z-index: 2; pointer-events: none; }
        .star-large { top: 10%; right: 5%; width: 100px; animation: pulse 2s infinite; }
        .star-small { top: 40%; left: 55%; width: 56px; animation: pulse 2s infinite 1s; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } }
        .hero-content-z { z-index: 10; }
        .main-black-title { font-family: 'Integral CF', sans-serif; font-weight: 900; color: #000; font-size: clamp(2rem, 7vw, 4rem); line-height: 1.1; }
        .hero-desc { max-width: 540px; }

        .section-black-title { font-family: 'Integral CF', sans-serif; font-weight: 900; font-size: clamp(1.5rem, 5vw, 2.8rem); text-transform: uppercase; }
        .btn-black-wide { background: #000; color: #fff; border-radius: 50px; padding: 16px clamp(30px, 5vw, 60px); font-weight: 600; border: none; transition: 0.3s; width: fit-content; }
        .btn-black-wide:hover { background: #333; }
        .btn-outline-wide { background: transparent; color: #000; border: 1px solid rgba(0,0,0,0.1); border-radius: 50px; padding: 12px 60px; font-weight: 600; transition: 0.3s; }
        .btn-outline-wide:hover { background: #000; color: #fff; }

        .product-img-box { background: #F0EEED; border-radius: 20px; height: clamp(180px, 25vw, 280px); overflow: hidden; }
        .badge-discount { background: rgba(255, 51, 51, 0.1); color: #FF3333; padding: 2px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700; }

        .bg-light-gray { background-color: #F0F0F0; }

        /* Style Card System - Responsive Values */
        .style-card {
          height: clamp(190px, 40vw, 400px); 
          border-radius: 20px;
          padding: clamp(15px, 3vw, 25px) clamp(20px, 4vw, 36px);
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background-color: #fff;
        }

        .style-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--bg);
          background-repeat: no-repeat;
          z-index: 0;
          transition: transform 0.4s ease;
        }

        .style-card span { 
            position: relative; 
            z-index: 1; 
            font-size: clamp(1.2rem, 4vw, 2rem); 
            font-weight: 800; 
            color: #000; 
        }

        /* Hover States */
        .style-card:hover::before { transform: scale(1.05); }
        .card-casual:hover::before { transform: scaleX(-1) scale(1.05); }

        /* Desktop Positioning */
        .card-casual::before { background-size: 200%; background-position: 10% 65%; transform: scaleX(-1); }
        .card-formal::before { background-size: 180%; background-position: 0% 28%; }
        .card-party::before { background-size: 130%; background-position: center 50%; }
        .card-gym::before { background-size: 130%; background-position: center 45%; }

        /* Reviews Responsive */
        .review-card { width: clamp(280px, 80vw, 400px); background: #fff; transition: 0.3s; }
        .btn-circle-arrow { font-size: 1.5rem; color: #000; transition: 0.3s; }

        /* Tablet & Mobile Adjustments */
        @media (max-width: 991px) {
          .hero-image-container { position: relative; width: 100%; height: 400px; margin-top: 20px; }
          .main-black-title { text-align: center; }
          .hero-desc { text-align: center; margin-inline: auto; }
          .btn-black-wide { display: block; margin-inline: auto; width: 100%; }
          
        @media (max-width: 991px) {
          .card-casual::before { background-size: 280%; background-position: 20% 30%; }
          .card-formal::before { background-size: 200%; background-position: 20% 35%; }
          .card-party::before { background-size: 160%; }
          .card-gym::before { background-size: 150%; background-position: 20% 25%; }
        }

        @media (max-width: 576px) {
           .style-card { height: 180px; }
           .product-img-box { height: 200px; }
           .section-black-title { text-align: center; }
        }

      `}</style>
    </div>
  );
}
