var watches = [
    { name: "Rolex", bandcolor: "gold", price: "7050", display: "round", material: "fabric", dial: "black", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126000-0005.png?imwidth=380" },
    { name: "Tag Heuer", bandcolor: "gold", price: "2800", display: "square", material: "Leather", dial: "white", image: "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw4af5aa3d/TAG_Heuer_Carrera/WAR1314.BA0778/WAR1314.BA0778_0913.png?impolicy=resize&width=664&height=498" },
    { name: "Cartier", bandcolor: "silver", price: "3308", display: "digital", material: "Rubber", dial: "Brown", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m124200-0003.png?imwidth=380" },
    { name: "Grand Seiko", bandcolor: "black", price: "2200", display: "round", material: "leather", dial: "gold", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m279160-0002.png?imwidth=380" },
    { name: "Hermès", bandcolor: "rose golden", price: "10275", display: "analogue", material: "silicone", dial: "grey", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m277200-0006.png?imwidth=380" },
    { name: "Omega", bandcolor: "gold", price: "6300", display: "square", material: "fabric", dial: "silver", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m124300-0001.png?imwidth=420" },
    { name: "Nomos Glashütte", bandcolor: "silver", price: "3700", display: "round", material: "leather", dial: "white", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m326238-0009.png?imwidth=420" },
    { name: "Longines", bandcolor: "gold", price: "1600", display: "analogue", material: "plastic", dial: "gold", image: "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m326235-0005.png?imwidth=420" },
  ]

  let html_data=``;

  watches.forEach(watch=>{
      html_data+=`
      <div class="col-4">
      <div class="card mt-5" style="width = 100%;">
  <img src="${watch.image}" class="card-img-top" alt="..."  width = "100%", height = "300px" >
  <div class="card-body">
    <h5 class="card-title">${watch.name}</h5>
  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Band Colour : ${watch.bandcolor}</li>
    <li class="list-group-item">Price : ${watch.display}</li>
    <li class="list-group-item">Display:${watch.display}</li>
    <li class="list-group-item">Material:${watch.material}</li>
    <li class="list-group-item">Dial:${watch.dial}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
      </div>
      `
  })
  result.innerHTML=html_data;


  function findProduct(){
      
      let productName=srch.value;
      let product=watches.find(p=>p.name==productName);
      populateValue(product);

  }

  function populateValue(watch){
      let html_data=`
        <div class= "col-12">
        <div class="card mt-5" style="width = 100%;">
        <img src="${watch.image}" class="card-img-top img-fluid" alt="..."  width = "100%", height = "300px" >
        <div class="card-body">
          <h5 class="card-title">${watch.name}</h5>
        
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Band Colour : ${watch.bandcolor}</li>
          <li class="list-group-item">Price : ${watch.display}</li>
          <li class="list-group-item">Display:${watch.display}</li>
          <li class="list-group-item">Material:${watch.material}</li>
          <li class="list-group-item">Dial:${watch.dial}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        </div>
      
      `
      result.innerHTML=html_data;
  }


var select = document.querySelector("#select")
watches.forEach(p=>{
    let option = document.createElement("option")
    option.text = p.name;
    option.value = p.name;
    select.appendChild(option);
});

function fetchProduct(){

    let productName = select.value;
    let product = watches.find(n=>n.name==productName)
    populateValue(product);

}  
