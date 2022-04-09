var menu = document.getElementById("main_menu").children;

var file_name = location.pathname.split("/").slice(-1);

console.log(file_name[0])
for (var i = 0; i < menu.length; i++) {
  var cell = menu[i];
  console.log(cell.textContent);
  console.log(file_name[0].slice(0, -5))
  if (cell.textContent.toLowerCase() == file_name[0].slice(0, -5)) {
    cell.style.color = "#A239CA";
  } 
  else{
      console.log("HELP")
  }
}