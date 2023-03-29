const states = ['calm', 'going', 'driving'];
const actions = ['grasp','kiss','gain','play','shake','feel', 'ring'];
const pronouns = ['your','he\'s','her'];
const objects = ['pop can','cars','locket','towel','bar of soap','card','chalk','house','tube of lip balm','can of chili','martini glass','grid paper','blowdryer','children\'s book','glasses','rolling pin','fish','teddies','spice bottle','pearl necklace','sheep','screw','belt','necktie','sponge','washing machine','game cartridge','extension cord','phone','roll of duct tape','vase','roll of masking tape','wooden spoon','sheet of paper','zebra','blouse','thermometer','toe ring','plush dinosaur','sharpie','wireless control','key','box of chalk','pocketknife','box of tissues','street lights','canvas','pair of dice','carton of ice cream','pair of sunglasses'];

// randomSelection() is returning a random element from the provided array (theArray)
const randomSelection= (theArray) => {
    const arrayLength = theArray.length;
    return theArray[Math.floor(Math.random()*arrayLength)];
}

// stringConstructor() is returning the makeup quote. 
const stringConstructor = () =>{
    return `Keep ${randomSelection(states)} and ${randomSelection(actions)} ${randomSelection(pronouns)} ${randomSelection(objects)}.`;
} 


// console.log(stringConstructor());