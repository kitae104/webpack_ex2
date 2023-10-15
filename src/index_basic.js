import {hello, add} from './util.js';
import './style.css';
import './header.css';
import logo from './images/lion.png';

const text = hello('<h1>기태~ 코딩 연습중...</h1>');
const num = add(1, 2);
const img = `<img src="${logo}" alt="lion" />`;

document.getElementById('root').innerHTML = img + text + num; 