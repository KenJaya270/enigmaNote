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
    </div>
</div>
</div>`;

button.addEventListener('click', function(){
    const container = document.getElementById('cards-container');

    container.insertAdjacentHTML('afterbegin', newdiv);
})