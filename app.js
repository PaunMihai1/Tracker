const inputNume = document.querySelector(".numeInput")

const inputPret = document.querySelector(".pretInput")

const inputData = document.querySelector(".dataInput")
const butonSubmit = document.querySelector(".btn")
const tabel = document.querySelector("tbody")

// -------------------- EVENT LISTENERS ----------------------

butonSubmit.addEventListener('click', addTranzactie)




// ----------------------- FUNCTII ------------------------------

function addTranzactie(event) {

    if(inputNume.value === "" || inputData.value === "" || inputPret.value === ""){
        alert("Trebuie sa introduci toate informatiile necesare!")
        return
    }
    // CREEZ LINIA TABELULUI-------------------
    const linie = document.createElement('tr')
    linie.classList.add('liniuta')
    tabel.appendChild(linie)

    // CREEZ DATELE ------------------------
    
    var nume = document.createElement('td')
    nume.innerText = inputNume.value
    linie.appendChild(nume)

    var data = document.createElement('td')
    data.innerText = inputData.value
    linie.appendChild(data)

    var pret = document.createElement('td')
    pret.innerText = inputPret.value
    linie.appendChild(pret)

    var xbtn = document.createElement('td')
    xbtn.classList.add('X-btnLinie')
    xbtn.innerHTML = "<button class='X-btn'>X"
    linie.appendChild(xbtn)

    inputData.value = ""
    inputNume.value = ""
    inputPret.value = ""
}


// ------------------ BUTOANE REMOVE ----------------------------
tabel.onclick = function (event) {
    if(event.target.className != 'X-btn') return

    const line = event.target.closest('.liniuta')
    line.remove()
}