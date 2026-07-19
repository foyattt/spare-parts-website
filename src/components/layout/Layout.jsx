import { Outlet, useNavigate } from 'react-router-dom';
import TopContactBar from './TopContactBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <TopContactBar />
      <Navbar onSearchClick={handleSearchClick} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
