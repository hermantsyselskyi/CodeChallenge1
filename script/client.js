console.log(`js`);
let boxArray = [];
let boxNumber = 0;
$('document').ready(onReady);
function clickables(){
$('.element').on('click','.selecta', handleSwitch);
$('.element').on('click','.selecta', handleDelete);
}
function handleDelete(){
  $(this.element).remove();
}
function handleSwitch(){
         var txtClass = $(this).attr("class");
if (txtClass === 'btn btn-primary red'){
$(this.element).removeClass('red');
$(this.element).addClass('yellow');
}
else if (txtClass === 'btn btn-primary yellow'){
  $(this.element).removeClass('yellow');
$(this.element).addClass('red');
}
}

function onReady() {
  console.log(`jq`);
  $(`#createBtn`).on(`click`, createDiv);
}
function createDiv(){
boxNumber++;
let outputString= `<div class="element">
                        <button class="btn btn-primary selecta">Switch Color</button>
                        <button class="btn btn-danger" selecta">Delete</button> 
                        ${boxNumber}
                      </div>`;
$(".boxes").append( outputString );
clickables();
}
