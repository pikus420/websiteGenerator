const BASIC_TAGS = ["p", "div", "span", "article", "nav", "aside", "main", "footer", "h1"];
const GOOFY_TAGS = ["marquee", "progress", "fieldset", "hr"]
const LISTS = ["ol", "ul", "dl"];''
const LIST_STYLE_TYPES = ["circle", "square", "disc", "\"👍\"", "\"✅\"", "decimal", "upper-roman"];
const FONTS = ["Lato", "Courier New", "Franklin Gothic Medium", "Comic Sans", "Impact"];
const IMAGES = ["pikus1.png", "pikus2.png", "czteroreki.png", "rico.png", "among_greg.png", "greg_gryf.png", "kondom.png", "piofart.png", "chomikuj.png", "doogal.png", "bidoof.png", "bomxin.png", "arrow.png", "question.png", "pabloface.png", "ben_dez.png", "troll.webp", "nerd.png", "laugh.png", "thumbsup.png"]
const LINKS = ["https://www.youtube.com/channel/UCJLcP1CSxrs_wXhk-_Y0v7Q", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://kwejk.pl/", "https://www.jeja.pl/", "https://bindingofisaacrebirth.fandom.com/wiki/Number_Magnet", "https://www.interia.pl/", "https://www.facebook.com/", "https://www.youtube.com/watch?v=YdfNuwMhMg4", "https://www.youtube.com/watch?v=Nrk8sqZfsgI", "https://www.youtube.com/watch?v=LCy0eDjNvzk", "https://www.youtube.com/watch?v=Kek11FJqi6A"];
const INPUTS = ["text", "number", "submit", "reset", "button", "checkbox", "color", "date", "email", "password", "radio"];
const BORDERS = ["solid", "dashed", "dotted", "double"];


function generateRandom(){
    const roll = Math.random();
    
    if(roll < 0.15){
        generateList();
        return 0;
    }
    if(roll < 0.3){
        generateTable();
        return 0;
    }
    if(roll < 0.35){
        generateImage();
        return 0;
    }
    if(roll < 0.4){
        generateGoofyTag();
        return 0;
    }
    if(roll < 0.45){
        generateLink();
        return 0;
    }
    if(roll < 0.5){
        generateInput();
        return 0;
    }
    generateBasicTag();
}


function generateBasicTag(){
    let e = document.createElement(BASIC_TAGS[Math.floor(Math.random() * BASIC_TAGS.length)]);
    e.style.display = "block";
    e.style.fontFamily = generateStyle("font");
    e.style.width = generateStyle("width");
    e.style.height = generateStyle("height");
    e.style.fontSize = generateStyle("size");
    e.style.color = generateStyle("color");
    e.style.backgroundColor = generateStyle("color");
    e.innerText = generateContent();
    e.classList += addAnimation(0.5);
    document.body.appendChild(e);
}

function generateGoofyTag(){
    let e = document.createElement(GOOFY_TAGS[Math.floor(Math.random() * GOOFY_TAGS.length)]);
    e.innerText = generateContent();
    document.body.appendChild(e);
}

function generateList(){
    let list = document.createElement(LISTS[Math.floor(Math.random() * LISTS.length)]);
    list.style.display = "block";
    list.style.fontFamily = generateStyle("font");
    list.style.width = generateStyle("width");
    list.style.height = generateStyle("height");
    list.style.fontSize = generateStyle("size");
    list.style.color = generateStyle("color");
    list.style.backgroundColor = generateStyle("color");
    list.style.listStyleType = generateStyle("list");
    let length = Math.floor(Math.random() * 20) + 1;
    for(let i = 0; i < length; i++){
        let item = document.createElement("li");
        item.innerText = generateContent();
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

function generateTable(){
    let tab = document.createElement("table");
    let rows = (Math.random() * 12) + 1;
    let cols = (Math.random() * 8) + 1;
    let head_row = document.createElement("tr");
    for(let i = -1; i < cols; i++){
        let head_cell = document.createElement("th");
        head_cell.innerText = randomSpanishWord();
        head_row.appendChild(head_cell);
    }
    tab.appendChild(head_row);
    for(let i = 0; i < rows; i++){
        let row = document.createElement("tr");
        let head_cell = document.createElement("th");
        head_cell.innerText = randomSpanishWord();
        row.appendChild(head_cell);
        for(let i = 0; i < cols; i++){
            let col = document.createElement("td");
            col.innerText = randomSpanishWord();
            row.appendChild(col);
        }
        tab.appendChild(row)
        tab.style.fontFamily = generateStyle("font");
        tab.style.width = generateStyle("width");
        tab.style.height = generateStyle("height");
        tab.style.fontSize = generateStyle("size");
        tab.style.color = generateStyle("color");
        tab.style.backgroundColor = generateStyle("color");
    }
    document.body.appendChild(tab);
}

function generateImage(){
    let image = document.createElement("img");
    image.src = "img/" + IMAGES[Math.floor(Math.random() * IMAGES.length)];
    image.alt = randomSpanishWord();
    image.width = generateStyle("width");
    image.height = generateStyle("width");
    image.classList += addAnimation(0.5);
    document.body.appendChild(image);
}

function generateLink(){
    let link = document.createElement("a");
    link.innerText = generateContent();
    link.href = LINKS[Math.floor(Math.random() * LINKS.length)];
    link.style.display = "block";
    link.style.fontFamily = generateStyle("font");
    link.style.width = generateStyle("width");
    link.style.height = generateStyle("height");
    link.style.fontSize = generateStyle("size");
    link.style.color = generateStyle("color");
    link.style.backgroundColor = generateStyle("color");
    document.body.appendChild(link);
}

function generateInput(){
    let input = document.createElement("input");
    input.type = INPUTS[Math.floor(Math.random() * INPUTS.length)];
    input.placeholder = generateContent();
    input.value = generateContent();
    input.style.fontFamily = generateStyle("font");
    input.style.width = generateStyle("width");
    input.style.height = generateStyle("height");
    input.style.fontSize = generateStyle("size");
    input.style.color = generateStyle("color");
    input.style.backgroundColor = generateStyle("color");
    input.style.border = generateStyle("border");

    document.body.appendChild(input);
}

function generateContent(){
    let length = Math.floor(Math.random() * 10) + 1;
    let content = "";
    for(let i = 0; i < length; i++){
        content += randomSpanishWord() + " ";
    }
    return content;
}

function randomSpanishWord(){
    return WORDS[Math.floor(Math.random() * WORDS_LENGTH)];
}

function generateStyle(name){
    switch(name){
        case "font":
            return FONTS[Math.floor(Math.random() * FONTS.length)];
        case "width":
            return Math.floor((Math.random() * 1000) + 1);
        case "height":
            return Math.floor((Math.random() * 500) + 1);
        case "size":
            return Math.floor((Math.random() * 100) + 18);
        case "color":
            let color = Math.floor((Math.random() * 16777215));
            color = color.toString(16);
            while(color.length < 6){
                color += "0";
            }
            return "#" + color;
        case "list":
            return LIST_STYLE_TYPES[Math.floor(Math.random() * LIST_STYLE_TYPES.length)];
        case "border":
            let bcolor = Math.floor((Math.random() * 16777215));
            let bsize = Math.floor((Math.random() * 8) + 1);
            let btype = BORDERS[Math.floor(Math.random() * BORDERS.length)];
            return "#" + bcolor + " " + bsize + "px " + btype;
        default:
            return 0;
    }
}

function addAnimation(chance){
    if(Math.random() >= chance){
        return "animation" + (Math.floor(Math.random() * 9) + 1);
    }
    else{
        return "bruh";
    }
}

document.body.style.backgroundColor = generateStyle("color");

for(let i = 0; i < 50; i++)
    generateRandom();
