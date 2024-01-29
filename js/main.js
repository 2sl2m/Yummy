let Data = document.getElementById("demo");
let searchContainer = document.getElementById("Boxsearch");

async function getCategories() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();

  displayCategories(response.categories);
}

function displayCategories(response) {
  let category = "";

  for (let i = 0; i < response.length; i++) {
    category += `
    <div class="col-md-3">
    <div onclick="getMeals('${
      response[i].strCategory
    }')" class="layer position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${
          response[i].strCategoryThumb
        }" alt="" srcset="">
        <div class="item-layer position-absolute text-center text-black p-2">
            <h3>${response[i].strCategory}</h3>
            <p>${response[i].strCategoryDescription
              .split(" ")
              .slice(0, 20)
              .join(" ")}</p>
        </div>
    </div>
</div>
        `;
  }
  document.getElementById("demo").innerHTML = category;
}

// ********************************************
async function getArea() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();

  displayArea(response.meals);
}

function displayArea(response) {
  let area = "";

  for (let i = 0; i < response.length; i++) {
    area += `
   
        <div class=" area col-md-3  mt-5  text-center">    
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${response[i].strArea}</h3>
        </div>
     
        `;
  }

  document.getElementById("demo").innerHTML = area;
}

// ********************************************
async function getIngredients() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  displayIngredients(response.meals.slice(0, 20));
}

function displayIngredients(response) {
  let Ingredients = "";
  for (let i = 0; i < response.length; i++) {
    Ingredients += `
        <div class="col-md-3   text-center mt-5">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${response[i].strIngredient}</h3>
                        <p>${response[i].strDescription
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}</p>
                </div>
        </div>
        `;
  }
  document.getElementById("demo").innerHTML = Ingredients;
}
// ********************************************

function getInputs() {
  demo.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input " class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input " class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`;
}
// ********************************************
function getContacts() {
  demo.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="name"type="text" class="form-control" placeholder="Enter Your Name">
            </div>
            <div class="col-md-6">
                <input id="email" type="email" class="form-control " placeholder="Enter Your Email">
            </div>
            <div class="col-md-6">
                <input id="phone" type="text" class="form-control " placeholder="Enter Your Phone">
            </div>
            <div class="col-md-6">
                <input id="age"type="number" class="form-control " placeholder="Enter Your Age">
             
            </div>
            <div class="col-md-6">
                <input  id="password"type="password" class="form-control " placeholder="Enter Your Password">
           
            </div>
            <div class="col-md-6">
                <input  id="repassword" type="password" class="form-control " placeholder="Repassword">
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `;
}
// ********************************************
$("#Close").on("click", function () {
  $("#parent").animate({ left: -256 }, 500);
});
$("#open").on("click", function () {
  $("#parent").animate({ left: 0 }, 500);
});
// ********************************************
$(document).ready(() => {
  $(".loading-screen").fadeOut(500);
  $("body").css("overflow", "visible");
});
$(".loading-screen").fadeOut(1000);
// *********************************************
async function body() {
  let Data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );
  let response = await Data.json();
  console.log(response);
  displayData(response.meals);
}
body();
function displayData(response) {
  let cartona = "";
  for (let i = 0; i < response.length; i++) {
    cartona += `
    <div class="col-md-3">
    <div  class="layer position-relative mb-4  mt-5 overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${response[i].strMealThumb}" alt="" srcset="">
        <div class="item-layer position-absolute text-center text-black p-2">
            <h3>${response[i].strMeal}</h3>
            <p>${response[i].strMeal.split(" ").slice(0, 20).join(" ")}</p>
        </div>
    </div>
</div>
        `;
  }
  document.getElementById("demo").innerHTML = cartona;
}
