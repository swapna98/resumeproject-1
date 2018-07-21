function loadJson(file,callback) {
  var x = new  XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("Get",file,true);
  x.onreadystatechange=function(){
    if(x.readyState === 4 && x.status == "200"){
      callback(x.responseText);
    }
  };
    x.send(null);
}

loadJson("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  basics2(data.carrer);
  basics3(data.education);
  basics4(data.keyskills);
  basic(data.achievements);
})
var child1 = document.querySelector(".child1");
function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child1.appendChild(phoneno);

  var ad = document.createElement("h2");
  ad.textContent = "Address:";
  child1.appendChild(ad);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var address = document.createElement("address");
  address.textContent = det.address;
  child1.appendChild(address);

  var email = document.createElement("a");
  email.href = "lahariyogi99@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);
}
var child2 = document.querySelector(".child2");
function basics2(dat){

  var ar = document.createElement("h2");
  ar.textContent = "carrer objective:";
  child2.appendChild(ar);

  var hr = document.createElement("hr");
  child2.appendChild(hr);


  var info = document.createElement("h1");
  info.textContent = dat.info;
  child2.appendChild(info);
}
function basics3(edu){

  var ed = document.createElement("h2");
  ed.textContent = "education qualification";
  child2.appendChild(ed);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
  var deg = document.createElement("h1");
  deg.textContent = edu[i].degree;
  child2.appendChild(deg);

  var ul = document.createElement("h2");
  var li = document.createElement("li");
  li.textContent = edu[i].institute;
  ul.appendChild(li);
  child2.appendChild(ul);

  var li = document.createElement("li");
  li.textContent = edu[i].date;
  ul.appendChild(li);
  child2.appendChild(ul);
}
}
function basics4(key)
{
  var sg = document.createElement("h2");
  sg.textContent = "keyskills";
  child2.appendChild(sg);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var skilltable= document.createElement("table");
  skilltable.border = "1";
  child2.appendChild(skilltable);

  tabledata="";
  for(i=0;i<key.length;i++){
    tabledata+="<tr><td>"+key[i].title+"</td><td>"+key[i].info+"</td></tr>"
  }
  skilltable.innerHTML = tabledata;
}
function basic(achi)
{
  var ch = document.createElement("h2");
  ch.textContent = "achievements";
  child2.appendChild(ch);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<achi.length;i++){
  var place = document.createElement("h3");
  place.textContent = achi[i].place;
  child2.appendChild(place);

  var ui = document.createElement("h4");
  var li = document.createElement("li");
  li.textContent = achi[i].sport;
  ui.appendChild(li);
  child2.appendChild(ui);

  var li = document.createElement("li");
  li.textContent = achi[i].medal;
  ui.appendChild(li);
  child2.appendChild(ui);
}
}
