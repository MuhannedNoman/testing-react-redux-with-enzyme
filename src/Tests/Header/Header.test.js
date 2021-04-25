import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';
import { findByAttr } from './../../utils';

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByAttr(component, 'logo');
    expect(wrapper.length).toBe(1);
  });
});
