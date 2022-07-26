var mobiles=[
    {name:"a52s5g",brand:"samsung",nw:"5g",price:37000},
    {name:"oppo35",brand:"samsung",nw:"5g",price:37000},
    {name:"realmegt",brand:"rekme",nw:"5g",price:37000},
    {name:"vivo",brand:"relme",nw:"5g",price:37000},
    {name:"iq7",brand:"iq",nw:"5g",price:37000},
    {name:"samsungf32",brand:"samsung",nw:"5g",price:37000},
    {name:"samsunfe",brand:"samsung",nw:"5g",price:37000},
    {name:"mi11i",brand:"samsung",nw:"5g",price:37000},
    {name:"mi10pro",brand:"samsung",nw:"5g",price:37000},
    {name:"mi10promax",brand:"samsung",nw:"5g",price:37000},
  
  ]

  var html_data=``;

  mobiles.forEach(mobile=>{
      
     html_data+=`
      <tr>
      <td>${mobile.name}</td>
      <td>${mobile.brand}</td>
      <td>${mobile.nw}</td>
      <td>${mobile.price}</td>
      </tr>
      `
  })


  result.innerHTML=html_data;