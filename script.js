function changeLocation(dx, dy) {
  console.log(`dx=${dx} dy=${dy}`);
  const elem = document.getElementById('gloves');
  console.log(elem);
  console.log(elem.style);
  console.log(elem.style.top);
  elem.style.top = elem.style.top += dy;
}

function setLocation(idName, top, left) {
  const elem = document.getElementById(name);
  console.log(elem);
  if (elem && elem != null) {
    elem.style.top = top;
    elem.style.left = left;
    console.log(elem);
    console.log(elem.style);
  }
}

function initApplication() {
  setLocation("gloves", 10, 10);  
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    initApplication();
  }
}
