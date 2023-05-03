function createLabel(tagname, attrnam,attrval,content){
    var label = document.createElement(tagname);
    label.setAttribute(attrnam, attrval);
    label.innerHTML = content;
    return label;
}

function createInput(tagname,attrnam,attrval,attrnam1,attrval1,attrnam2,attrval2){
    var input = document.createElement(tagname);
    input.setAttribute(attrnam, attrval); //type attribute
    input.setAttribute(attrnam1,attrval1); //id attribute
    input.setAttribute(attrnam2,attrval2); //placeholder attribute
    return input;
}


function sub(tagname,attrnam,attrval,attrnam1,attrval1,attrnam2,attrval2){
    var input = document.createElement(tagname);
    input.setAttribute(attrnam, attrval); // type attribute
    input.setAttribute(attrnam1,attrval1); // value attribute
    input.addEventListener(attrnam2,attrval2); //event listener
    return input;
}

function createGen(tagname,attrnam,attrval,attrnam1,attrval1,attrnam2,attrval2,attrnam3,attrval3,attrnam4,attrval4){
    var inp = document.createElement(tagname);
    inp.setAttribute(attrnam, attrval); // type attribute
    inp.setAttribute(attrnam1,attrval1); // id attribute
    inp.setAttribute(attrnam2,attrval2); // name attribute
    inp.setAttribute(attrnam3,attrval3); // value attribute
    inp.setAttribute(attrnam4,attrval4); // class attribute
    return inp;
}

function createChoice(tagname,attrnam,attrval,attrnam1,attrval1,attrnam2,attrval2,attrnam3,attrval3,attrnam4,attrval4){
    var inp = document.createElement(tagname);
    inp.setAttribute(attrnam, attrval); // type attribute
    inp.setAttribute(attrnam1,attrval1); // id attribute
    inp.setAttribute(attrnam2,attrval2); // name attribute
    inp.setAttribute(attrnam3,attrval3); // value attribute
    // inp.setAttribute(attrnam4,attrval4); // class attribute
    return inp;
}



function createBreak(tagname){
    var brea = document.createElement(tagname);
    return brea;
}

var div = document.createElement('div');
div.setAttribute("class", "form-control");

var form = document.createElement('form');
form.setAttribute("class", "form");


var fnamelabel = createLabel("label","for", "fname", "First-name :");
var break1 = createBreak("br");
var break111 = createBreak("br");


var fnameinput = createInput("input", "type", "text", "id", "fname", "placeholder","First-name" );
var break2 = createBreak("br");
var break3 = createBreak("br");

var lnamelabel = createLabel("label","for", "lname", "Last-name :");
var break4 = createBreak("br");
var break44 = createBreak("br");

var lnameinput = createInput("input", "type", "text", "id", "lname", "placeholder", "Last-name");
var break5 = createBreak("br");
var break6 = createBreak("br");

var addr1 = createLabel("label","for", "addr1", "Address line 1 :");
var break7 = createBreak("br");
var break77 = createBreak("br");

var addr1inp = createInput("input", "type", "text", "id", "addr1", "placeholder", "Address line 1:");
var break8 = createBreak("br");
var break9 = createBreak("br");

var addr2 = createLabel("label","for", "addr2", "Address line 2 :");
var break10 = createBreak("br");
var break100 = createBreak("br");

var addr2inp = createInput("input", "type", "text", "id", "addr2", "placeholder", "Address line 2:");
var break11 = createBreak("br");
var break12 = createBreak("br");

var pinlabel = createLabel("label","for", "p-code", "PIN :")
var break13 = createBreak("br");
var break133 = createBreak("br");

var pinput = createInput("input", "type", "number", "id", "p-code", "placeholder", "PIN :");
var break14 = createBreak("br");
var break15 = createBreak("br");

var genlabel = createLabel("label", "for", "gen", "Gender :");
var break16 = createBreak("br");
var break166 = createBreak("br");


var Mainput = createGen("input", "type", "radio","class","gender", "id", "gen","name", "gender","value","male");
var Malabel = createLabel("label", "for", "gender", "Male");

var Feinput = createGen("input", "type", "radio","class", "gender", "id", "gens","name", "gender","value","fe-male");
var felabel = createLabel("label", "for", "gender", "Fe-male");
var break17 =createBreak("br");
var break18 =createBreak("br");

var choicelabel = createLabel("label", "for", "choice", "Choice of foods : (must choose atleast two items out of five)");
var break19 =createBreak("br");
var break20 =createBreak("br");

var fin = createChoice("input", "type", "checkbox", "id", "food","name", "food1", "value", "South-Indian");
var fl = createLabel("label", "for", "fc", "South-Indian");
var break21 = createBreak("br");

var sec = createChoice("input", "type", "checkbox", "id", "food","name", "food2", "value", "North-Indian");
var sel = createLabel("label", "for", "sc", "North-Indian");
var break22 = createBreak("br");


var thc = createChoice("input", "type", "checkbox", "id", "food","name", "food3", "value", "Chinese");
var thl = createLabel("label", "for", "tc", "Chinese");
var break23 = createBreak("br");

var foc = createChoice("input", "type", "checkbox", "id", "food","name", "food4", "value", "Japanese");
var fol = createLabel("label", "for", "foc", "Japanese");
var break24 = createBreak("br");

