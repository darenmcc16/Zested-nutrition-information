'use strict';

//jQuery for quick answer section of app.

const apiKey = '5e619bfd5e5f4ebaa7f6a6677cfd6255';
const searchURL = 'https://api.spoonacular.com/recipes/quickAnswer?api';

function formatQueryParams(params){
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    console.log(queryItems);
    return queryItems.join('&');
}

function displayResultsQuick(responseJson){
    console.log(responseJson);
    $('#results-list').empty();
        $('#results-list').append(`<p>${responseJson.answer}</p>`)
        $('#results-list').append(`<img src="${responseJson.image}">`)
    console.log(responseJson.answer);
    $('#results').removeClass('hidden')
}

function getQuickAnswerResults(query){
  const params = {
    Key: apiKey,
    q: query
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + queryString;

  console.log(url);

  fetch(url)
  .then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => {
    console.log(responseJson)
    if(Object.keys(responseJson).length == 0) {
      throw new Error("No results found");
    }
    else{
      displayResultsQuick(responseJson)
    }
  })
  .catch(err =>{
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });
  
}

function watchForm1(){
  $('#js-form').submit(event =>{
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    getQuickAnswerResults(searchTerm);
    console.log('Quick Answer Search is Ready');
  });
}

$(watchForm1);


//jQuery code for Generating Meal Plan

const searchURLMealPlan = 'https://api.spoonacular.com/mealplanner/generate?api';

function formatQueryParamsPart2(params){
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
    console.log(queryItems);
}

function displayMealResultsDay(responseJson){
    console.log(responseJson);
    $('#mealPlanResults').empty();
    for(let i=0; i < responseJson.length; i++){
        $('#mealPlanResults').append(`<li>
        <h3>${responseJson[i].title}</h3>
        <a href="${responseJson[i].sourceUrl}">Cooking Instructions</a>
        </li>
        `)
    }    
    $('.mealPlan-results').removeClass('hidden');
}

function displayMealResultsWeek(responseJson){
  console.log(responseJson);
  $('#mealPlanResults').empty();


  //Monday
  $('#mealPlanResults').append(`<h3>Monday</h3>`)
  for(let i=0; i < responseJson.monday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.monday.meals[i].title}<p>
    <a href="${responseJson.monday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.monday.nutrients.calories}</p>
    <p>Your total carbs for the day: ${responseJson.monday.nutrients.carbohydrates}</p>
    <p>Your total fat for the day: ${responseJson.monday.nutrients.fat}</p>
    <p>Your total protein for the day: ${responseJson.monday.nutrients.protein}</p>
    `)


  //Tuesday
  $('#mealPlanResults').append(`<h3>Tuesday</h3>`)
  for(let i=0; i < responseJson.tuesday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.tuesday.meals[i].title}<p>
    <a href="${responseJson.tuesday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.tuesday.nutrients.calories}<p>
    <p>Your total carbs for the day: ${responseJson.tuesday.nutrients.carbohydrates}<p>
    <p>Your total fat for the day: ${responseJson.tuesday.nutrients.fat}<p>
    <p>Your total protein for the day: ${responseJson.tuesday.nutrients.protein}<p>
    `)

      //Wednesday
  $('#mealPlanResults').append(`<h3>Wednesday</h3>`)
  for(let i=0; i < responseJson.wednesday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.wednesday.meals[i].title}<p>
    <a href="${responseJson.wednesday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.wednesday.nutrients.calories}<p>
    <p>Your total carbs for the day: ${responseJson.wednesday.nutrients.carbohydrates}<p>
    <p>Your total fat for the day: ${responseJson.wednesday.nutrients.fat}<p>
    <p>Your total protein for the day: ${responseJson.wednesday.nutrients.protein}<p>
    `)


       //Thursday
  $('#mealPlanResults').append(`<h3>Thursday</h3>`)
  for(let i=0; i < responseJson.thursday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.thursday.meals[i].title}<p>
    <a href="${responseJson.thursday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.thursday.nutrients.calories}<p>
    <p>Your total carbs for the day: ${responseJson.thursday.nutrients.carbohydrates}<p>
    <p>Your total fat for the day: ${responseJson.thursday.nutrients.fat}<p>
    <p>Your total protein for the day: ${responseJson.thursday.nutrients.protein}<p>
    `)

      //Friday
  $('#mealPlanResults').append(`<h3>Friday</h3>`)
  for(let i=0; i < responseJson.friday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.friday.meals[i].title}<p>
    <a href="${responseJson.friday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
  <h4>Macro Results</h4>
  <p>Your total calores for the day: ${responseJson.friday.nutrients.calories}<p>
  <p>Your total carbs for the day: ${responseJson.friday.nutrients.carbohydrates}<p>
  <p>Your total fat for the day: ${responseJson.friday.nutrients.fat}<p>
  <p>Your total protein for the day: ${responseJson.friday.nutrients.protein}<p>
  `)

     
    //Saturday
  $('#mealPlanResults').append(`<h3>Saturday</h3>`)
  for(let i=0; i < responseJson.saturday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.saturday.meals[i].title}<p>
    <a href="${responseJson.saturday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.saturday.nutrients.calories}<p>
    <p>Your total carbs for the day: ${responseJson.saturday.nutrients.carbohydrates}<p>
    <p>Your total fat for the day: ${responseJson.saturday.nutrients.fat}<p>
    <p>Your total protein for the day: ${responseJson.saturday.nutrients.protein}<p>
    `)

     //Sunday
  $('#mealPlanResults').append(`<h3>Sunday</h3>`)
  for(let i=0; i < responseJson.sunday.meals.length; i++){
    $('#mealPlanResults').append(`
    <p>${responseJson.sunday.meals[i].title}<p>
    <a href="${responseJson.sunday.meals[i].sourceUrl}" target="_blank">Cooking Instructions</a>`)
  }
  $('#mealPlanResults').append(`
    <h4>Macro Results</h4>
    <p>Your total calores for the day: ${responseJson.sunday.nutrients.calories}<p>
    <p>Your total carbs for the day: ${responseJson.sunday.nutrients.carbohydrates}<p>
    <p>Your total fat for the day: ${responseJson.sunday.nutrients.fat}<p>
    <p>Your total protein for the day: ${responseJson.sunday.nutrients.protein}<p>
    `)

    //$('mealPlan-results').removeClass('hidden')
}

