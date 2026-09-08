
function search(){
    var txtValue = document.getElementById("txtSearch").value
    if(txtValue == "google"){
        window.open("https://www.google.com/", "_blank");
    }
    else if(txtValue == "youtube"){
        window.open("https://www.youtube.com/", "_blank");
    }
    else {
        alert("No Result Found");
    }
    document.getElementById("txtSearch").value="";
}