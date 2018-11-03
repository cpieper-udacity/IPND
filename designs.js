// Select color input

document.querySelector('#colorPicker').addEventListener('click', function(evt) {
  document.querySelector('#colorPicker').value = evt.target.value;
});

// Select size input

document.querySelector('#inputHeight').addEventListener('click', function(evt) {
  document.querySelector('#inputHeight').value = evt.target.value;
});

document.querySelector('#inputWidth').addEventListener('click', function(evt) {
  document.querySelector('#inputWidth').value = evt.target.value;
});

// When cell is clicked, change cell color

function cellColorFunction(evt) {
  evt.target.style.backgroundColor = document.querySelector('#colorPicker').value;
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  const numRows = document.querySelector('#inputHeight').value;
  const numCols = document.querySelector('#inputWidth').value;

  const body = document.getElementsByTagName('body')[0];
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');
  for (let i = 1; i <= numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= numCols; j++) {
      const cell = document.createElement('td');
      cell.addEventListener('click', cellColorFunction);
      row.appendChild(cell);
    };
    tblBody.appendChild(row);
  };
  tbl.id = "pixelCanvas";
  tbl.appendChild(tblBody);
  const prevTbl = document.getElementById('pixelCanvas');
  body.replaceChild(tbl, prevTbl);
}

document.querySelector('#sizePicker').addEventListener('click', function(evt) {
  if (evt.target.nodeName === 'INPUT' && evt.target.type === 'submit') {
    makeGrid();
    evt.preventDefault();
  };
});
