const newElement = document.createElement('p');
const text = "I'm a programming student interested in software development. I'm learning HTML, CSS, and JavaScript, however I'm currently most familiar with C++. I live in Longmont, CO and am attending school full-time. My hobbies include visual art and crochet. Connect with me via Github or Email!";
const newElementLocation = document.getElementsByClassName('flex-right')[0];
newElementLocation.appendChild(newElement);
newElement.textContent = text;