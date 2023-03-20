
var coll = document.getElementsByClassName("collapsible");
var i;
            
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
}

//Search function
function search(){
    let searchBar = document.querySelector(".searchBar").value;
    let univ_list = document.querySelector("#university");
    let universities = document.querySelectorAll(".univ");
    let univ_name = document.getElementsByTagName("p");

    for(let i = 0; i < univ_name.length; i++){
        let match = universities[i].getElementsByTagName("p")[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.indexOf(searchBar) > -1){
            universities[i].style.display="";
            }
            else{
                universities[i].style.display = "none";
            }
        }
    }
}

// GPA calculator

function gpa_calc(){
    let highSchool = document.getElementById("hs").value;
    let aptitude = document.getElementById("apt").value;
    let achive = document.getElementById("ach").value;
    let result = (highSchool * 0.3) + (aptitude * 0.3) + (achive * 0.4);
    document.getElementById("result").innerHTML = "نسبتك هي: "+result;
}