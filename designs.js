let sizePicker, inputHeight, inputWidth, colorPicker, pixelCanvas;
sizeSelect = document.getElementById('sizePicker');
heightSelect= document.getElementById('inputHeight');
widthSelect = document.getElementById('inputWidth');
colorSelect = document.getElementById('colorPicker');
editCanvas = document.getElementById('pixelCanvas');

// Select color input
colorSelect.addEventListener('click', function colorGrid(){});
// Select size input
sizeSelect.onsubmit = function(event){
  event.preventDefault();
  deleteGrid();
  makeGrid();
};

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for(let x=0; x<heightSelect.value; x++){
    const row = editCanvas.insertRow(x);
    for(let y=0; y<widthSelect.value; y++){
      const cell = row.insertCell(y);
      cell.addEventListener('click', colorGrid);
    }
  }
// Your code goes here!

}

function deleteGrid(){
  while(editCanvas.firstChild){
    editCanvas.removeChild(editCanvas.firstChild);
  }
}

function colorGrid(){
  this.style.backgroundColor = `${colorSelect.value}`;
}
