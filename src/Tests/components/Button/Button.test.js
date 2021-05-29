import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import Button from '../../../components/Button';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        text: 'Example',
        event: () => {},
      };
      const error = checkProps(Button, expectedProps);
      expect(error).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        text: 'Example',
        event: () => {},
      };
      component = shallow(<Button {...props} />);
    });

    it('Should Render a button', () => {
      const button = findByTestAttr(component, 'btn-component');
      expect(button.length).toBe(1);
    });
  });
});
