
// create the container
export const container = document.createElement("div");
document.body.appendChild(container);

//create the Nav
export const header = document.createElement("header");
header.classList.add("nav");
container.appendChild(header);
export const header4 = document.createElement("h4");
header4.innerText = "HYF Repositories";
header.appendChild(header4);
export const select = document.createElement("select");
select.setAttribute('id', 'selectMenu')
header.appendChild(select);


// create the main section
export const main = document.createElement("div");
main.classList.add("content");
container.appendChild(main);

// create the table inside the main

export const table = document.createElement("table");
export const data = ["Repository :", "Description :", "Forks :", "Updated :"];
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
export const contributorSection = document.createElement("section");
contributorSection.classList.add("contributors");
main.appendChild(contributorSection);
export const contributorParagraph = document.createElement("p");
contributorParagraph.innerText = "Contributors";
contributorParagraph.className = "contribution";
export const showContributorList = document.createElement("div");
showContributorList.setAttribute("id", "showContributorList")
contributorSection.appendChild(contributorParagraph);
contributorSection.appendChild(showContributorList);

//create page buttons
export const pageButtons = document.createElement("div");
contributorSection.appendChild(pageButtons);