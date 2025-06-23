/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import './App.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Bookings</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="navbar">
          <h1>Welcome, Admin</h1>
        </header>

        <section className="content">
          <h2>Dashboard Overview</h2>
          <p>This is where you’ll manage bookings, portfolio uploads, and more.</p>
        </section>
      </main>
    </div>
  )
}

export default App
