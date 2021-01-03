const buttonXML = document.getElementById('button');
const buttonAxios = document.getElementById('button-Two');

const ul = document.createElement('ul')
const li = document.createElement('li')
const img = document.createElement('img')

li.appendChild(img);
ul.appendChild(li);
document.body.appendChild(ul);

buttonXML.addEventListener('click', randomDog);
buttonAxios.addEventListener('click', randomDogWithAxios);


// using the XMLHttpRequest

const url = 'https://dog.ceo/api/breeds/image/random';

function randomDog(){
    
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status <= 400){
      const item = xhr.response.message;
      renderImage(item)
    }
    else{
      console.log("HTTP Error:", xhr.status)
    }
  }
  xhr.onerror = () => {
      console.log(`something went wrong ${error}`)
  }
  xhr.open('GET', url);
  xhr.send();
}

//create render image
function renderImage(item){
  img.src = ""; // to clear the img
  img.src =item;
  img.style.width = '300px';
  img.style.height = '300px';
}

  // using the XMLHttpRequest

function randomDogWithAxios(){
    
   axios.get(url)
  .then(function (response) {
    // handle success
    const item  = response.data.message;
    renderImage(item);
    
  })
  .catch(function (error) {
   li.innerText = error;
   li.style.color = "red";
    console.log(error);
  })
  .then(function () {
   console.log("All Done")
  });
}