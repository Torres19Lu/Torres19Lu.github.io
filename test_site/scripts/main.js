// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Welcome to Torres Lu Haodong\'s profile!';

let myVariable;
myVariable = "Hello World!";
console.log(myVariable);

/*function multiply(num1, num2) {
    return num1 * num2;
}

let myNumber = multiply(5, 10);
console.log(myNumber);*/

/*document.querySelector("html").addEventListener("click", function() {
        alert("Hi Lu Haodong!");
    });*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/xmum.png") {
    myImage.setAttribute("src", "images/luhaodong.jpg");
  } else {
    myImage.setAttribute("src", "images/xmum.png");
  }
};
 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Torres Lu Haodong's profile, " + myName;
  }
}myButton.onclick = () => {
  setUserName();
}
// 1. 尝试从 localStorage 获取已存储的名字
const storedName = localStorage.getItem("name");

if (!storedName) {
  // 2. 如果 localStorage 中没有名字 (比如首次访问)
  //    就调用 setUserName() 来提示用户输入，并设置欢迎语
  setUserName();
} else {
  // 3. 如果 localStorage 中已经有名字
  //    直接用这个名字设置欢迎语
  myHeading.textContent = "Welcome to Torres Lu Haodong's profile, " + storedName;
}