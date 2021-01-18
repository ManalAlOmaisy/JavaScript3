//Module 4

import {sortArray} from './M2_sortedRepo.js';

export async function renderDataFromRepoList(num) {

    let data = await sortArray();

    const repo = document.getElementById("table0");
    const desc = document.getElementById("table1");
    const forks = document.getElementById("table2");
    const updated = document.getElementById("table3");
    
    repo.innerText = data[num].name;
    desc.innerText = data[num].description;
    forks.innerText = data[num].forks;
    updated.innerText = data[num].updated;

} 