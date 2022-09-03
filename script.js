let fields = []; //8x8 10b css:94px
const width = 10;
const height = 10;
const nBombs_easy = 10;
// const nBombs_easy = 10;

function setBombs() {

}

function rendern() {
    playField = document.getElementById('play_field');
    playField.innerHTML = ``;
    playField.innerHTML = `

    `;
}

function initializeFieldData() {
    for (let w = 0; w < width; w++)
        for (let h = 0; h < height; h++)
            fields.push({ x: w, y: h, number: 0, hasBomb: false });
}

function buildBoxes() {
    let str = ``;
    let zelle = ``;
    let zeile = ``;
    let innerHTML = ``;
    for (let w = 0; w < width; w++) {
        zeile = `<div>`;
        for (let h = 0; h < height; h++) {
            str = `<div class="box" onclick="selectField(${h}, ${w})"></div>`;
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
}