import React from 'react';
import Header from '../components/UI/Header/Header';
import github from '../assets/github.png';
import linkedIn from '../assets/LinkedIn.png';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header title="About us" />
      <div style={{ margin: '5em' }}>
        <p>
          This project was created as an example for a portfolio. But I love &quot;Rick and
          Morty&quot; :D
        </p>
        <p>
          Here you can see the main page with the character cards of the series &quot;Rick and
          Morty&quot;. You can also see a page with a form where you can create your cards.
        </p>
      </div>
      <p>You should check my links:</p>
      <h4>
        GitHub:{'  '}
        <a href="https://github.com/PetrAlexkulakov" style={{ color: 'black' }}>
          <img src={github} style={{ height: '1em', marginBottom: '-2px' }} />
          PetrAlexkulakov
        </a>
      </h4>
      <h4>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/petr-kulakov/?locale=en_US" style={{ color: 'black' }}>
          <img src={linkedIn} style={{ height: '1em', marginBottom: '-2px' }} />
          Petr Kulakov
        </a>
      </h4>
    </div>
  );
};

export default About;
