let width = 10;
let height = width * 2 - 1;
let halfway = Math.ceil(height / 2);
for (let row = 1; row <= height; row++, width--) {
    if (row <= halfway) {
        let text = "";
        for (let col = 0; col < width; col++) {
            text += "c";
        }
        console.log(text);
    }
    if (row > halfway) {
        let text = "";
        for (let col = 0; col < row - (halfway - 1); col++) {
            text += "c";
        }
        console.log(text);
    }
}
