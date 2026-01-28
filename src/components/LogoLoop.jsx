export default function LogoLoop({ logos }) {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-loop-wrapper">
      <div className="logo-loop-content">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`brand-logo-${index}`} />
          </div>
        ))}
      </div>

      <style>{`
        .logo-loop-wrapper {
          overflow: hidden;
          background-color: #000;
          padding: clamp(30px, 5vw, 45px) 0; 
          display: flex;
          align-items: center;
          width: 100%;
        }

        .logo-loop-content {
          display: flex;
          align-items: center;
          animation: infinite-scroll 25s linear infinite;
          width: max-content;
        }

        .logo-item {
          flex: 0 0 auto;
          padding: 0 clamp(20px, 5vw, 60px);
        }

        .logo-item img {
          height: clamp(25px, 4vw, 38px); 
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .logo-item img:hover {
          opacity: 1;
        }

        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @media (max-width: 576px) {
          .logo-loop-content {
            animation-duration: 15s;
          }
          .logo-item {
            padding: 0 25px;
          }
        }
      `}</style>
    </div>
  );
}