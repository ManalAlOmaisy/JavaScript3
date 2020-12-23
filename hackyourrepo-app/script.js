"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// soting the arrays by name

placeholderRepos.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(placeholderRepos)


const repositoryName = document.getElementById("Repository");
const Description= document.getElementById("Description");
const forks= document.getElementById("Forks");
const updated= document.getElementById("Updated");
const repoSelect = document.getElementById("repo");


// looping inside the select tag to create the opitons

for( let i=0 ; i < placeholderRepos.length; i++){
  const option = document.createElement('option')
  option.value = placeholderRepos[i].name;
  option.innerText = placeholderRepos[i].name;
  repoSelect.appendChild(option)

}

repoSelect.addEventListener('change', function(){

for(let i = 0; i < placeholderRepos.length; i++){

  if(repoSelect.value === placeholderRepos[i].name){
    repositoryName.innerText = placeholderRepos[i].name;
    Description.innerText = placeholderRepos[i].description;
    forks.innerText = placeholderRepos[i].forks;
    updated.innerText = placeholderRepos[i].updated;
    }}

})