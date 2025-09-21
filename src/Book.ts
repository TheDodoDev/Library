const myLibrary: Book[] = [];

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
type Element = HTMLElement | null;
function displayBooks(): void {
  const libraryElement: Element = document.querySelector(".library");
  if(libraryElement != null) {
    myLibrary.forEach(function(book: Book) {
      let bookDiv: HTMLDivElement = document.createElement("div");
      bookDiv.classList.add("book");
      bookDiv.innerHTML = `<p>${book.title}</p>
                           <p>${book.author}</p>
                          `;
      libraryElement.append(bookDiv);
    });
  }
}

displayBooks();
addBookToLibrary("A Dodo's Life", "Dodysseus");