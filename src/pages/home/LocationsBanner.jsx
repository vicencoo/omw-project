import { useNavigate } from 'react-router-dom';
import { Reveal } from '../../components/reveal/Reveal';

const PINS = [
  { left: '22%', top: '38%', delay: '0.3s' },
  { left: '35%', top: '28%', delay: '0.9s' },
  { left: '50%', top: '42%', delay: '0s' },
  { left: '63%', top: '33%', delay: '1.4s' },
  { left: '74%', top: '45%', delay: '0.6s' },
  { left: '84%', top: '30%', delay: '1.8s' },
  { left: '41%', top: '55%', delay: '2.1s' },
];

export const LocationsBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,400&family=Outfit:wght@300;400;500&display=swap');

        .loc-section {
          position: relative;
          height: 520px;
          overflow: hidden;
          cursor: pointer;
        }

        .loc-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 6s ease;
        }
        .loc-section:hover .loc-bg {
          transform: scale(1.03);
        }

        .loc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(5,20,8,0.35) 0%,
            rgba(5,20,8,0.5) 50%,
            rgba(5,20,8,0.78) 100%
          );
        }

        .loc-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 64px;
          gap: 28px;
          text-align: center;
        }

        .loc-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .loc-eyebrow-line {
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.4);
        }
        .loc-eyebrow-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        .loc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 58px);
          font-weight: 300;
          line-height: 1.15;
          color: white;
        }
        .loc-heading em {
          font-style: italic;
          color: #5fe08a;
        }

        .loc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #0d3318;
          border: none;
          border-radius: 2px;
          padding: 15px 36px;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, gap 0.2s;
        }
        .loc-btn:hover {
          background: #f0fdf4;
          gap: 16px;
        }
        .loc-btn-arrow {
          font-size: 15px;
          transition: transform 0.2s;
          display: inline-block;
        }
        .loc-btn:hover .loc-btn-arrow {
          transform: translateX(4px);
        }

        .loc-badge {
          position: absolute;
          top: 32px;
          right: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }
        .loc-badge-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: white;
          line-height: 1;
        }
        .loc-badge-lbl {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .loc-pins {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .loc-pin {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #2dba5f;
          border: 2px solid white;
          transform: translate(-50%, -50%);
          animation: locBlink 3s ease-in-out infinite;
        }
        .loc-pin::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1.5px solid rgba(45,186,95,0.5);
          animation: locRing 3s ease-out infinite;
        }

        @keyframes locRing {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes locBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
      `}</style>

      <section
        className='loc-section rounded-3xl'
        onClick={() => navigate('/locations')}
      >
        <svg
          className='loc-bg'
          viewBox='0 0 1200 520'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <linearGradient id='locSky' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#1a2e1c' />
              <stop offset='55%' stopColor='#0f2415' />
              <stop offset='100%' stopColor='#081208' />
            </linearGradient>
            <radialGradient id='locSun' cx='60%' cy='35%' r='40%'>
              <stop offset='0%' stopColor='#2dba5f' stopOpacity='.22' />
              <stop offset='100%' stopColor='#2dba5f' stopOpacity='0' />
            </radialGradient>
            <radialGradient id='locSun2' cx='30%' cy='50%' r='35%'>
              <stop offset='0%' stopColor='#1e8c45' stopOpacity='.15' />
              <stop offset='100%' stopColor='#1e8c45' stopOpacity='0' />
            </radialGradient>
          </defs>

          <rect width='1200' height='520' fill='url(#locSky)' />
          <rect width='1200' height='520' fill='url(#locSun)' />
          <rect width='1200' height='520' fill='url(#locSun2)' />

          {/* Stars */}
          <g fill='white'>
            {[
              [60, 40, 0.5],
              [200, 25, 0.4],
              [380, 55, 0.5],
              [560, 18, 0.35],
              [720, 44, 0.45],
              [900, 20, 0.4],
              [1050, 48, 0.5],
              [1150, 30, 0.35],
              [140, 90, 0.3],
              [430, 110, 0.25],
              [800, 85, 0.3],
            ].map(([cx, cy, op], i) => (
              <circle key={i} cx={cx} cy={cy} r='1' opacity={op} />
            ))}
          </g>

          {/* Mountains */}
          <path
            d='M0 380L120 240L200 290L320 200L440 260L560 190L680 240L800 170L920 230L1040 180L1120 220L1200 200L1200 520L0 520Z'
            fill='#0a1a0c'
            opacity='.9'
          />
          <path
            d='M0 420L150 310L280 360L400 300L520 340L640 280L760 320L880 270L1000 310L1100 280L1200 300L1200 520L0 520Z'
            fill='#061008'
            opacity='.95'
          />

          {/* Road */}
          <path
            d='M480 520L560 300L640 300L720 520Z'
            fill='#0d1a0f'
            opacity='.7'
          />
          <line
            x1='600'
            y1='520'
            x2='600'
            y2='300'
            stroke='#2dba5f'
            strokeWidth='1.5'
            strokeDasharray='18 14'
            opacity='.18'
          />

          {/* Gas station silhouette */}
          <g opacity='.75' transform='translate(520,220)'>
            <rect x='0' y='0' width='160' height='8' rx='1' fill='#0d3318' />
            <rect
              x='-10'
              y='8'
              width='180'
              height='3'
              rx='1'
              fill='#155724'
              opacity='.6'
            />
            <rect x='15' y='11' width='6' height='48' fill='#0d3318' />
            <rect x='139' y='11' width='6' height='48' fill='#0d3318' />
            <rect x='52' y='52' width='72' height='52' rx='1' fill='#081008' />
            <rect
              x='60'
              y='62'
              width='18'
              height='14'
              rx='1'
              fill='#2dba5f'
              opacity='.35'
            />
            <rect
              x='82'
              y='62'
              width='18'
              height='14'
              rx='1'
              fill='#2dba5f'
              opacity='.28'
            />
            <rect
              x='104'
              y='62'
              width='14'
              height='14'
              rx='1'
              fill='#2dba5f'
              opacity='.3'
            />
            <rect x='18' y='32' width='16' height='30' rx='1' fill='#0d3318' />
            <rect x='130' y='32' width='16' height='30' rx='1' fill='#0d3318' />
            <rect x='62' y='-22' width='52' height='24' rx='2' fill='#1e8c45' />
            <text
              x='88'
              y='-5'
              textAnchor='middle'
              fontFamily='sans-serif'
              fontWeight='700'
              fontSize='11'
              fill='white'
            >
              OMW
            </text>
          </g>

          {/* Ground glow */}
          <ellipse
            cx='600'
            cy='440'
            rx='300'
            ry='30'
            fill='#2dba5f'
            opacity='.06'
          />

          {/* Foreground road */}
          <rect x='0' y='460' width='1200' height='60' fill='#050d06' />
          <rect
            x='0'
            y='455'
            width='1200'
            height='12'
            fill='#071208'
            opacity='.8'
          />
        </svg>

        <div className='loc-overlay' />

        <div className='loc-pins'>
          {PINS.map((pin, i) => (
            <div
              key={i}
              className='loc-pin'
              style={{
                left: pin.left,
                top: pin.top,
                animationDelay: pin.delay,
              }}
            />
          ))}
        </div>

        <div className='loc-badge'>
          <div className='loc-badge-num'>12</div>
          <div className='loc-badge-lbl'>Stacione në Shqipëri</div>
        </div>

        <div className='loc-content'>
          <Reveal>
            <div className='loc-eyebrow'>
              <span className='loc-eyebrow-line' />
              <span className='loc-eyebrow-text'>Ku ndodhemi</span>
              <span className='loc-eyebrow-line' />
            </div>
          </Reveal>

          <Reveal>
            <h2 className='loc-heading'>
              Pika në të gjithë <em>Shqipërinë</em>
            </h2>
          </Reveal>

          <Reveal>
            <button
              className='loc-btn'
              onClick={(e) => {
                e.stopPropagation();
                navigate('/locations');
              }}
            >
              Shiko të gjitha pikat tona
              <span className='loc-btn-arrow'>→</span>
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
};
