const Body = document.getElementsByTagName("body");
document.body.style.background = "linear-gradient(to right, #D5C7BC 50%, #785964 50%)";
let count = 1;
let con1 = document.createElement("div");
con1.setAttribute("id", "Con");
let Describe = document.createElement("h3");
Describe.innerText = "TODO LIST!!!";
con1.appendChild(Describe);
let Describe1 = document.createElement("p");
Describe1.innerText = "enter your goals ,less than 20 character.";
con1.appendChild(Describe1);
con1.style.backgroundColor = "beige";
document.body.appendChild(con1);
let con2 = document.createElement("div");
con2.setAttribute("id", "Main");
con1.appendChild(con2);


const Main = document.getElementById("Main");
const con = document.getElementById("Con");
const instraction = document.getElementById("instraction");


let NewUl = document.createElement("ul");
let node1 = document.createElement("Button");
let TestBox = document.createElement("INPUT");
TestBox.setAttribute("id", "text");

TestBox.setAttribute("type", "text");


con.classList.add("FlexBOX1");
Main.classList.add("FlexBOX");
Main.style.background = "white";
Main.appendChild(NewUl);
Main.appendChild(TestBox);

/* let div = document.createElement("div");
TestBox.setAttribute("id", "commands");
Main.appendChild(div); */





node1.addEventListener("click", () => {
    Ul = document.getElementsByTagName("ul")[0];
    let Li = document.createElement("li");
    Li.classList.add("remove" + count);
    let Button = document.createElement("Button");
    let Text = document.getElementById("text");
    Text.setAttribute("min", "1");
    Text.setAttribute("max", "20");


    Button.innerText = "Delete";
    Button.classList.add("remove" + count);
    Button.addEventListener("click", () => {
        let closest = document.getElementsByClassName(Button.classList.item(0))[0];
        console.log(Button.classList.item(0));
        closest.remove();
        Button.remove();
    })

    count++;
    console.log(Text.value);
    Li.innerText = Text.value;
    Ul.appendChild(Li);
    Ul.appendChild(Button);

    Text.value = "";
})
node1.innerText = "add";
Main.appendChild(node1)