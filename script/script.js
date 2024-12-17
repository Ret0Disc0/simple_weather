

fetch('http://api.openweathermap.org/data/2.5/weather?id={id city}&lang=ru&appid={token}')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    document.getElementById('city').textContent = data.name;
    document.getElementById('temp').textContent = Math.round(data.main.temp-273);
    document.getElementById('desc').textContent = data.weather[0]['description'];

    let tempresult = data.main.temp - 273;

    if(tempresult < 0){
        document.getElementById('sovet').textContent = "Холодно трындец, одень чёрт возьму шапку";
    }
    else if(tempresult < 15){
      document.getElementById('sovet').textContent = "Советую одеть кофту";
  }
  else if(tempresult < 10){
    document.getElementById('sovet').textContent = "Советую одеть куртку";
}
else if(tempresult < 5){
  document.getElementById('sovet').textContent = "Советую одеться по теплее";
}
else if (tempresult < 20){
  document.getElementById('sovet').textContent = "Можно одеться на легке и взять с собой веер";
}
else{
  document.getElementById('sovet').textContent = "Можно попить кружку чая дома";
}  
  });