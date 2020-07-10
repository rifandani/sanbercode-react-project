import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import Loader from './components/posts/Loader';

describe('Loader component', () => {
  it('renders Loader component', () => {
    const component = shallow(<Loader />);
    const wrapper = component.find('.loaderComponent');
    expect(wrapper.length).toBe(0);
  });
});

describe('SignUp component', () => {
  it('renders SignUp component', () => {
    const component = shallow(<SignUp />);
    const wrapper = component.find('.signupComponent');
    expect(wrapper.length).toBe(1);
  });
});

describe('Navbar component', () => {
  it('renders Navbar wrapper component', () => {
    const component = shallow(<Navbar />);
    const wrapper = component.find('.navbarComponent');
    expect(wrapper.length).toBe(1);
  });
});

describe('Dashboard component', () => {
  it('renders Dashboard wrapper component', () => {
    const component = shallow(<Dashboard />);
    const wrapper = component.find('.dashboard');
    expect(wrapper.length).toBe(1);
  });
});

describe('App component', () => {
  it('renders App component', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.dashboard');
    expect(wrapper.length).toBe(0);
  });
});
