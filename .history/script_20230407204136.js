var num;

function getNumber(){
  num=Number(document.getElementById('h1-tag').innerHTML);
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

