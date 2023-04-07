var num;

function getNumber(){
  num=Number(document.getElementById('h1-tag').innerHTML);
}

function inc_by_1(){
  getNumber();
  num=num+Number(1);
  document.getElementById('h1-tag').innerHTML=num;
}

function dec_by_1(){
  getNumber();
  num=num-Number(1);
  document.getElementById('h1-tag').innerHTML=num
}
