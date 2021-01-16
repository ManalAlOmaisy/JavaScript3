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
const description= document.getElementById("Description");
const forks= document.getElementById("Forks");
const updated= document.getElementById("Updated");
const repoSelect = document.getElementById("repo");


// looping inside the select tag to create the opitons

placeholderRepos.forEach((element, index)=> {
    const option = document.createElement('option')
    option.value = index;
    option.innerText = element.name;
    repoSelect.appendChild(option)

})

repoSelect.addEventListener('change', function(event){

   const selectRepo = placeholderRepos[event.target.value];

    repositoryName.innerText = selectRepo.name;
    Description.innerText = selectRepo.description;
    forks.innerText = selectRepo.forks;
    updated.innerText = selectRepo.updated;
  
})
