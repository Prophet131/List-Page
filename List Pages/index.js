let pop = document.getElementsByClassName("pop");

document.getElementById("filter-btn").addEventListener("click", function() {
    pop[0].style.display = "block";
    
});

document.getElementById("save-btn").addEventListener("click", function() {
    pop[0].style.display = "none";
});

