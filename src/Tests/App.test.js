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
  let app;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'title', body: 'text' },
        { title: 'title', body: 'text' },
        { title: 'title', body: 'text' },
      ],
    };
    app = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(app, 'app-component');
    expect(component.length).toBe(1);
  });

  it('updateState method should update state as expected', () => {
    const component = app.instance();
    component.updateState();
    const state = component.state.hideBtn;
    expect(state).toBe(true);
  });

  it('returnFunction method should return value as expected', () => {
    const component = app.instance();
    const result = component.returnFunction(1);
    expect(result).toBe(2);
  });
});
