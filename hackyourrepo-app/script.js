"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

import {renderRepositoryList} from './util/M3_renderRepoList.js';
import {renderDataFromRepoList} from './util/M4_renderFromRepoList.js';
import {fetchContributor} from './util/M5_fetchContributor.js';
import { contributionList, setPagePagination, rows, currentPage} from "./util/M6-contributionList.js"; 
import {select, pageButtons} from './util/M7_CreateDOM.js';



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