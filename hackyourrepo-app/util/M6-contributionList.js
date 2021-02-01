// Module 6 

import{fetchContributor} from './M5_fetchContributor.js';
export let currentPage = 1;
export let rows = 5;


export async function contributionList(num, rowsPerPage, page){

    const showContributorList = document.getElementById("showContributorList");

    showContributorList.innerHTML ="";

    let contributor = await fetchContributor(num);

    page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginationList = contributor.slice(start, end);
   
    paginationList.forEach(element => {

        const contributorData = document.createElement("div");
        contributorData.className = "contribution";
        const contributorImg = document.createElement("img");
        contributorImg.style.width = "50px";
        const contributorlink = document.createElement("a");
        contributorlink.className = "link";
        const contributorBadge = document.createElement("div");
        contributorBadge.className = "badge";
        contributorImg.src = element.avatar_url;
        contributorlink.href = element.html_url;
        contributorlink.innerText = element.login;
        contributorBadge.innerText = element.contributions;
        contributorData.appendChild(contributorImg);
        contributorData.appendChild(contributorlink);
        contributorData.appendChild(contributorBadge);
        showContributorList.appendChild(contributorData);
    })
}

// Creates pagination

export async function setPagePagination(num, wrapper, rowsPerPage) {

    wrapper.innerHTML = "";

    let items = await fetchContributor(num);
    // console.log(items);
    let page_count = Math.ceil(items.length / rowsPerPage);
    // console.log(page_count)
    for (let i = 1; i <= page_count; i++) {
        const btn = await paginationButton(i, num);
        wrapper.appendChild(btn);
    }
}

  // Create and appends buttons to the page

export async function paginationButton(page , num) {

    const button = document.createElement("button");
    button.className = "button";
    button.innerText = page;

    if (currentPage === page) {
      button.classList.add("active");
    }

    button.addEventListener("click", function () {
      currentPage = page;
      contributionList(num, rows, currentPage);
    });

    return button;
}