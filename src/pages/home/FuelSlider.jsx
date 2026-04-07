import { useRef, useState, useCallback } from 'react';
import { Reveal } from '../../components/Reveal';
import { FUELS } from '../../data/fuels/fuels';

export const FuelSlider = () => {
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = useCallback((e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    dragState.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: slider.scrollLeft,
    };

    setIsDragging(false);
  }, []);

  const handlePointerUp = useCallback(() => {
    dragState.current.isDown = false;
    setIsDragging(false);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const slider = sliderRef.current;
    const state = dragState.current;

    if (!slider || !state.isDown) return;

    const dx = e.clientX - state.startX;

    if (Math.abs(dx) > 5) {
      setIsDragging(true);
    }

    slider.scrollLeft = state.scrollLeft - dx;
  }, []);

  return (
    <section className='w-screen relative left-1/2 -translate-x-1/2 overflow-x-hidden'>
      <div
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerMove={handlePointerMove}
        className={`
          flex gap-6 overflow-x-auto overflow-y-hidden
          hide-scrollbar py-4 select-none overscroll-x-contain
          ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
        `}
        style={{
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
        }}
      >
        <div className='shrink-0 w-6 md:w-10' />

        {FUELS.map((fuel) => (
          <Reveal key={fuel.id}>
            <article className='group relative h-100 w-70 md:h-120 md:w-85 shrink-0 overflow-hidden rounded-4xl shadow-lg'>
              <img
                src={fuel.image}
                alt={fuel.name}
                draggable={false}
                className='pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />
              <div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6'>
                <h3 className='text-2xl md:text-3xl font-semibold text-white'>
                  {fuel.name}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}

        <div className='shrink-0 w-6 md:w-10' />
      </div>
    </section>
  );
};
