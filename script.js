const Btn = document.querySelector('.btn');
const Output = document.querySelector('.output');
Btn.addEventListener("click", fetchapi);
/*

function fetchapi() {
  console.log("yes");


  fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(show => {
      //console.log(show.results)
      for (var i = 0; i < show.results.length; i++) {

        var sunny = show.results[i].gender;
        var firstname = show.results[i].name.first;
       
        if (sunny == "female") {
          console.log("its working");
         Output.innerHTML += `<li style = "color:green"> ${firstname + "    " + sunny}</li>`;
        }
        else{
           Output.innerHTML += `<li style = "color:red"> ${firstname + "    " + sunny}</li>`;
        }



        // Output.innerText += firstname +show.results[i].gender;


      }


    })
}
*/

function fetchapi(){
fetch("https://randomsuser.me/api/")
.then(res=>res.json())
.then(show=>{
  console.log(show)

})
.catch (Error => {
  console.log(Error)
  Output.innerText = Error;
})

  console.log("click");
}


