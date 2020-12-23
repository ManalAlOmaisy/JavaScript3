// const button = document.getElementById('button');
// const button2 = document.getElementById('button-Two');

// button.addEventListener('click', humor);
// button2.addEventListener('click', humorTwo);

const url = 'https://xkcd.now.sh/?comic=latest';

const img = document.createElement('img')
document.body.appendChild(img);


// using the XMLHttpRequest


function humor(){
    
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onload = ()=> {
   img.src = xhr.response.img;
   console.log(xhr.response)
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