/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const main = document.querySelector(".container")
fetch("./cars.json")

    .then(response => {
        return response.json();
    })
    .then(data => adder(data));

function adder(data) {
    console.log(data);
    const ul = document.createElement("ul");
    main.append(ul);
    data.forEach((ele, ind) => {
        console.log(ele);
        const list = document.createElement("li");
        list.textContent = `${ind + 1} ${ele.brand} ${ele.models}`;
        ul.appendChild(list);
    })
}

