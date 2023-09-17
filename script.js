const myLibrary = [];
const alert = document.querySelector(".alert");
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


function addBookToGrid(book,index){
        const newBook = document.createElement("div");
        newBook.classList.add("book-template");
        newBook.innerHTML = `<div class="bookProperties">
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read?: ${book.read}</p>
            <button type="button" class="remove-button" data-index="${index}"> REMOVE </button>
        </div>`;
        
        // Add an event listener to the remove button
        bookContainer.appendChild(newBook);

        const removeButton = newBook.querySelector(".remove-button");
        removeButton.addEventListener("click", deleteBook);
            
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
    const readInput = document.querySelector('input[name="read"]:checked').value;
    if (titleInput === "" || authorInput === "" || pagesInput === "" || !readInput) {
        alertMessagePop(true);
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";

        document.querySelector('input[id="readNo"]').checked = true;


        return;
    }
    alertMessagePop(false);
    const book = {
        title: titleInput,
        author: authorInput,
        pages: pagesInput,
        read: readInput
    };
    
    myLibrary.push(book);
    
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.querySelector('input[id="readNo"]').checked = true;
    addBookToGrid(book, myLibrary.length-1);
}
function alertMessagePop(bool){
    const alertMsg = document.querySelector(".alert");
    if(bool){
    alertMsg.classList.add("closed");}
    else{
        alertMsg.classList.remove("closed");}

    }

const inputs = document.querySelectorAll("input");

submitBtn.addEventListener("click",addBookToList);
