const url = "https://api.rawg.io/api/games?key=259a2b3a75554f4c90a82a46a059d437&dates=2019-01-01,2019-12-31&ordering=-rating";
  const resultcontainer = document.querySelector(".result");

  async function getGames() {
      const response = await fetch(url);
      //console.log(response);
      const name = await response.json();
       //console.log(name);
      const data = name.results;
      resultcontainer.innerHTML="";
     for(let i = 0; i < data.length; i++){
       console.log(data[i].name, data[i].rating, data[i].tags.length);

       if(i === 8){
           break;
       }

       resultcontainer.innerHTML += `<div>${data[i].name}, ${ data[i].rating}, ${data[i].tags.length}</div>`;

       }
   }
     
    

    getGames();

