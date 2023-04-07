var num;

function getNumber(){
  num=Number(document.getElementById('h1-tag').innerHTML);
}
function getval(){
  vall=Number(document.getElementById('num').value);
}

function inc_by_1(){
  getNumber();
  num=num+Number(1);
  document.getElementById('h1-tag').innerHTML=num;
}
function inc_by_5(){
  getNumber();
  num=num+Number(5);
  document.getElementById('h1-tag').innerHTML=num;
}

function dec_by_1(){
  getNumber();
  num=num-Number(1);
  document.getElementById('h1-tag').innerHTML=num;
}
function dec_by_10(){
  getNumber();
  num=num-Number(10);
  document.getElementById('h1-tag').innerHTML=num;
}

function increase(){
  getval();
  getNumber();
  num=num+vall;
  document.getElementById('h1-tag').innerHTML=num;
}
function decrease(){
  getval();
  getNumber();
  num=num-vall;
  document.getElementById('h1-tag').innerHTML=num;
}
