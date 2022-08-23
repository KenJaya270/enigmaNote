//add button
const button = document.getElementById('addNote-container');
const newdiv = `<div class="cards">
<div class="card-title-container">
    <div class="card-title-wrapper d-flex justify-content-between align-items-center">
        <h6 class="m-0">Type Title!</h6>
        <div class="action-icon-wrapper" >
            <i id="actionIcon" class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
</div>
<div class="action-to-note" id="action" hidden>
    <div class="action edit">
        <i class="fa-solid fa-pen-to-square"></i>
        <span>Edit</span>
    </div>
    <div class="action change-cover">
        <i class="fa-solid fa-highlighter"></i>
        <span>Change Cover</span>
    </div>
    <div class="action delete">
        <i class="fa-solid fa-trash-can"></i>
        <span>Delete</span>
    </div>
</div>
<!-- Card Content - Collapse -->
<div class="collapse show" id="collapseCardExample">
    <div class="card-body">
        This is a collapsable card example using Bootstrap's built in collapse
        functionality. <strong>Click on the card header</strong> to see the card body
        collapse and expand!
    </div>
</div>
</div>`;

button.addEventListener('click', function(){
    const container = document.getElementById('cards-container');

    container.insertAdjacentHTML('afterbegin', newdiv);
});

//Action Button
const action = document.querySelector('#action');

const actionIcon = document.getElementById('action-icon');

actionIcon.addEventListener('click', function(){
    let clicked = 0;

    if(clicked == 1){
        action.removeAttribute('hidden');
        clicked = 0;
    }else if(clicked == 0) {
        action.setAttribute('hidden', 'hidden');
        clicked = 1;
    }
})



