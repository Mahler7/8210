import React from 'react';
import { shallow } from 'enzyme';
import posts from '../../fixtures/posts';
import PostIndexItem from '../../../components/posts/PostsIndexItem';

test('should render PostsIndex page', () => {
  const wrapper = shallow(<PostIndexItem {...posts[2]}/>);
  expect(wrapper).toMatchSnapshot();
});