
const url = 'https://xkcd.now.sh/?comic=latest';

const img = document.createElement('img')
document.body.appendChild(img);


// using the XMLHttpRequest


function humor(){
    
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = ()=> {
    if (xhr.status >= 200 && xhr.status <= 400){
      img.src = xhr.response.img;
      console.log(xhr.response)
      }
      else {
        console.log("HTTP Error :", xhr.status);
      }
  }

  xhr.onerror = () => {
      console.log(`something went wrong ${error}`)
  }
  xhr.open('GET', url);
  xhr.send();
}

  // using the XMLHttpRequest

function humorTwo(){
    
  axios.get(url)
  .then(function (response) {
    // handle success
    img.src = response.data.img;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
   console.log("All Done")
  });
}