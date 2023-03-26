const contactHidden = document.getElementsByClassName('showup');
const contactShowTarget = document.querySelector("a[href^='tel:']");

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