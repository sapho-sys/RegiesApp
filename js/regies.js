//reference 
var addButton = document.querySelector(".add");
var resetBtn = document.querySelector(".reset")
var showBtn = document.querySelector(".show");
var showMeAll = document.querySelector(".showAll");
var radioTown = document.querySelector('.rad1');
var dispReg = document.querySelector('.dispReg');
var regBox = document.querySelector('.regBox');
var error = document.querySelector(".error");




// Add event listeners
addButton.addEventListener('click', regNumber);
showBtn.addEventListener('click', showTownReg);
showMeAll.addEventListener('click', showAllTownReg);
resetBtn.addEventListener('click', resetPage)


var strRadio = "";
let enteredPlate;
//regex for my towns
const regExp1 = /^((CA|CF|CJ|CL)\s([0-9]){6})$/;
const regExp2 = /^((CA|CF|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
const regExp3 = /^((CA|CF|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;


if (localStorage['registration numbers']) {
    enteredPlate = JSON.parse(localStorage.getItem("registration numbers"));

}


//  Instantiate the instance of the factory function
let Instantiate = regFactory(enteredPlate);



//handles the values entered then 
function addObject(myObject) {
    var changed = Object.keys(myObject);
    for (var i = 0; i < changed.length; i++) {
        // create element to display it as silver number plate
        let newRegNo = document.createElement('plates');

        newRegNo.textContent = changed[i];
        dispReg.appendChild(newRegNo);

    }
}

//handles all the plates entered
function addArray(myArray) {
    if (myArray.length != 0) {
        for (var i = 0; i < myArray.length; i++) {
            //create element to display all plates
            let newRegNo = document.createElement('plates');

            newRegNo.textContent = myArray[i];
            dispReg.appendChild(newRegNo);

        }
    } else {
        setTimeout(function () {
            dispReg.innerHTML = "No registration number from this town!";

        }, 0);

        setTimeout(function () {
            dispReg.innerHTML = "";
        }, 3500);
    }
}


//  Call function that Show registration numbers that already in the localStorage
addObject(Instantiate.regNoAdded());



// function for Add registration button

function regNumber() {
    dispReg.innerHTML = "";
    document.getElementById('Cpt').checked = false;
    document.getElementById('Paarl').checked = false;
    document.getElementById('Stellies').checked = false;
    document.getElementById('Kuilsriver').checked = false;
    strRadio = "";

    // instRegistration.setReg(regTextbox.value);


    if (regBox.value !== "") {

        if (regBox.value.toUpperCase().match(regExp1) || regBox.value.toUpperCase().match(regExp2) || regBox.value.toUpperCase().match(regExp3)) {

            if (Instantiate.addRegNo(regBox.value)) {

                addObject(Instantiate.regNoAdded());
                regBox.value = "";

                setTimeout(function () {
                    error.innerHTML = Instantiate.getMessage();

                }, 0);

                setTimeout(function () {
                    error.innerHTML = "";


                }, 3500);

            } else {
                addObject(Instantiate.regNoAdded());

                setTimeout(function () {
                    error.innerHTML = Instantiate.getMessage();

                }, 0);

                setTimeout(function () {
                    error.innerHTML = "";


                }, 3500);
            }

        } else {
            addObject(Instantiate.regNoAdded());

            setTimeout(function () {
                error.innerHTML = "Error! Invalid registration number format provided";
                error.classList.add('error');
            }, 0);

            setTimeout(function () {
                document.getElementById('Cpt').checked = false;
                document.getElementById('Paarl').checked = false;
                document.getElementById('Stellies').checked = false;
                document.getElementById('Kuilsriver').checked = false;


                dispReg.innerHTML = "";
                regBox.value = "";
                error.innerHTML = "";
            }, 5500);
        }

    } else {
        addObject(Instantiate.regNoAdded());
        setTimeout(function () {
            error.innerHTML = "Error! Please enter registration";
            error.classList.add('error');
        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;


            dispReg.innerHTML = "";
            regBox.value = "";
            error.innerHTML = "";
        }, 5500);
    }

    localStorage.setItem("registration", JSON.stringify(Instantiate.regNoAdded()));

}

// function for Show registration button

function showTownReg() {
    dispReg.innerHTML = "";

    var checkedTownBtn = document.querySelector("input[name='town']:checked");

    if (checkedTownBtn) {
        strRadio = checkedTownBtn.value;

    }

    if (strRadio !== "") {
        Instantiate.showRegNo(strRadio);

        addArray(Instantiate.showTown());

    } else {
        setTimeout(function () {
            dispReg.innerHTML = "Error! town not selected";


        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;


            dispReg.innerHTML = "";
            regBox.value = "";
            dispReg.innerHTML = "";
            addObject(Instantiate.regNoAdded());

        }, 5500);

    }


}


//  function for Show All registration button

function showAllTownReg() {
    dispReg.innerHTML = "";
    document.getElementById('Cpt').checked = false;
    document.getElementById('Paarl').checked = false;
    document.getElementById('Stellies').checked = false;
    document.getElementById('Kuilsriver').checked = false;
    strRadio = "";

    var objectForTwns = Object.keys(Instantiate.regNoAdded());
    if (objectForTwns.length != 0) {
        addObject(Instantiate.regNoAdded());

    } else {
        setTimeout(function () {
            dispReg.innerHTML = "No Registration number(s) yet";

        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;



            regBox.value = "";
            dispReg.innerHTML = "";


        }, 3500);
    }

}


// function for Reset Button

function resetPage() {
    localStorage.clear();

    setTimeout(function () {
        dispReg.innerHTML = "The page will be reset shortly";



    }, 0);

    setTimeout(function () {
        document.getElementById('Cpt').checked = false;
        document.getElementById('Paarl').checked = false;
        document.getElementById('Stellies').checked = false;
        document.getElementById('Kuilsriver').checked = false;


        dispReg.innerHTML = "";
        regBox.value = "";
        location.reload();

    }, 2500);

}







