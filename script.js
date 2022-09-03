let fields = []; //8x8 10b css:94px
const width = 8;
const height = 8;
const nBombs_easy = 10;

function selectField(x, y) {
    getFiled(x, y).revealed = true;
    render();
};

function getFiled(x, y) {
    return fields.find(obj => obj.x == x && obj.y == y)
}

function setBombs() {
    let x, y;
    let counter = 0;
    while (counter < nBombs_easy) {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        let field = getFiled(x, y);
        if (!field.hasBomb) {
            field.hasBomb = true;
            counter++;
        }
    }
}

function render() {
    // playField = document.getElementById('play_field');
    let strId = ``;
    fields.forEach(obj => {
        if (obj.revealed) {
            strId = `box_${obj.x}${obj.y}`;
            document.getElementById(strId).classList.add('revealed');
        }
    });
}

function initializeFieldData() {
    for (let w = 0; w < width; w++)
        for (let h = 0; h < height; h++)
            fields.push({ x: w, y: h, number: 0, hasBomb: false, revealed: false });
}

function buildBoxes() {
    let str = ``;
    let zelle = ``;
    let zeile = ``;
    let innerHTML = ``;
    for (let w = 0; w < width; w++) {
        zeile = `<div>`;
        for (let h = 0; h < height; h++) {
            str = `<div id="box_${w}${h}" class="box" onclick="selectField(${w}, ${h})"></div>`;
            zeile += str;
        };
        zeile += `</div>`;
        innerHTML += zeile;
    }
    document.getElementById('playField').innerHTML = innerHTML;
}

function init() {
    strDisplay = '';
    alleFelder = '';
    fields_data = '';

    initializeFieldData();
    buildBoxes();
    setBombs();
    render();
}