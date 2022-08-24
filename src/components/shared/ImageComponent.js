import React, { useEffect } from 'react';
import gsap from 'gsap';

function ImageComponent({
  src,
  alt,
  className = '',
  onClick,
  loading = null,
  showBubbles = false,
}) {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
    t1.fromTo('#main-image', { y: '100vh' }, { y: 0, duration: 1.5 });
    t1.fromTo(
      [ '#bubble2', '#bubble4', '#bubble5', '#bubble6'],
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  const hoverTreeAnimation = () => {
    const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
    t1.to('#main-image', { rotateZ: 5, duration: 0.3 });
    t1.to('#main-image', { rotateZ: -5, duration: 0.3 });
    t1.to('#main-image', { rotateZ: 5, duration: 0.3 });
    t1.to('#main-image', { rotateZ: -5, duration: 0.3 });
    t1.to('#main-image', { rotateZ: 0, duration: 0.3 });
  };

  const bubblesClickAnimation = (id) => {
    const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
    t1.to(id, { y: -20, opacity: 0 });
    t1.to(id, { y: 0, opacity: 1, delay: 2 });
  };

  return showBubbles ? (
    <div className='relative'>
      <img
        className='w-7 h-7 absolute top-2.5 right-1/3 sm:right-52 sm:-top-9 xs:right-24 xs:top-0 opacity-0 z-20'
        src='/assets/hero/leaf.svg'
        id='bubble2'
        alt='right-1'
        onClick={() => bubblesClickAnimation('#bubble2')}
      />
    
      <img
        className='w-7 h-7 absolute left-auto top-2/4 -right-7 opacity-0 z-20'
        src='/assets/hero/o2.svg'
        id='bubble6'
        alt='right-3'
        onClick={() => bubblesClickAnimation('#bubble6')}
      />
      <img
        className='w-7 h-7 absolute -left-8 top-2/4 opacity-0 z-20'
        src='/assets/hero/o2.svg'
        id='bubble4'
        alt='left-3'
        onClick={() => bubblesClickAnimation('#bubble4')}
      />
      <img
        src={src}
        alt={alt}
        className={`${className} translate-y-full  z-10`}
        onClick={hoverTreeAnimation}
        id='main-image'
        loading={loading}
      />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={loading}
    />
  );
}

export default ImageComponent;