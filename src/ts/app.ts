import Cart from './Cart';
import Movie from './Movie';
import Book from './Book';
import Phone from './Phone';
import Music from './Music';


const movie = new Movie(
    1,
    'The Avengers',
    true,
        'Мстители',
        2012,
        'США',
        'Avengers Assemble!',
        ['фантастика', 'боевик', 'фэнтези', 'приключения'],
        137,
        1000,
        'avengers.png',
    );
const music = new Music(1008, "Meteora", "Linkin Park", 4564);
const book = new Book(1001, "War and Piece", "Leo Tolstoy", 5432, 1225);
const phone = new Phone(25, "IPhone XR 32Gb", 50000);
const cart = new Cart();
cart.add(movie);
cart.add(book);
cart.add(music);
cart.add(phone);

console.log(cart);