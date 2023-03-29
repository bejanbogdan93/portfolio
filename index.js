// Salute word - START
const saluteTime = document.getElementById('saluteTime');
const currentHour = new Date().getHours();

console.log('Current time: ', currentHour);
if (currentHour < 13 ) {
    saluteTime.innerHTML = 'morning';    
} else if (currentHour > 12 && currentHour < 18) {
    saluteTime.innerHTML = 'afternoon';
} else if (currentHour > 18) {
    console.log('Should be evening');
    saluteTime.innerHTML = 'evening';
}
// Salute word - END

const mixedMessagesTitle = document.getElementById('mixed-massages-title');
const mixedMessagesOutput = document.getElementById('mixed-massages-output');
const mixedMessagesDescription = document.getElementById('mixed-massages-description');

const titleLinks = document.getElementsByClassName('link-title');
const newWindowIcons = document.getElementsByClassName('fa-arrow-up-right-from-square');

let pointerTypeVar = "";

window.addEventListener("pointerdown", (e) => {
    pointerTypeVar = e.pointerType;

    if (pointerTypeVar == 'touch'){
        mixedMessagesDescription.style.display = "block";
        for (const elem of newWindowIcons) {
            elem.style.display = "inline-block";
        }  
       
    
    } else if (pointerTypeVar == 'mouse'){
        mixedMessagesDescription.style.display = "none";
        for (const elem of newWindowIcons) {
            elem.style.display = "none";
        } 
    }
    
});

const showDescription = () => {
    mixedMessagesDescription.style.display= 'block';
}
const hideDescription = () => {
    mixedMessagesDescription.style.display= 'none';
}

const runIt = () => {
    mixedMessagesOutput.innerHTML = stringConstructor();
}

mixedMessagesTitle.addEventListener('mouseover', showDescription);
mixedMessagesTitle.addEventListener('mouseout', hideDescription);
mixedMessagesTitle.addEventListener('click', runIt);

for (const title of titleLinks) {
    title.addEventListener('mouseover', (e) => e.currentTarget.parentNode.querySelector('i[class~="fa-arrow-up-right-from-square"').style.display = 'inline-block');
    title.addEventListener('mouseout', (e) => e.currentTarget.parentNode.querySelector('i[class~="fa-arrow-up-right-from-square"').style.display = 'none');
}
