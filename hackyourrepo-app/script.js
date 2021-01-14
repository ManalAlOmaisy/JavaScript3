"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
function main(){

  //create the container
  const container = document.createElement("div");
  document.body.appendChild(container);
  //create the Nav
  const header = document.createElement("header");
  header.setAttribute('id', "nav");
  container.appendChild(header);
  //create h4
  const header4 = document.createElement("h4");
  header4.innerText = "HYF Repositories";
  header.appendChild(header4);
  //create select
  const select= document.createElement("select");
  header.appendChild(select);

  const defaultOption = document.createElement("option")
  defaultOption.innerText = "Select Repo";
  select.appendChild(defaultOption)

// ******************************************************

// create the main section

  const main = document.createElement("div");
  main.setAttribute('id', "content");
  container.appendChild(main);

// create the table section inside the main
  const table = document.createElement("table");
  const data = ["Repository :","Description :","Forks :", "Updated :"]

  for ( let i = 0; i< data.length; i++){   
      const tableRow = document.createElement("tr");
      const tableHeader= document.createElement("th");
      const tableData= document.createElement("td");
      tableData.setAttribute("id", `table${i}`)
      tableHeader.innerText = data[i];
      tableRow.appendChild( tableHeader);
      tableRow.appendChild( tableData);
      table.appendChild( tableRow);
      main.appendChild(table);
  };

// create the contributor section inside the main
  const contributorSection = document.createElement("section");
  contributorSection.setAttribute("id", "contributors")
  main.appendChild(contributorSection);

  const contributorParagraph = document.createElement("p");
  contributorParagraph.innerText = "Contributors";
  contributorParagraph.className ="contribution";

  const showContributorList = document.createElement("div")
  contributorSection.appendChild(contributorParagraph);
  contributorSection.appendChild(showContributorList);

// ******************************************************

  let repoInfo;

  function fetchData(){
      const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
       fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((jsonData) => {
          console.log(jsonData)
          repoInfo = jsonData
          selectOption(repoInfo)
          tableInfo(repoInfo)
      })
      .catch((error) => {
          console.log("Error", error)
      })

  }


  function selectOption(repoInfo){

      repoInfo.sort((a, b) => a.name > b.name ? 1 : -1);

      repoInfo.forEach((element, index) => {
          const option = document.createElement('option');
          option.innerText = element.name;
          option.value = index;
          select.appendChild(option);
      });
  
  };

  fetchData();

  function tableInfo(){

      const repo = document.getElementById("table0")
      const desc = document.getElementById("table1")
      const forks = document.getElementById("table2")
      const updated = document.getElementById("table3")

      repoInfo.forEach((element, index) => {

          if(select.value == index){
              repo.innerText = element.name;
              desc.innerText = element.description;
              forks.innerText = element.forks;
              updated.innerText = element.updated;
          }
          
      })
    
  }

  select.addEventListener('change', tableInfo);

// create function to fetch the contributors
  
  function fetchContributor(index){

      const results = repoInfo[index].contributors_url;

      fetch(results)
      .then((responses) => {
          return responses.json();
      })
      .then((jsonData)=> {
          // console.log(jsonData)
          const item = jsonData;
          contributionList(item)
      })
  }

  function contributionList(item){

      showContributorList.innerHTML = "";
      
     
      item.forEach((element)=>{
     
          const contributorData = document.createElement('div');
          contributorData.className = "contribution";
          const contributorImg = document.createElement('img');
          contributorImg.style.width = "50px";
          const contributorlink = document.createElement('a');
          contributorlink.className ="link"
          const contributorBadge = document.createElement('div');
          contributorBadge.className ="badge";
      
          contributorImg.src= element.avatar_url;
          contributorlink.href = element.html_url;
          contributorlink.innerText = element.login;
          contributorBadge.innerText = element.contributions;

          contributorData.appendChild(contributorImg);
          contributorData.appendChild(contributorlink);
          contributorData.appendChild(contributorBadge);
          showContributorList.appendChild(contributorData);
          
      })  
  }
  

  select.addEventListener('change', (event) => {
      fetchContributor(event.target.value)
  });
  

}
window.addEventListener("load", main);


