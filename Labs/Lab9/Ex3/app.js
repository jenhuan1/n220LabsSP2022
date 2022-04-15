//Jennifer Huang
//4/13/2022
//n220

//define IDs as variable
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
  ];
  
  //loop that takes the objects + makes styles for new divs on page
  for (let i = 0; i < objects.length; i++) {
    let newElement = document.createElement("div");
    newElement.style.backgroundColor = objects[i].color;
    newElement.style.height = objects[i].height + "px";
    newElement.style.width = objects[i].width + "px";
    dvDisplay.appendChild(newElement);
}