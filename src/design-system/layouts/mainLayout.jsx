import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar / Header */}
      <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <nav>
          <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/product-list" style={{ marginRight: '1rem' }}>Product list</Link>
          <Link to="/product">Producto</Link>
        </nav>
      </header>

      {/* Contenido dinámico de cada página */}
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: '1rem', backgroundColor: '#eee', marginTop: '2rem' }}>
        <p>© 2025 ModularExpress</p>
      </footer>
    </div>
  );
};

export default MainLayout;
