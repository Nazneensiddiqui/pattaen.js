for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(b + " ")
    }
    document.write(" <br>")
}
document.write(" <br>")
//.........................................................................

for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(a + " ")
    }
    document.write(" <br>")
}
document.write(" <br>")
//............................................................................
for(var a=5; a>=1; a--){
    for(var b=1; b<=a; b++){
        document.write(a + " ")
    }
    document.write(" <br>")
}
document.write(" <br>")
//.............................................................................
for(var a=5; a>=1; a--){
    for(var b=a; b>=1; b--){
        document.write(b + " ")
    }
    document.write(" <br>")
}
document.write(" <br>")
//.................................................................................

for (let i = 4; i >= 1; i--) {
       for (let j = 4; j >= 5 - i; j--) {
             
          document .write(i + " "); 
      }
      document .write("<br> "); 
    }
    document.write(" <br>")
//.................................................................................

for (let i = 4; i >= 1; i--) {
    for (let j = 4; j >= 5 - i; j--) {
          
       document .write(j + " "); 
   }
   document .write("<br> "); 
 }
 document.write(" <br>")
//..........................new array.input user ........................................................................

// var ary = new Array();
// for(var g=0; g<4; g++)
//     ary[g] = prompt("enter the value of array")
//  {
//     document.write(ary[g])
// }
// document.write("<ul>")
//  for (let a=0; a<4; a++)
//  {
// document.write("<li>" + ary[a] + "</li>")
//  }
//  document.write("</ul>")
//................................................................................................

//  var ary = new Array();
//  for(var g=0; g<4; g++)
//      ary[g] = prompt("enter the value of array")
//   {
//      document.write(ary[g])
//  }
//    for (let a=0; a<4; a++)
//   {
//  document.write("[" + ary[a] + "]")
//   }

//..............................multidimension array.......................................................................
var arry = [
    ["Hurry", 18 , "Male" , "B.Com"],
    ["Sunny", 19 , "Female" , "B.E"],
    ["Tommy", 20 , "Male" , "B.Ca"],
    ["Gunny", 21 , "Female" , "M.Com"],
    ["Runny", 18 , "Female" , "M.Com"]
];
document.write(arry[0][3] + " <br>")
document.write(arry.length)
document.write("<table border = '1px' cellspaceing = '0'>")
for(var a = 0; a <arry.length; a++){
    document.write("<tr>")
    for( b = 0; b < arry[a].length; b++)
    {
document.write("<td>" + arry[a][b] + "</td> ");
    }
    document.write("</tr>")
}
document.write("</table>" )


//............modify and delet element..............................................................
var arr =  ["Hurry", 18 , "Male" , "B.Com"];
document.write(arr + "<br>");
arr[0] = 'gunny';
document.write(arr + "<br>");
arr[2] = "Female"
document.write(arr + "<br>")
arr[3] = "B.E";
document.write(arr + "<br>");
delete arr[2];
document.write(arr + "<br>")

//,,,,,,,,,,,,,,,,,,,isArray()..........................
var a = ["Harry", 20 , "sunny" , "tommy"];
document.write(a + "<br><br>");
// var b= Array.isArray(a);
// document.write(b + "<br><br>");
if(Array.isArray(a)){
    document.write("this is an Array")
}
else{
    document.write("this is not an Array")
}
document.write(" <br>")
document.write(" <br>")

//.................filter() method.array.................
var ages = [15,20,14,21,22,15,17,16,18,23,24];
document.write(ages + "<br>");
 
var b = ages.filter(checked);
document.write(b + "<br>");

function checked(age){
    return age>=18;
}

//........................forEach()method array.........................
var ar = ["sunny", "ayaz", "hiba","aliyan","laiba"];
ar.forEach(loop);

function loop(value, index)
{
document.write( index + " : " + value +"<br>")
}
document.write(" <br>")

//...........................object...................................

var ob =  {
    fname : "nazneen" ,
    lname : "siddiqui" ,
    age : 25 ,
    email : "nazneen@2123.com",
    arry : ["hello" , 25 , "buy" , "good"],
    living : {
        city : "bhopal",
        country : "india",
    },
    salary : function(){
     return 255000;
    },
    fullname : function(){
        return (this.fname + " " + this.lname)
    }
}

document.write(ob + "<br>");
console.log(ob);
document.write(ob.arry[1] + "<br>" )
document.write(ob.salary() + "<br>")
document.write(ob.fullname() + "<br>");
document.write(ob.living.city);
document.write(" <br>")
document.write(" <br>")
document.write("FOR IN LOOP <br>")
//..........................for in loop..........................
var obj =  {
    fname : "nazneen" ,
    lname : "siddiqui" ,
    age : 25 ,
    email : "nazneen@2123.com",
}

for(var key in obj){
    document.write(key + " :" + obj[key] + "<br>")
}
document.write(" <br>")
document.write("STRING FUNCTION <br>")
//.........................string method........................................str
var str = "Javascript is a Great is Language";
var a = str.length;
document.write( "length = " + a + "<br>");
var b = str.toLowerCase()
document.write(" lowercase=" + b +"<br>");
var c = str.toUpperCase();
document.write(" uppercase=" + c +"<br>");
var d = str.includes("Great") //string me kisi word ko dhudhna he to true false me batayega
document.write(" great word string me he ya nahi=" + d +"<br>");
var e = str.startsWith( "Java");
document.write(" stating word=" + e +"<br>");
var f = str.endsWith("language");
document.write(" end word=" + f +"<br>");
var g = str.search("is");
document.write(" indexing batata he=" + g +"<br>");
var h = str.match(/is/g);  //is or g globle hi dhundhega is ko kaha kaha he ek array me batayega
document.write(" kisi word kitni =" + h +"<br>");
var i = str.indexOf("is");  // position batayega indexing me staing se
document.write(" indexing stating se =" + i +"<br>");
var j = str.lastIndexOf("is");  // position batayega indexing me last se
document.write(" indexing last se =" + j +"<br>");
var k = str.replace("is" , "are")  // kisi word se replace karne he to
var k = str.replace(/is/g , "are")  // kisi word se replace karne he to
document.write(" is ko  are se replase kar deya=" + k +"<br>");
var st = "   javascript   "
var l = st.trim();
alert(l);
var n = str.charCodeAt(2);  // string me indexing ke accouding jo bhi wors he uski AIISA value return karega
document.write(" AIISA value =" + n +"<br>");
var m = string.fromCharCode(110);//keyborad me number ke accodung value batata he
document.write("AIISA KE CHARCTER =" + m +"<br>");































9