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
    for(let i=0; i < responseJson.length; i++){
        $('#results-list').append(`<p>${responseJson.answer}</p>`)
    };
    console.log(responseJson.answer);
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
  .then(responseJson => displayResultsQuick(responseJson))
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
}

function displayMealResults(responseJson){
    console.log(responseJson);
    $('#mealPlanResults').empty();
    for(let i=0; i < responseJson.meals.length; i++){
        $('#mealPlanResults').append(`<li>
        <h3>${responseJson.meals[i].title}</h3>
        <img
        <a href="${responseJson.meals[i].sourceUrl}">Cooking Instructions</a>
        </li>`)
    }    
    $('#mealPlan-results').removeClass('hidden');
}

function displayNutrientsResults(responseJson){
  console.log(responseJson);
  $('#nutrientsResults').empty();
  for(let i=0; i<responseJson.nutrients.length; i++){
    $('#nutrientsResults').append(`
    <li>${responseJson.nutrients[i].calories}</li>
    <li>${responseJson.nutrients[i].carbohydrates}</li>
    <li>${responseJson.nutrients[i].fat}</li>
    <li>${responseJson.nutrients[i].protein}</li>`)
  }
}

function getMealPlanResults(timeFrame, targetCalories, diet, exclude){
  const params = {
    Key: apiKey,
    timeFrame,
    targetCalories,
    diet,
    exclude
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
  .then(responseJson => displayResultsQuick(responseJson))
  .catch(err =>{
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });
}
//Can this function watch multiple inputs?
function watchForm2(){
  $('#js-form-2').submit(event =>{
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    getMealPlanResults(searchTerm);
    console.log('Generate Meal app ready');
  });
}

$(watchForm2);