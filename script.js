var menu = document.getElementById("main_menu").children;

var file_name = location.pathname.split("/").slice(-1);

var file_name_edited = file_name[0].slice(0, -5)

var menu_item_name = ["index", "about_me", "projects", "hobbies", "contact"];

var current_page_index = menu_item_name.indexOf(file_name_edited);

menu[current_page_index].style.color = "#A239CA";
