import React from 'react';
import { shallow } from 'enzyme';
import PostsIndex from '../../../components/posts/PostsIndex';

test('should render PostsIndex page', () => {
  const wrapper = shallow(<PostsIndex/>);
  expect(wrapper).toMatchSnapshot();
});