import React from 'react';
import { shallow } from 'enzyme';
import posts from '../../fixtures/posts';
import { PostsIndex } from '../../../components/posts/PostsIndex';

test('should render PostsIndex page', () => {
  const wrapper = shallow(<PostsIndex posts={posts}/>);
  expect(wrapper).toMatchSnapshot();
});