import moment from 'moment';

export default[{
  id: '1',
  title: 'Blog Post 1',
  content: 'This is the first blog article',
  createdAt: moment(0).format('MMMM Do YYYY'),
  author: 'John'
}, {
  id: '2',
  title: 'Blog Post 2',
  content: 'This is the second blog article',
  createdAt: moment(0).subtract(10, 'days').format('MMMM Do YYYY').valueOf(),
  author: 'Jane'
}, {
  id: '3',
  title: 'Blog Post 1',
  content: 'This is the third blog article',
  createdAt: moment(0).add(10, 'days').format('MMMM Do YYYY').valueOf(),
  author: 'Dave'
}]