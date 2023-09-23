const myLibrary = [];
const alert = document.querySelector(".alert");
class Book {
    constructor(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;}
    info = function(){
        return title + " by " + author + ", " + pages + " pages, "+ read ? "read":"not read yet";
    }
}
function loopThroughLibrary(){
    const myDiv = document.createElement("div");
    myDiv.innerText = myLibrary[0].title;
}

function addBookToLibrary(Book) {
    myLibrary.forEach((book,index) => addBookToGrid(book,index));
}

function openPopup(){
    const window = document.getElementById("popup-window");
    window.classList.toggle("hidden");
}

const popupBtn = document.getElementById("open-popup");
popupBtn.addEventListener("click",openPopup);

const submitBtn = document.getElementById("submit-btn");


const bookContainer = document.getElementById("book-container");


function addBookToGrid(book, index) {
    const newBook = document.createElement("div");
    newBook.classList.add("book-template");
    newBook.innerHTML = `<div class="bookProperties">
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <div class = "bookReadStatus" >Read Status <label class="switch">
                        
        <input type="checkbox" ${book.read ? 'checked' : ''}>
        <span class="slider round"></span>
      </label></div>
        <button type="button" class="remove-button" data-index="${index}"> REMOVE </button>
    </div>`;
    
    // Add an event listener to the remove button
    bookContainer.appendChild(newBook);

    const removeButton = newBook.querySelector(".remove-button");
    removeButton.addEventListener("click", deleteBook);

    // Add an event listener to the read status checkbox
    const readStatusCheckbox = newBook.querySelector('.switch input[type="checkbox"]');
    readStatusCheckbox.addEventListener('change', function() {
      myLibrary[index].read = this.checked;
    });
}

    
function render(startIndex=0){
    console.log("render called")
        bookContainer.innerHTML = '';
        for (let i = startIndex; i < myLibrary.length; i++) {
            addBookToGrid(myLibrary[i], i);
        }
    }
    
 function deleteBook(e) {
    const index = e.target.dataset.index;
    console.log(myLibrary)

    myLibrary.splice(index, 1);
    console.log(myLibrary)

    render();
    }
    

function addBookToList(){
    const titleInput = document.getElementById("name").value;
    const authorInput = document.getElementById("author").value;
    const pagesInput = document.getElementById("pages").value;
    const readInput = toggleCheckbox.checked?true:false;
    if (titleInput === "" || authorInput === "" || pagesInput === "") {
        alertMessagePop(true);
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";

        toggleCheckbox.checked = false;


        return;
    }
    alertMessagePop(false);
    const book = new Book(titleInput,authorInput,pagesInput,readInput);
       
    
    myLibrary.push(book);
    
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    toggleCheckbox.checked = false;
    addBookToGrid(book, myLibrary.length-1);
}
function alertMessagePop(bool){
    const alertMsg = document.querySelector(".alert");
    if(bool){
    alertMsg.classList.remove("closed");}
    else{
        alertMsg.classList.add("closed");}

    }

const inputs = document.querySelectorAll("input");

submitBtn.addEventListener("click",addBookToList);


const toggleCheckbox = document.querySelector('.switch input[type="checkbox"]');

