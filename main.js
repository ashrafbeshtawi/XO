var check=[]
var einzel1=[0,0,0,0,0,0]
var einzel2=[0,0,0,0,0,0]
var line1=[]
var line2=[]
var line3 =[]
var line4=[]
var line5=[]
var line6=[]
var turn = 1


function main(cellNum,sec){
if(checked(cellNum)){
    alert("This cell is chosen")

}else{
    adder(cellNum,sec)
  
}
}

function checked(cellNum){
return check.includes(cellNum)
}

function adder(cellNum,sec){
    check.push(cellNum)
    if(turn===1){
 document.getElementById(cellNum).innerHTML="  x  "    
 document.getElementById(cellNum).className="td"    
einzel(cellNum,einzel1,sec,line1,line2,line3)
win(einzel1,"first player",line1,line2,line3)
turn=2
    }else if(turn===2){
document.getElementById(cellNum).innerHTML="  o  "  
document.getElementById(cellNum).className="td" 

einzel(cellNum,einzel2,sec,line4,line5,line6)
win(einzel2,"second player",line4,line5,line6)
turn=1
    }
}

function first(cellNum){
 return cellNum.substring(0,1)
}

function second(cellNum){
 return cellNum.substring(1,2)
}

function einzel(cellNum,arr,sec,a,b,c){
    switch(first(cellNum)){
        case "1":
        arr[0]+=1
        a.push(sec)
        break;
        case "2":
        arr[1]+=1
        b.push(sec)
        break;
        case "3":
        arr[2]+=1
        c.push(sec)
        break;
    }
    switch(second(cellNum)){
    case "1":
        arr[3]+=1
        break;
        case "2":
        arr[4]+=1
        break;
        case "3":
        arr[5]+=1
        break;

    }
console.log(arr)
}

function win(arr,player,a,b,c){
 var rightAlg=false
 var three = howMany(3,arr)
 var one = howMany(1,arr)
 var two=howMany(2,arr)
 var zero=howMany(0,arr)

 

 if (three===1){
       document.getElementById("result").innerHTML=player+" wins!"
       Jquery("#result")

 }   
if(one===6){
     document.getElementById("result").innerHTML=player+" wins!"
     Jquery("#result")
}
 if(two>=3){
     document.getElementById("result").innerHTML=player+" wins!"
     Jquery("#result")
 }
if(two===2 && theBigTwo(arr,a,b,c)===true ){
     document.getElementById("result").innerHTML=player+"win!"
     Jquery("#result")
}
}


function howMany(number,arra){
var resul=0
 for(var i=0;i<arra.length;i++){
 if (arra[i]===number){
 resul++
}
}
return resul;
}



function theBigTwo(arr,a,b,c){
    switch(arr.indexOf(2)){
    case 0:
    if(arr[a[0]+2]===2 && a[0]+a[1]!==4 && a[0]===b[0]||arr[a[1]+2]===2 && a[0]+a[1]!==4 && a[1]===b[1]){
        return true
    }
    break;

    case 2:
    if(arr[c[0]+2]===2 && c[0]+c[1]!==4 &&c[0]===b[0]||arr[c[1]+2]===2 && c[0]+c[1]!==4 &&c[1]===b[1]){
        return true
    }
    break;

    case 1:
    if(arr[b[0]+2]===2 && b[0]+b[1]!==4||arr[b[1]+2]===2 && b[0]+b[1]!==4){
        return true
        
    }
    break;  
    default:
    return false;   
    }
}
function Jquery(stuff){
 $(document).ready(function(){
$(stuff).hide("slow");
 $(stuff).fadeIn(3000);
 $(stuff).hide("slow");
  $(stuff).fadeIn(3000);
 $('#again').fadeIn(1500) 
 })   
   
}

var again=function(){    
for(i=1;i<=3;i++){
  for(j=1;j<=3;j++){
k=""+i
l=j+""
m=k+l
console.log(m)    
 document.getElementById(m).innerHTML="....."  
 document.getElementById(m).className="before"   
  }
}
 check=[]
 einzel1=[0,0,0,0,0,0]
 einzel2=[0,0,0,0,0,0]
 line1=[]
 line2=[]
 line3 =[]
 line4=[]
 line5=[]
 line6=[]
 turn = 1
  document.getElementById("result").innerHTML=""
  document.getElementById("again").style.display="none"
}
