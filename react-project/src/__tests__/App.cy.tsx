import React from 'react';
import App from '../App';
import { mount } from '@cypress/react18';
import Html from '../Html';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { ModalProvider } from '../contexts/modalContext';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('<App>', () => {
  it('mounts', () => {
    mount(<div>Gfdgdf</div>);
  });
});
