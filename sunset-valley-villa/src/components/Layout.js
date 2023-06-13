import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
        <div className="min-h-screen">
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 120px' }}>{children}</main>
            <Footer />
        </div>
    </>
  );
}
