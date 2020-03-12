document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const ul = document.getElementById('moves-container');
  const body = document.getElementsByTagName('body')[0];
  
  document.addEventListener('keydown', checkKeyPress, false);
  function checkKeyPress(key){ 
    console.log(key.keyCode)
    if (key.keyCode === 40){
      let createLi = document.createElement("LI");
      ul.append(createLi)
      createLi.innerText = "down"
    }else if (key.keyCode === 38){
      let createLi = document.createElement("LI");
      ul.append(createLi)
      createLi.innerText = "up"
    }else if (key.keyCode === 37){
      let createLi = document.createElement("LI");
      ul.append(createLi)
      createLi.innerText = "left"
    }else if (key.keyCode === 39){
      let createLi = document.createElement("LI");
      ul.append(createLi)
      createLi.innerText = "right"
    } else if (key.keyCode === 46){
      ul.removeChild(ul.lastChild)
    }else {
      alert("Sorry use the (Up, Down, Left and Right) Keys")}
    } 
    
    document.addEventListener('click', function(event){
      if (event.target.id === "move-button"){
        const arrayLi = Array.from(ul.childNodes)
        arrayLi.forEach(li => move(li.innerText))
  }
  })

})
