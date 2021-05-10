import React from 'react';
import { shallow } from 'enzyme';

import Headline from '../../components/Headline';
import { findByTestAttr, checkProps } from './../../utils';

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe('Headline Component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        user: [
          {
            firstName: 'Fist Name',
            lastName: 'Last Name',
            email: 'test@gmail.com',
            age: 20,
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('With props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Hello world!',
      };
      component = setUp(props);
    });
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'headerline-component');
      expect(wrapper.length).toBe(1);
    });

    it('should render a header', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('should render a description', () => {
      const wrapper = findByTestAttr(component, 'description');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Without props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('should render null', () => {
      const wrapper = findByTestAttr(component, 'headerline-component');
      expect(wrapper.length).toBe(0);
    });
  });
});
