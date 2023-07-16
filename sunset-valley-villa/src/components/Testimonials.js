import styles from '../styles/components/Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>
      <p className={styles.subtitle}>Read what our guests have to say:</p>
      <div className={styles.testimonial}>
        <p className={styles.testimonialText}>
          "We had an amazing stay at Sunset Valley Villa. The villa was beautifully furnished and the pool was
          fantastic. Highly recommended!"
        </p>
        <p className={styles.testimonialAuthor}>- John Smith</p>
      </div>
      <div className={styles.testimonial}>
        <p className={styles.testimonialText}>
          "Sunset Valley Villa provided the perfect getaway for our family. The location was breathtaking and the
          amenities were top-notch."
        </p>
        <p className={styles.testimonialAuthor}>- Jane Doe</p>
      </div>
      <div className={styles.tripAdvisorLink}>
        <a href="https://www.tripadvisor.co.uk/VacationRentalReview-g2360862-d2295429-Sunset_Valley_Villa_3_bed_3_bath_Private_Pool_Stunning_Location-Bahceli_Esentepe_Kyre.html" target="_blank" rel="noopener noreferrer">
          See more reviews on TripAdvisor
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
