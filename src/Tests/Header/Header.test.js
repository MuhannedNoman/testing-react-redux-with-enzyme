import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';
import { findByTestAttr } from './../../utils';

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAttr(component, 'logo');
    expect(wrapper.length).toBe(1);
  });
});
