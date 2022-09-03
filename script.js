let fields = []; //8x8 10b css:94px
const width = 8;
const height = 8;
const nBombs_easy = 10;

function setBombCounter(x, y) {
    let field = getField(x, y);
    if (field && !field.hasBomb)
        field.number++;
}

function setCounters() {
    let myObj;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < width; y++) {
            myObj = getField(x, y);
            if (myObj.hasBomb) {
                setBombCounter(x - 1, y - 1);
                setBombCounter(x, y - 1);
                setBombCounter(x + 1, y - 1);

                setBombCounter(x - 1, y);
                setBombCounter(x, y);
                setBombCounter(x + 1, y);

                setBombCounter(x - 1, y + 1);
                setBombCounter(x, y + 1);
                setBombCounter(x + 1, y + 1);
            }
        }
    }
};

// Alle Felder mit number=0 aufdecken
function uncoverField() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < width; y++) {

        }
    }
}

function selectField(x, y) {
    let field = getField(x, y);
    // getField(x, y).revealed = true;

    if (field && (field.hasBomb || field.number > 0))
        field.revealed = true
    else if (field && field.number == 0 && !field.revealed) {
        field.revealed = true;
        selectField(x - 1, y - 1);
        selectField(x, y - 1);
        selectField(x + 1, y - 1);
        selectField(x - 1, y);
        selectField(x + 1, y);
        selectField(x - 1, y + 1);
        selectField(x, y + 1);
        selectField(x + 1, y + 1);
    };
    render();
};

function getField(x, y) {
    return fields.find(obj => obj.x == x && obj.y == y);
}

function setBombs() {
    let x, y;
    let counter = 0;
    while (counter < nBombs_easy) {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        let field = getField(x, y);
        if (!field.hasBomb) {
            field.hasBomb = true;
            counter++;
        }
    }
    setCounters();
}

function render() {
    // playField = document.getElementById('play_field');
    let strId = ``;
    fields.forEach(obj => {
        strId = `box_${obj.x}${obj.y}`;
        if (obj.revealed) {
            document.getElementById(strId).classList.add('revealed');
        }
        if (obj.hasBomb && obj.revealed) {
            document.getElementById(strId).innerHTML = `<img src="images/buttons/bomb.png">`;
        }
        if (obj.revealed && (obj.number > 0)) {
            document.getElementById(strId).innerHTML = `<img src="images/buttons/${obj.number}.png">`;
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
    countDown();
}