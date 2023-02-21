import Book from './modules/book.js';
import navigation from './modules/nav.js';
import * as dateTime from './modules/date.js';

const date = document.querySelector('.our-date');
date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;
const awesomeBook = new Book();
awesomeBook.addBook();
awesomeBook.showBooks();
navigation();