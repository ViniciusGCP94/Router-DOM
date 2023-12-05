import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import Projects from './components/Projects';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={PortfolioPage} />
      <Route path="/projetos" component={Projects} />
    </div>
  </Router>
);

export default App;
