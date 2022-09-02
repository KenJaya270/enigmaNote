<<<<<<< HEAD
const judulCard = document.getElementById('exampleInputEmail1');

const save = document.querySelector('saveIt');

const texts = document.getElementById('texts');

const container = document.getElementById('cards-container');

const cards = `<div class="cards">
<nav class="navbar navbar-expand navbar-light bg-light mb-4">
    <a class="navbar-brand" href="#">${judulCard}.value</a>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i id="actionIcon" class="fa-solid fa-ellipsis-vertical"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right animated--grow-in"
                aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span> 
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-highlighter"></i>
                    <span>Edit</span> 
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-trash-can"></i>
                    <span>Delete</span> 
                </a>
            </div>
        </li>
    </ul>
</nav>
<div class="collapse show" id="collapseCardExample">
    <div class="card-body">
        ${texts}.value
=======
<<<<<<< HEAD
const button = document.getElementById('addNote-container');
const newdiv = `<div class="cards">
<div class="card-title-container">
    <div class="card-title-wrapper d-flex justify-content-between align-items-center">
        <h6 class="m-0">Type Title!</h6>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <div class="dropdown-menu dropdown-menu-right shadow">
            <div class="action">Change Cover</div>
            <div class="action">Delete</div>
            <div class="action">Edit</div>
        </div>
    </div>
</div>
<!-- Card Content - Collapse -->
<div class="collapse show" id="collapseCardExample">
    <div class="card-body">
        This is a collapsable card example using Bootstrap's built in collapse
        functionality. <strong>Click on the card header</strong> to see the card body
        collapse and expand!
=======
const judulCard = document.getElementById('exampleInputEmail1');

const save = document.querySelector('saveIt');

const texts = document.getElementById('texts');

const container = document.getElementById('cards-container');

const cards = `<div class="cards">
<nav class="navbar navbar-expand navbar-light bg-light mb-4">
    <a class="navbar-brand" href="#">${judulCard}.value</a>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i id="actionIcon" class="fa-solid fa-ellipsis-vertical"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right animated--grow-in"
                aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span> 
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-highlighter"></i>
                    <span>Edit</span> 
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-trash-can"></i>
                    <span>Delete</span> 
                </a>
            </div>
        </li>
    </ul>
</nav>
<div class="collapse show" id="collapseCardExample">
    <div class="card-body">
        ${texts}.value
>>>>>>> 395ee11169364dbc1ede9757a473ff0606ced8e0
>>>>>>> d2ab06596cc23c7529339f96b5f25bbeb7cb8f69
    </div>
</div>
</div>`;

<<<<<<< HEAD
save.addEventListener('click', function(){
    window.location = 'cards.html';
    container.insertAdjacentHTML(cards);
})
=======
<<<<<<< HEAD
button.addEventListener('click', function(){
    const container = document.getElementById('cards-container');

    container.insertAdjacentHTML('afterbegin', newdiv);
})
=======
save.addEventListener('click', function(){
    window.location = 'cards.html';
    container.insertAdjacentHTML(cards);
})
>>>>>>> 395ee11169364dbc1ede9757a473ff0606ced8e0
>>>>>>> d2ab06596cc23c7529339f96b5f25bbeb7cb8f69
