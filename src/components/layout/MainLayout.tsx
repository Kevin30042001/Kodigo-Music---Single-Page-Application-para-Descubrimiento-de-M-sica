import { ReactNode } from 'react';
import { Home, Search, Library, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 flex flex-col">
        <Link to="/" className="mb-8">
          <h1 className="text-2xl font-bold text-white hover:text-primary-400">Kodigo Music</h1>
        </Link>
        
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Home className="w-6 h-6 mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Search className="w-6 h-6 mr-3" />
                Search
              </Link>
            </li>
            <li>
              <Link to="/library" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Library className="w-6 h-6 mr-3" />
                Your Library
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;