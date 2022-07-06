const userName = 'UMAIR JIBRAN';
const date = new Date();
const number = Math.random();
const color = 'CYAN';

const showName = () => {
  console.log(userName);
};
const showDate = () => {
  console.log(date);
};
const showLocation = () => {
  console.log(location);
};
const showNumber = () => {
  console.log(number);
};
const showColor = () => {
  console.log(color);
};
const showAll = () => {
  console.log(userName);
  console.log(date);
  console.log(location);
  console.log(number);
  console.log(color);
};

document.getElementById('showName').addEventListener('click', showName);
document.getElementById('showDate').addEventListener('click', showDate);
document.getElementById('showLocation').addEventListener('click', showLocation);
document.getElementById('showNumber').addEventListener('click', showNumber);
document.getElementById('showColor').addEventListener('click', showColor);
document.getElementById('showAll').addEventListener('click', showAll);

let a = 'asdg';
a = 42;
a = ['asd'];
