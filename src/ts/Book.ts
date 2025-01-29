import Buyable from "./Buyable";

export default class Book implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly author: string;
  readonly price: number;
  readonly pages: number;
  readonly count: boolean = false;
  readonly amount: number = 1 

  constructor(
    id: number,
    name: string,
    author: string,
    price: number,
    pages: number,

  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.pages = pages;
    this.count = false;
    this.amount = 1;
  }
}