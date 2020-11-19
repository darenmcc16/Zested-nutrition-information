'use strict';

//jQuery for quick answer section of app.

const apiKey = '5e619bfd5e5f4ebaa7f6a6677cfd6255';
const searchURL = 'https://api.spoonacular.com/recipes/quickAnswer';

function formatQueryParams(params){
    const queryItems = Object.key(params)
    .map(key => `${endcodeURIComponent(key)} = ${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function displayResultsQuick(responseJson){
    console.log(responseJson);
    $('#results-list').empty();
    for(let i=0; i < responseJson.length; i++){
        $('#results-list').append(`<li>`)
    }    
}