import Cart from "../Cart";
import Movie from "../Movie";
import Book from "../Book";
import Music from "../Music";
import Phone from "../Phone";

test("фильм добавляется в корзину", () => {
  const movie = new Movie(
    1,
    "The Avengers",
    true,
    "Мстители",
    2012,
    "США",
    "Avengers Assemble!",
    ["фантастика", "боевик", "фэнтези", "приключения"],
    137,
    1000,
    "avengers_img.png"
  );
  const music = new Music(1008, "Meteora", "Linkin Park", 900);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const phone = new Phone(25, "IPhone XR 32Gb", 50000);
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  cart.add(phone);
  expect(cart.getAll.includes(movie)).toBeTruthy();
  expect(cart.getAll.includes(music)).toBeTruthy();
  expect(cart.getAll.includes(book)).toBeTruthy();
  expect(cart.getAll.includes(phone)).toBeTruthy();
});

test("каждый фильм добавляется в корзину только 1 раз", () => {
  const movie = new Movie(
    1,
    "The Avengers",
    true,
    "Мстители",
    2012,
    "США",
    "Avengers Assemble!",
    ["фантастика", "боевик", "фэнтези", "приключения"],
    137,
    1000,
    "avengers_img.png"
  );
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);

  expect(cart.getAll.length).toBe(1);
});

test("в корзину можно положить несколько единиц техники", () => {
  const cart = new Cart();
  const phone = new Phone(25, "IPhone XR 32Gb", 50000);

  cart.add(phone);
  cart.add(phone);

  expect(cart.getAll[0].amount).toBe(2);
  expect(cart.getAll.length).toBe(1);
});

test("price корректно считает цену", () => {
  const cart = new Cart();
  const music = new Music(1008, "Meteora", "Linkin Park", 4564);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy",5432, 1225);
  cart.add(music);
  cart.add(book);

  expect(cart.price()).toBe(9996);
});

test("price корректно считает скидку", () => {
  const cart = new Cart();
  const music = new Music(1008, "Meteora", "Linkin Park", 4564);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 5432, 1225);
  cart.add(music);
  cart.add(book);

  expect(cart.discountPrice(30)).toBe(2998.8);
});

test("price корректно считает цену со скидкой", () => {
  const cart = new Cart();
  const music = new Music(1008, "Meteora", "Linkin Park", 4564);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 5432, 1225);
  cart.add(music);
  cart.add(book);

  expect(cart.totalSum(30)).toBe( 6997.2);
});

test("price корректно удаляет элемент из корзины ", () => {
  const cart = new Cart();
  const music = new Music(1008, "Meteora", "Linkin Park", 4564);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 5432, 1225);
  cart.add(music);
  cart.add(book);
  cart.deleteItemById(1001);
  expect(cart.getAll.includes(book)).toBeFalsy();
});

test("price корректно удаляет элемент из корзины ", () => {
  const cart = new Cart();
  const phone = new Phone(25, "IPhone XR 32Gb", 50000);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 5432, 1225);

  cart.add(phone);
  cart.add(phone);
  cart.add(book);

  cart.deleteItemById(25);
  cart.deleteItemById(1001);

  expect(cart.getAll[0].amount).toBe(1);
  expect(cart.getAll.length).toBe(1);
  expect(cart.getAll.includes(book)).toBeFalsy();
});