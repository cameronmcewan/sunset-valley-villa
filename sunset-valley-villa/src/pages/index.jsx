import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Testimonials from '@/components/Testimonials';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import { Carousel } from 'antd';

export default function Home() {

  return (
    <Layout>
      <Hero />
      <Testimonials />
    </Layout>
  );
}

