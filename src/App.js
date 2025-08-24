import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Walmart E-commerce Platform</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/account">My Account</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h2>Welcome to Walmart Online</h2>
          <p>Save Money. Live Better.</p>
        </section>

        <section className="featured-products">
          <h3>Featured Products</h3>
          <div className="product-grid">
            <div className="product-card">
              <h4>Product 1</h4>
              <p>$19.99</p>
            </div>
            <div className="product-card">
              <h4>Product 2</h4>
              <p>$29.99</p>
            </div>
            <div className="product-card">
              <h4>Product 3</h4>
              <p>$39.99</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Walmart Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
