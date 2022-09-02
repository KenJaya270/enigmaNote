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
    </div>
</div>
</div>`;

save.addEventListener('click', function(){
    window.location = 'cards.html';
    container.insertAdjacentHTML(cards);
})
