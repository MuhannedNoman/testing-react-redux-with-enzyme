import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<App store={store} />)
    .childAt(0)
    .dive();
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'title', body: 'text' },
        { title: 'title', body: 'text' },
        { title: 'title', body: 'text' },
      ],
    };
    component = setUp(initialState);
  });

  it('Should render without errors', () => {
    const app = findByTestAttr(component, 'app-component');
    expect(app.length).toBe(1);
  });
});
