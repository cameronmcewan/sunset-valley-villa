import { useState, useEffect } from 'react';
import styles from '../styles/components/Hero.module.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/villa-front.jpeg',
    '/images/villa-pool.jpeg',
    '/images/terrace-lower.jpeg',
    '/images/shaded-area.jpeg',
    '/images/mountain-view-from-terrace.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.carousel} style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to 16 Sunset Valley Villa</h1>
          <p className={styles.subtitle}>Family-Owned Villa Rental In Sunny North Cyprus</p>
          <a href="/availability" className={styles.button}>
            Check Availability
          </a>
        </div>
      </div>
      <div className={styles.carouselBubbles}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.carouselBubble} ${index === currentImage ? styles.active : ''}`}
            onClick={() => handleImageChange(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
