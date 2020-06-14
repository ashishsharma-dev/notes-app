console.log("Welcome to this");
// showNotes();
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("notesTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }

  notesObject.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObject));
  addTxt.value = "";
  console.log(notesObject);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }

  let html = "";
  notesObject.forEach(function (element, index) {
    html += `
    <div class="noteCard col-lg-3 col-md-4 col-sm-6">
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObject.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show here click on "Add Note" Button to add a note`;
  }
}

function deleteNote(index) {
  console.log("I am deleting", index);
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }

  notesObject.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObject));
  showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');

    let noteArray =  Array.from(noteCards);
    noteArray.forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if (cardTxt.includes(inputVal)){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        console.log(cardTxt);
    })

    console.log(noteArray);
})