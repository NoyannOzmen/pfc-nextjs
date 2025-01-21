  
const rows = document.querySelectorAll('.view');

rows.forEach(row => row.addEventListener('click', deployMenu));

rows.forEach(row => {
    row.addEventListener("keydown", function(e) {
      if(e.keyCode==13){
        deployMenu(row);
        }
    })
});

function deployMenu(e) {
  //* If clicked : row is e(vent).currentTarget ; if Enter is pressed : row is e(vent)
  let fold = (e.currentTarget) ? e.currentTarget : e;
  console.log('click')
  
  let foldNode = fold.nextElementSibling;
  foldNode.classList.toggle('hidden')
  let nextSibling = foldNode.nextElementSibling;

  while(nextSibling && !nextSibling.classList.contains('font-grands')) {
    nextSibling.classList.toggle('hidden');
    nextSibling = nextSibling.nextElementSibling;
  }
};