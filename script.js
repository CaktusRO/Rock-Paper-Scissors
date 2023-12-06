let playerWeapon;
let computerWeapon;
let piatra = document.querySelector("#piatra")
let hartie = document.querySelector("#hartie")
let foarfeca = document.querySelector("#foarfeca")
let round1 = document.querySelector("#round1")
let rundeJucate = 0;

piatra.addEventListener("click", function() {
    function RandomNumber(max) {
        return Math.floor(Math.random() * max)
    }
    if (rundeJucate === 0 || rundeJucate === 3) {
    playerWeapon = "Piatra"
    if (rundeJucate === 3) {
        round1.innerHTML = ""
        round2.innerHTML = ""
        round3.innerHTML = ""
        rundeJucate = 0;
    }
    let computerSelection = RandomNumber(3);
    if (computerSelection === 0) {
        round1.innerHTML = "Remiză! Piatra este egală cu piatra."
        rundeJucate++
    } else if (computerSelection === 1) {
        round1.innerHTML = "Ai pierdut! Piatra este bătută de către hârtie!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round1.innerHTML = "Ai câștigat! Piatra bate foarfecele!"
        rundeJucate++
    }
} else if (rundeJucate === 1) {
    playerWeapon = "Piatra"
    
    let computerSelection = RandomNumber(3);
    if (computerSelection === 0) {
        round2.innerHTML = "Remiză! Piatra este egală cu piatra."
        rundeJucate++
    } else if (computerSelection === 1) {
        round2.innerHTML = "Ai pierdut! Piatra este bătută de către hârtie!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round2.innerHTML = "Ai câștigat! Piatra bate foarfecele!"
        rundeJucate++
    }
} else if (rundeJucate === 2) {
    playerWeapon = "Piatra"
    let computerSelection = RandomNumber(3);
    if (computerSelection === 0) {
        round3.innerHTML = "Remiză! Piatra este egală cu piatra."
        rundeJucate++
    } else if (computerSelection === 1) {
        round3.innerHTML = "Ai pierdut! Piatra este bătută de către hârtie!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round3.innerHTML = "Ai câștigat! Piatra bate foarfecele!"
        rundeJucate++
    }
}


})

hartie.addEventListener("click", function() {
    function RandomNumber(max) {
        return Math.floor(Math.random() * max)
    }
    let computerSelection = RandomNumber(3);
    if (rundeJucate === 0 || rundeJucate === 3) {
    playerWeapon = "Hartie"
    if (rundeJucate === 3) {
        round1.innerHTML = ""
        round2.innerHTML = ""
        round3.innerHTML = ""
        rundeJucate = 0;
    }
    if (computerSelection === 0) {
        round1.innerHTML = "Ai câștigat! Hârtia bate piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round1.innerHTML = "Remiză! Hârtia este egală cu hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round1.innerHTML = "Ai pierdut! Hârtia este bătută de către foarfece!"
        rundeJucate++
    }


} else if (rundeJucate === 1) {
    playerWeapon = "Hartie"
    if (computerSelection === 0) {
        round2.innerHTML = "Ai câștigat! Hârtia bate piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round2.innerHTML = "Remiză! Hârtia este egală cu hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round2.innerHTML = "Ai pierdut! Hârtia este bătută de către foarfece!"
        rundeJucate++
    }
} else if (rundeJucate === 2) {
    playerWeapon = "Hartie"
    if (computerSelection === 0) {
        round3.innerHTML = "Ai câștigat! Hârtia bate piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round3.innerHTML = "Remiză! Hârtia este egală cu hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round3.innerHTML = "Ai pierdut! Hârtia este bătută de către foarfece!"
        rundeJucate++
    } } } )

foarfeca.addEventListener("click", function() {
    function RandomNumber(max) {
        return Math.floor(Math.random() * max)
    }
    let computerSelection = RandomNumber(3);
    if (rundeJucate === 0 || rundeJucate === 3) {
    playerWeapon = "Foarfeca"
    if (rundeJucate === 3) {
        round1.innerHTML = ""
        round2.innerHTML = ""
        round3.innerHTML = ""
        rundeJucate = 0;
    }
    if (computerSelection === 0) {
        round1.innerHTML = "Ai pierdut! Foarfeca este bătută de către piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round1.innerHTML = "Ai câștigat! Foarfeca bate hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round1.innerHTML = "Ai pierdut! Remiză! Foarfeca este egală cu foarfeca!"
        rundeJucate++
    } 
} else if (rundeJucate === 1) {
    if (computerSelection === 0) {
        round2.innerHTML = "Ai pierdut! Foarfeca este bătută de către piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round2.innerHTML = "Ai câștigat! Foarfeca bate hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round2.innerHTML = "Ai pierdut! Remiză! Foarfeca este egală cu foarfeca!"
        rundeJucate++
    } 
} else if (rundeJucate === 2) {
    if (computerSelection === 0) {
        round3.innerHTML = "Ai pierdut! Foarfeca este bătută de către piatra!"
        rundeJucate++
    } else if (computerSelection === 1) {
        round3.innerHTML = "Ai câștigat! Foarfeca bate hârtia!"
        rundeJucate++
    } else if (computerSelection === 2) {
        round3.innerHTML = "Ai pierdut! Remiză! Foarfeca este egală cu foarfeca!"
        rundeJucate++
    } 

} } )