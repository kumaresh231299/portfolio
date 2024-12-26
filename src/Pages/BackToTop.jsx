import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    isVisible && (
      <div
        className='back-to-top'
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          cursor: 'pointer',
        //   backgroundColor: '#007bff',
          backgroundColor: 'gray',
          color: 'white',
          padding: '0.8rem',
          borderRadius: '50%',
        }}
      >
        <FaArrowUp />
      </div>
    )
  );
}

export default BackToTop;
