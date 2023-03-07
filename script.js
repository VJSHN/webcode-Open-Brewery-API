const url = "https://api.openbrewerydb.org/breweries"
const breweryContainer = document.getElementById("Brewery-container")
const searchBar = document.getElementById("search-bar")
let breweries = [];


function handleSearch(target){
    const search1 = target.value.toLowerCase();
    const findMatch1 = breweries.filter((e)=>{
        const word1 = e.brewery_type.toLowerCase();
        return word1.includes(search1)
    });
    cardInput(findMatch1);  
}

function handleSearch(target){
    const search = target.value.toLowerCase();
    const findMatch = breweries.filter((e)=>{
        const word = e.name.toLowerCase();
    return word.includes(search)
    });
    cardInput(findMatch);
}


async function getDataFromApi(){
    const response = await fetch(url);
    const data =await response.json();
    if(data.length>0){
        breweries = [...data]
        cardInput(breweries);

    }
}

console.log(breweries)

getDataFromApi();

function cardInput(data = []){
    let card = [];
    for(let i=0; i<data.length; i++){
        card.push(cardCreation(data[i]));
    }
    breweryContainer.innerHTML = "";
    breweryContainer.append(...card);
}


function cardCreation(data = {}){
    let card = document.createElement("div");
    card.setAttribute("class", 'card');
    let img = document.createElement("img");
    img.setAttribute("class", 'card-img-top');
    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", 'card-body');
    let title = document.createElement("h5");
    title.setAttribute("class", 'card-title');
    let text1 = document.createElement("p");
    text1.setAttribute("class", 'card-text');
    let text2 = document.createElement("p");
    text2.setAttribute("class", 'card-text');
    let text3 = document.createElement("p");
    text3.setAttribute("class", 'card-text');
    let text4 = document.createElement("p");
    text4.setAttribute("class", 'card-text');
    let btn = document.createElement("button");
    btn.setAttribute("class", 'btn btn-dark');

const {name = "", brewery_type = "", city = "", state="", country = "", 
website_url = "", phone = ""} = data;

img.style = "https://en.wiki.elvenar.com/images/d/d7/FA_Brewery.png";
title.innerText =name;
text1.innerText="Type:" + " " +  brewery_type;
text2.innerText ="Address:" + " " +city +", " + state +", " +  country;
text3.innerText ="Web:" + " " +website_url ;
text4.innerText ="Phone:" + " " +phone;
btn.innerText = "may i help you!";
card.append(img, title, text1, text2, text3, text4, btn);
return card
}






