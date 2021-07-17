count = 0;

// function checkInp(tabName) {
//   if () {}
// }

/* Функция открытия окна ввода данных*/
function openTab(tabName) {
  var elem
  elem = document.getElementById(tabName);
  elem.style.display = "block";
  generateMatrix();
  getVect();
  getTh();
  getMem();
  getDisc();
  getInit();
  count += 1;
}
/* Функция генерации матрицы влияния*/
function generateMatrix() {
  var cell = document.getElementById("cellCount").value;
  var tbl = document.createElement("table");
  tbl.insertRow(-1);
  for (var j = 0; j <= cell; j++)
    tbl.tBodies[0].rows[0].insertCell(-1).innerHTML = j || " ";
    tbl.tBodies[0].rows[0].id =  "rowName";
  for (var i = 1; i <= cell; i++) {
    tbl.insertRow(-1).insertCell(-1).innerHTML = i;
    for (var j = 1; j <= cell; j++) {
      var input = document.createElement("input");
      input.id = input.name = "m_" + i + "_" + j;
      input.size = "5";
      input.required = true;
      tbl.tBodies[0].rows[i].insertCell(-1).appendChild(input);
    }
  }
  document.getElementById("matrix").appendChild(tbl);
}
/* Функция создания полей ввода стохастического вектора*/
function getVect() {
  var cell = document.getElementById("cellCount").value;
  var fiel = document.createElement("table");
  fiel.insertRow(-1);
  for (var j = 0; j <= 2; j++)
  if (j == 0) {
    fiel.tBodies[0].rows[0].insertCell(-1).innerHTML =  " ";
  }
  else {
    fiel.tBodies[0].rows[0].insertCell(-1).innerHTML =  "c" +  j;
    fiel.tBodies[0].rows[0].id =  "rowName";
  }
  for (var i = 1; i <= cell; i++) {
    fiel.insertRow(-1).insertCell(-1).innerHTML; // =i
    for (var j = 1; j <= 2; j++) {
      var input = document.createElement("input");
      input.id = input.name = "st_" + i + "_" + j;
      input.size = "5";
      input.required = true;
      fiel.tBodies[0].rows[i].insertCell(-1).appendChild(input);
    }
  }
  document.getElementById("stochastic").appendChild(fiel);
}

/*Функция создания полей ввода порога активации */
function getTh() {
  var cell = document.getElementById("cellCount").value;
  var box = document.createElement("div");
  box.id = "th-div"
  for (var i = 0; i < cell; i++) {
    var fiel = document.createElement("input");
    fiel.name = "th_" + i;
    fiel.required = true; 
    box.appendChild(fiel);
     
  }
  box.className = "input-field"
  document.getElementById("th").appendChild(box); 
  
}

/*Функция создания полей ввода памяти */
function getMem() {
  var cell = document.getElementById("cellCount").value;
  var box = document.createElement("div");
  box.id = "mem-div"
  for (var i = 0; i < cell; i++) {
    var fiel = document.createElement("input");
    fiel.name = "mem_" + i;
    fiel.required = true; 
    box.appendChild(fiel);  
  }
  box.className = "input-field"
  document.getElementById("memory").appendChild(box); 
}

/*Функция создания полей ввода коэффициента дисконтирования */
function getDisc() {
  var cell = document.getElementById("cellCount").value;
  var box = document.createElement("div");
  box.id = "disc-div"
  for (var i = 0; i < cell; i++) {
    var fiel = document.createElement("input");
    fiel.name = "disc_" + i;
    fiel.required = true; 
    box.appendChild(fiel);  
  }
  box.className = "input-field"
  document.getElementById("disc").appendChild(box); 
}

/*Функция создания полей ввода начального состояния */
function getInit() {
  var cell = document.getElementById("cellCount").value;
  var box = document.createElement("div");
  box.id = "init-div"
  for (var i = 0; i < cell; i++) {
    var fiel = document.createElement("input");
    fiel.name = "init_" + i;
    fiel.required = true; 
    box.appendChild(fiel);  
  }
  box.className = "input-field"
  document.getElementById("initial").appendChild(box); 

}

// Функция валидации полей
function validateForm(input)
{
  var value = input.value;
  console.log(value);
  var rep = /[-\.;":'a-zA-Zа-яА-Я]/;
  if (rep.test(value)) {
    value = value.replace(rep, "");
    input.value = value;
  }
  console.log("dddd");
  console.log(value);
}

//
function showGraph() {
  if (count == 1) {
    document.getElementById("output").style.display = "flex";
  }
}


function downloadData() {
  var doc = new jsPDF();
  var imgData = document.getElementsByTagName('img');
  var PNGtoUrl = imgData[0].src;
  doc.text(20, 20, "Network behavior");
  doc.addImage(PNGtoUrl, 'png', 20, 30, 160, 150);
  doc.save('protocol.pdf');
}


