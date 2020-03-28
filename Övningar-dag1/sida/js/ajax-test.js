
var xhr = new XMLHttpRequest();


xhr.open("GET", 'data/data.json', true);
xhr.send(null);

xhr.onload = function (){

    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = "";
        for (var i = 0; i < responseObject.notebooks.length; i++){
            newContent += "<div>";
            newContent += responseObject.notebooks[i].notebookName +"<br />";
            newContent += responseObject.notebooks[i].notebookColor + "<br />";
            newContent += responseObject.notebooks[i].notebookPrice + "<br /> <br />";
            newContent += "</div>";
        }

        document.getElementById('content').innerHTML = newContent;

    }
};
