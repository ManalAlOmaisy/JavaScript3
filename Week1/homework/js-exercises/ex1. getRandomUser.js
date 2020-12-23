
const friendName = document.getElementById('pick-friend');
friendName.style.fontWeight = "bold";
friendName.style.paddingTop = "20px";
friendName.style.fontSize = "30px";

const friendImg = document.createElement('img');
document.body.appendChild(friendImg)

const button = document.getElementById("button-one");
const button2 = document.getElementById('button-Two');
button.addEventListener('click', callFriend);
button2.addEventListener('click', callFriendWithAxios);


// // using the XMLHttpRequest


const url ='https://www.randomuser.me/api';

function callFriend(){
    
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
//
xhr.onload = () => {
friendName.innerText = `${xhr.response.results[0].name.title} ${xhr.response.results[0].name.first} ${xhr.response.results[0].name.last}`;

friendImg.src= xhr.response.results[0].picture.large;

 console.log(xhr.response);
}

xhr.onerror = () => {
    console.log(`something went wrong`)
}

  xhr.open('GET', url);
  xhr.send();
}

//   // using the XMLHttpRequest

function callFriendWithAxios(){
    
   axios.get('https://www.randomuser.me/api')

  .then(function (response) {
    // handle success
    friendName.innerText = `${response.data.results[0].name.title} ${response.data.  results[0].name.first} ${response.data.results[0].name.last}`;
    friendImg.src= response.data.results[0].picture.large;
    console.log(response);
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .then(function () {
   console.log("All Done")
  });
}
