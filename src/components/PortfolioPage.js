import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Bem-vindo à minha página!</h2>
    <p>Aqui você encontrará informações sobre meus projetos e habilidades.</p>
    <ul>
      <li>
        <a href="seu-link-do-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="seu-link-do-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
    </ul>
    <Link to="/projetos">Ver Projetos</Link>
  </div>
);

export default Home;
