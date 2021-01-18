"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
// import {fetchtRepositorylist} from './util/M1_fetchRepoList'

import {renderRepositoryList} from './util/M3_renderRepoList.js';
import {renderDataFromRepoList} from './util/M4_renderFromRepoList.js';
import {fetchContributor} from './util/M5_fetchContributor.js';
import { contributionList, setPagePagination, rows, currentPage } from "./util/M6-contributionList.js";


//create the container
const container = document.createElement("div");
document.body.appendChild(container);

//create the Nav
const header = document.createElement("header");
header.setAttribute("id", "nav");
container.appendChild(header);
const header4 = document.createElement("h4");
header4.innerText = "HYF Repositories";
header.appendChild(header4);
const select = document.createElement("select");
select.setAttribute('id', 'selectMenu')
header.appendChild(select);


// create the main section
const main = document.createElement("div");
main.setAttribute("id", "content");
container.appendChild(main);

// create the table inside the main
const table = document.createElement("table");
const data = ["Repository :", "Description :", "Forks :", "Updated :"];
for (let i = 0; i < data.length; i++) {
  const tableRow = document.createElement("tr");
  const tabledata1 = document.createElement("td");
  const tabledata2 = document.createElement("td");
  tabledata2.setAttribute("id", `table${i}`);
  tabledata1.innerText = data[i];
  tableRow.appendChild(tabledata1);
  tableRow.appendChild(tabledata2);
  table.appendChild(tableRow);
  main.appendChild(table);
}

// create the contributor section inside the main
const contributorSection = document.createElement("section");
contributorSection.setAttribute("id", "contributors");
main.appendChild(contributorSection);
const contributorParagraph = document.createElement("p");
contributorParagraph.innerText = "Contributors";
contributorParagraph.className = "contribution";
const showContributorList = document.createElement("div");
showContributorList.setAttribute("id", "showContributorList")
contributorSection.appendChild(contributorParagraph);
contributorSection.appendChild(showContributorList);

//create page buttons
const pageButtons = document.createElement("div");
contributorSection.appendChild(pageButtons);


select.addEventListener("change", (e) =>{
  renderDataFromRepoList(e.target.value)
  fetchContributor(e.target.value)
  contributionList(e.target.value, rows, currentPage)
  setPagePagination(e.target.value, pageButtons, rows)
});


function mainFunction(){
renderRepositoryList()
renderDataFromRepoList(0)
fetchContributor(0)
contributionList(0, rows, currentPage)
setPagePagination(0, pageButtons, rows)
}

window.addEventListener("load", mainFunction)