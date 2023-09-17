const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, "+ read ? "read":"not read yet";
    }
}
function loopThroughLibrary(){
    const myDiv = document.createElement("div");
    myDiv.innerText = myLibrary[0].title;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function openPopup(){
    const window = document.getElementById("popup-window");
    window.classList.toggle("hidden");
}

const popupBtn = document.getElementById("open-popup");
popupBtn.addEventListener("click",openPopup);

const submitBtn = document.getElementById("submit-btn");



const bookContainer = document.getElementById("book-container");


function addBook(){
    const newBook = document.createElement("div");
    newBook.classList.add("book-template");
    newBook.innerText= "blahblah";
    bookContainer.appendChild(newBook);
}
submitBtn.addEventListener("click",addBook);
submitBtn.addEventListener("click",openPopup);