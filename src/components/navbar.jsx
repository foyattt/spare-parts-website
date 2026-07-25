import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO ADDED HERE */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Company Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl">SINOTRUK PARTS</span>
        </Link>

        {/* Keep all your existing menu links right below as they were */}

      </div>
    </nav>
  );
}