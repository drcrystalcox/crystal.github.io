/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/forest.jpg") {
    myImage.setAttribute("src", "images/forest2.jpg");
  } else {
    myImage.setAttribute("src", "images/forest.jpg");
  }
});

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });