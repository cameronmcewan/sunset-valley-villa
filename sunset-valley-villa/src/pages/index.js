import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import Slider from 'react-slick';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to my website</h1>
        <p>This is the homepage</p>
        <div className="container mx-auto mt-5">
          <Slider {...settings}>
            <div className="relative">
              <Image
                src="/images/villa-front.jpeg"
                alt="Villa Front"
                width={800}
                height={600}
              />
            </div>
            <div className="relative">
              <Image
                src="/images/villa-pool.jpeg"
                alt="The Pool"
                width={800}
                height={600}
              />
            </div>
          </Slider>
        </div>

      </div>
    </Layout>
  );
}

