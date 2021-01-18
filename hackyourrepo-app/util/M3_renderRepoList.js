
//Module 3

import {sortArray} from './M2_sortedRepo.js';

export async function renderRepositoryList(){

    let items = await sortArray();
    const select = document.getElementById("selectMenu");

    items.forEach((element, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.innerText = element.name;
        select.appendChild(option);
    });
} 