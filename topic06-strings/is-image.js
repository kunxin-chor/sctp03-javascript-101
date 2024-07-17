const prompt = require('prompt-sync')();

let filename = prompt("Enter filename:");
// `puppies.png` or `wallpower.jpg`, `nomands.png`
// `chicken_rice.png` 

let extension = filename.slice(filename.length-3);
extension = extension.toLowerCase();

// let extension = filename.slice(-3).toLowerCase();
// let extension = "DOG.pNg".slice(-3).toLowerCase()
// =>            = "pNg".toLowerCase()
// =>            = "png"

if (extension == 'jpg' || extension == 'png') {
    console.log("This is an image file");
}

// Sometimes file extensions can be 3 alphabets or 4 alphabets long
// For example: we want to include TIFF