window.onload = function() {
  //hieronder worden de body gevalideerd
  var body = document.getElementsByClassName('body');
  var zon = document.getElementById('zon');
  var maan = document.getElementById('maan');
  var astro = document.getElementById('astronaut');

  //hieronder worden alle verschillende soort tijden gemaakt
  function ochtendTijd(){
    document.body.style.backgroundColor = "#F57C01";
    document.getElementById('zon').style.visibility = "visible";
    document.getElementById('maan').style.visibility = "hidden";
    document.getElementById('astronaut').style.visibility = "visible";
  }

  function dagTijd(){
    document.body.style.backgroundColor = "#e75a5a";
    document.getElementById('titel').style.color = "#ffffff";
    document.getElementById('actueleTijd').style.color = "#ffffff";
    document.getElementById('astronaut').style.visibility = "visible";
  }

  function nachtTijd(){
    document.body.style.backgroundColor = "	#121b2e";
    document.getElementById('titel').style.color = "#ffffff";
    document.getElementById('actueleTijd').style.color = "#ffffff";
    document.getElementById('maan').style.visibility = "visible";
    document.getElementById('zon').style.visibility = "hidden";
    document.getElementById('astronaut').style.visibility = "visible";
  }

  function showTime() {
    (datetime = new Date()),
      (uur = datetime.getHours()),
      (minuten = datetime.getMinutes()),
      (seconde = datetime.getSeconds());

    //hier worden de 3 verschillende modus berkend
    if(uur >= 6 && uur <=12){
      ochtendTijd();
    }if(uur >= 13 && uur <= 18){
      dagTijd();
    }if(uur >= 19 && uur >= 5){
      nachtTijd();
    }

    //hier wordt de digitale klok weergeven
      document.getElementById("actueleTijd").innerHTML = uur + " : " + minuten + " : " + seconde;
  }

  showTime();

  //hier update hij de functie na elke seconde
  setInterval(function() {
    showTime();
  }, 1000);
};
