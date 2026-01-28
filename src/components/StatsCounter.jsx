import React, { useEffect, useState, useMemo } from 'react';

export default function StatsCounter({ stats }) {
  const sortedStats = useMemo(() => [...stats].sort((a, b) => a.number - b.number), [stats]);

  const [counts, setCounts] = useState(sortedStats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, idx) => {
          const target = sortedStats[idx].number;
          const increment = Math.ceil(target / 50);
          if (count < target) {
            const next = count + increment;
            return next > target ? target : next;
          }
          return count;
        })
      );
    }, 30);
    return () => clearInterval(interval);
  }, [sortedStats]);

  return (
    <div className="stats-container">
      {sortedStats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="stat-item">
            <h2 className="stat-number">
              {counts[index].toLocaleString()}+
            </h2>
            <p className="stat-label">
              {stat.label}
            </p>
          </div>
          
          {index < sortedStats.length - 1 && (
            <div className="stat-divider d-none d-md-block"></div>
          )}
        </React.Fragment>
      ))}

      <style>{`
        .stats-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: clamp(20px, 4vw, 50px);
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .stat-item {
          text-align: left;
          min-width: 120px;
        }

        .stat-number {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #000;
          margin: 0;
          font-family: 'Satoshi', sans-serif;
        }

        .stat-label {
          font-size: clamp(0.85rem, 2vw, 1rem);
          color: rgba(0, 0, 0, 0.6);
          margin: 0;
          white-space: nowrap;
        }

        .stat-divider {
          width: 1px;
          height: 45px;
          background-color: rgba(0, 0, 0, 0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .stats-container {
            justify-content: center;
            gap: 30px 15px;
          }
          
          .stat-item {
            text-align: center;
            flex: 1 1 40%;
          }
            
          .stat-item:last-child {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
}