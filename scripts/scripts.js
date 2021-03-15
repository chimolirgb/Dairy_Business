class Shed {
    constructor(name, production) {
        this.name = name;
        this.production = production;
    }
}

shedA = new Shed("A", 0);
shedB = new Shed("A", 0);
shedC = new Shed("A", 0);
shedD = new Shed("A", 0);

function updateProduction(e) {
    e.preventDefault();
    selectedShed = document.getElementById("shed").value;
    production = parseInt(document.getElementById("production").value);
    if (selectedShed == "A") {
        shedA.production = production;
    } else if (selectedShed == "B") {
        shedB.production = production;
    } else if (selectedShed == "C") {
        shedC.production = production;
    } else {
        shedD.production = production;
    }
};


function getTotalProduction() {
    totalProduction = shedA.production + shedB.production + shedC.production + shedD.production
    alert("shedA: " + shedA.production + " shedB: " + shedB.production + " shedC: " + shedC.production + " shedD: " + shedD.production + " Total: " + totalProduction)
}




// production = [];