var fic = createChoice("input", "type", "checkbox", "id", "food" ,"name", "food5", "value", "Korean");
var fil = createLabel("label", "for", "fic", "Korean");
var break25 = createBreak("br");
var break26 = createBreak("br");

var statelabel  =  createLabel("label", "for", "state", "State :");
var break27 = createBreak("br");
var break277 = createBreak("br");
var stateinp  =  createInput("input", "type", "text", "id", "state", "Placeholder", "State");
var break28 = createBreak("br");
var break288 = createBreak("br");

var countrylabel = createLabel("label", "for", "country", "Country :")
var break29 = createBreak("br")
var break299 = createBreak("br")
var countryinput = createInput("input", "type",  "text", "id", "country", "Placeholder", "Country")
var break30 = createBreak("br");
var break300 = createBreak("br");
var break3000 = createBreak("br");

var submit =  sub("input", "type", "button", "value", "submit", "click", foo)
var break31 = createBreak("br");

form.append(fnamelabel,break1,fnameinput,break2,break3,lnamelabel,break4,lnameinput,break5,break6,addr1,break7,addr1inp,break8,break9,addr2,break10,addr2inp,break11,break12,pinlabel,break13,pinput,break14,break15,genlabel,break16,Mainput,Malabel,Feinput,felabel,break17,break18,choicelabel,break19,break20,fin,fl,break21,sec,sel,break22,thc,thl,break23,foc,fol,break24,fic,fil,break25,break26,statelabel,break27,stateinp,break28,countrylabel,break29,countryinput,break30,break300,submit,break31);
div.appendChild(form)
document.body.appendChild(div)

function createTable(tagname,attrnam,attrval){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrnam,attrval);
    return ele;
}

function thead(tagname,attrnam,attrval){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrnam,attrval);
    return ele;
}

function trow(tagname){
    var ele = document.createElement(tagname);
    return ele;
}

function th(tagname,content){
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}


function tbody(tagname){
    var ele = document.createElement(tagname);
    return ele;
}

function tdata(tagname,attrnam,attrval,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrnam,attrval);
    ele.innerHTML = content;
    return ele;
}


var tdiv = document.createElement("div");
tdiv.setAttribute("class","table-control")

var tab = createTable("table", "class", "table");
var thead = thead("thead", "class", "thead");
var trow1 = trow("tr");


var th1 = th("th","First Name");
var th2 = th("th","Last Name");
var th3 = th("th","Address");
var th4 = th("th", "Pincode");
var th5 = th("th", "Gender");
var th6 = th("th", "Food");
var th7 = th("th", "State");
var th8 = th("th", "Country");

var tbody = tbody("tbody");
// var trow2 = trow("tr");





trow1.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(trow1);


tab.append(thead,tbody);
tdiv.append(tab);
document.body.append(tdiv)




function foo(){

    var fname = document.getElementById("fname").value;
    var td1 =  tdata("td");
    td1.innerHTML = fname;
    fname = document.getElementById("fname").value = ""

    var lname = document.getElementById("lname").value;
    var td2 = tdata("td")
    td2.innerHTML = lname;
    lname = document.getElementById("lname").value = "";

    var add1 = document.getElementById("addr1").value;
    var add2 = document.getElementById("addr2").value;

    var td3 = tdata("td3")
    td3.innerHTML = add1+add2;

    add1 = document.getElementById("addr1").value = "";
    add2 = document.getElementById("addr2").value = "";

    var pin = document.getElementById("p-code").value;
    var td4 =  tdata("td")
    td4.innerHTML = pin;
    pin = document.getElementById("p-code").value = "";
    
    // var gend = document.getElementById("gen").value;
    // var gend1 = document.getElementById("gens").value;
    var td5 =  tdata("td");
    var gend = document.getElementsByName("gender");
    // console.log(gend)

    for(var i of gend){
        if(i.checked){
            td5.innerHTML = i.value
    }
    // console.log(i.value)
}
// gend = document.getElementsByName("gender") = " ";
    
    var food = document.querySelectorAll("#food");
    var td6 = tdata("td");
    var ch=[];
    for(var i of food){

        if(i.checked){

            ch.push(i.value);
            // console.log(ch)
            if(ch.length<=2){

                    td6.innerHTML = ch

            }else if(ch.length == 0){

                alert("Please select food")
            }
            else{

                alert("Choose two food only")
                td6.innerHTML = " "
            }
        }
    }
    // food = document.querySelectorAll("#food")=""

    var stat = document.getElementById("state").value;
    var td7 =  tdata("td")
    td7.innerHTML = stat;
    stat = document.getElementById("state").value = "";


    var count = document.getElementById("country").value;
    var td8 =  tdata("td")
    td8.innerHTML = count;
    count = document.getElementById("country").value = "";

    var trow2 = trow("tr")

    trow2.append(td1,td2,td3,td4,td5,td6,td7,td8)
    tbody.append(trow2)

    console.log(td1.innerHTML)
    console.log(td2.innerHTML)
    console.log(td3.innerHTML)
    console.log(td4.innerHTML)
    console.log(td5.innerHTML)
    console.log(td6.innerHTML)
    console.log(td7.innerHTML)
    console.log(td8.innerHTML)
    
}
