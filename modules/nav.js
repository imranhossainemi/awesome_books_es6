import {
  booksSec, bookCreate, booksLink, contact, addBookLink, contactLink,
} from './variables.js';

const navigation = () => {
  booksLink.addEventListener('click', (e) => {
    e.preventDefault();
    booksSec.style.display = 'block';
    bookCreate.style.display = 'none';
    contact.style.display = 'none';
  });

  addBookLink.addEventListener('click', (e) => {
    e.preventDefault();
    bookCreate.style.display = 'block';
    booksSec.style.display = 'none';
    contact.style.display = 'none';
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    bookCreate.style.display = 'none';
    booksSec.style.display = 'none';
    contact.style.display = 'block';
  });
};

export default navigation;
