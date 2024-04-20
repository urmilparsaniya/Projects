import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MyComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 100, duration: 1, ease: 'power2.inOut' });
  }, []);

  return <div ref={boxRef} style={{ width: 100, height: 100, backgroundColor: 'red' }} />;
};

export default MyComponent;
