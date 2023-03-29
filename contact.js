let pointerTypeVar = "";
const contactHidden = document.getElementById('showup').getElementsByTagName('i');
const contactShowTarget = document.querySelector("a[href^='tel:']");


window.addEventListener("pointerdown", (e) => {
    pointerTypeVar = e.pointerType;

    if (pointerTypeVar == 'touch'){
        showUp();
    } else if (pointerTypeVar == 'mouse'){
       
            hideIt();
        
    }
    
});

const showUp = () => {
    for (const elem of contactHidden) {
        elem.style.cssText = `
        visibility: visible;
        opacity: 1;
    `;
    }
}
const hideIt = () => {
    for (const elem of contactHidden) {
        elem.style.cssText = `
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 2.8s, opacity 3s linear;
        `;
    }
}

contactShowTarget.addEventListener('mouseover', showUp);
contactShowTarget.addEventListener('mouseout', hideIt);




