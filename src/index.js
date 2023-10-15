import './style.css';
import './header.css';
import List from './List.js';

const users = [
  {
    id: 1,
    name: '기태',
  }, 
  {
    id: 2,
    name: '블랙 위도우',
  },
  {
    id: 3,
    name: '아이언맨',
  },
  {
    id: 4,
    name: '헐크',
  },
  {
    id: 5,
    name: '토르',
  },
]


document.getElementById('root').appendChild(List({ userList: users }));