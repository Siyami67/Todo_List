
var gorev=document.getElementById("gorev");
var ekle_btn=document.getElementById("ekle");
var sil_btn = document.getElementById('hepsinisil');
var list = document.getElementById("tasks");

var tasks = [];

ekle_btn.addEventListener('click', function () {
 if(gorev.value === ""){
    alert('lütfen görev giriniz');
 }else{
    list.innerHTML = "";
    tasks.push(gorev.value); 
    gorev.value = "";

    var item = document.createElement("li");

    for (var i = 0; i < tasks.length; i++) {

    var listItem = document.createTextNode(tasks[i]);
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(tasks[i]));
    list.append(li);

    }
}
  });


sil_btn.addEventListener('click',() => {

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      tasks = [];
});