function displayNutrientsResults(responseJson){
  console.log(responseJson);
  $('#nutrientsResults').empty();
    $('#nutrientsResults').append(`
    <h3>Macro Results</h3>
    <li>Total Calories for the day: ${responseJson.calories}</li>
    <li>Total Carbs for the day: ${responseJson.carbohydrates}</li>
    <li>Total Fat for the day: ${responseJson.fat}</li>
    <li>Total Protein for the Day: ${responseJson.protein}</li>`)
}

function getMealPlanResults(searchTimeFrame,number,dietType, excludeThis){
  const params = {
    Key: apiKey,
    timeFrame: searchTimeFrame,
    targetCalories: number,
    diet: dietType,
    exclude: excludeThis
  };
  const queryString2 = formatQueryParamsPart2(params)
  const url = searchURLMealPlan + queryString2;

  console.log(url);

  fetch(url)
  .then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => {
    console.log(responseJson)
    if(searchTimeFrame == 'day'){
      displayMealResultsDay(responseJson.meals)
      displayNutrientsResults(responseJson.nutrients)
    }
    else{
      displayMealResultsWeek(responseJson.week)
    }
  })
  .catch(err =>{
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });
}




function watchForm2(){
  $('.js-form-2').submit(event =>{
    console.log('Generate Meal app ready');
    event.preventDefault();
    const searchTimeFrame = $('#js-timeFrame').val();
    const searchTargetCalories = $('#js-targetCalories').val();
    const searchDiet = $('#js-diet').val();
    const searchExclude = $('#js-exclude').val();
    getMealPlanResults(searchTimeFrame, searchTargetCalories, searchDiet, searchExclude);
    console.log('Generate Meal app ready');
  });
}

$(watchForm2);


const searchURLRecipes = 'https://api.spoonacular.com/recipes/random?api'

function formatQueryParamsPart3(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayRecipeResults(responseJson) {
  console.log(responseJson);
  $('#recipe-results').empty();
  for (let i = 0; i < responseJson.recipes.length; i++){
    $('#recipe-results').append(`
    <li>
    <h3>${responseJson.recipes[i].title}</h3>
    <p>${responseJson.recipes[i].summary}</p>
    <p>Ready in: ${responseJson.recipes[i].readyInMinutes} minutes</p>
    <p>Serves: ${responseJson.recipes[i].servings}</p>
    <img src="${responseJson.recipes[i].image}"><br>
    <a href="${responseJson.recipes[i].sourceUrl}">${responseJson.recipes[i].sourceUrl}</a>
    </li>` 
    )};
  //display the results section  
  $('#recipes').removeClass('hidden');
};

function getRecipeResults(query, number=10) {
  const params = {
    Key: apiKey,
    tags: query,
    number,
  };
  const queryString3 = formatQueryParamsPart3(params)
  const url = searchURLRecipes + queryString3;

  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      console.log(responseJson)
      if(responseJson.recipes.length === 0) {
        throw new Error("No Recipes Found");
      }
      else{
        displayRecipeResults(responseJson)
      }
    })
    .catch(err =>{
      $('.js-error-message-recipe').text(`Something went wrong: ${err.message}`);
    });
}



function watchForm3() {
  $('.js-form-3').submit(event => {
    event.preventDefault();
    const searchRecipe = $('#js-recipe-search').val();
    const maxResults = $('#js-max-results').val();
    getRecipeResults(searchRecipe, maxResults);
  });
}

$(watchForm3);