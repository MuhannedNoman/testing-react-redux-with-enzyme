import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import ArticleCard from '../../components/ArticleCard';

describe('ArticleCard Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Title',
        desc: 'Some text',
      };

      const error = checkProps(ArticleCard, expectedProps);
      expect(error).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Title',
        desc: 'Some text',
      };

      component = shallow(<ArticleCard {...props} />);
    });

    it('Should render without error', () => {
      const card = findByTestAttr(component, 'article-card');
      expect(card.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(component, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttr(component, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let component;
    beforeEach(() => {
      const props = {
        desc: 'Some text',
      };

      component = shallow(<ArticleCard {...props} />);
    });

    it('Component not rendered', () => {
      const card = findByTestAttr(component, 'article-card');
      expect(card.length).toBe(0);
    });
  });
});
