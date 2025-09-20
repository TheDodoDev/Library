const myLibrary = [];

class Book{
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readStatus: boolean;

  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.readStatus = false;
  }
}

function addBookToLibrary(title: string, author: string): void {
  const book: Book = new Book(crypto.randomUUID(), title, author);
  myLibrary.push(book);
}

function displayBooks(): void {
  
}