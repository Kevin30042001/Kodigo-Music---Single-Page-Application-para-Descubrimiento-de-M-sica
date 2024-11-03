import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";
import LibraryPage from './pages/LibraryPage'; // Importa LibraryPage

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/library" element={<LibraryPage />} /> {/* Nueva ruta */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
