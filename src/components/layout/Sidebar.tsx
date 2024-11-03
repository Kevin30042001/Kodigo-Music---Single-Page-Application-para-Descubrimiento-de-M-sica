import { Home, Search, Library, PlusSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-screen fixed left-0 top-0 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Kodigo Music</h1>
      </div>
      
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-3 text-gray-400 hover:text-white">
          <Home className="sidebar-icon" />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center space-x-3 text-gray-400 hover:text-white">
          <Search className="sidebar-icon" />
          <span>Search</span>
        </Link>
        <Link to="/library" className="flex items-center space-x-3 text-gray-400 hover:text-white">
          <Library className="sidebar-icon" />
          <span>Your Library</span>
        </Link>
        <div className="pt-4">
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white">
            <PlusSquare className="sidebar-icon" />
            <span>Create Playlist</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

// src/components/layout/MainLayout.tsx
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full min-h-screen p-8">
        {children}
      </main>
    </div>
  );
};