
let imageC = document.getElementById("image");

function getRandomColor(){
    let letters = '0123456789ABDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function find(id){
    return document.getElementById(id);
}

function changeThings(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    let myPix = ["images/frog.jpg", "images/sheep.jpg", "images/reindeer.jpg", "images/chicken.jpg", "images/bat.jpg",
     "images/cow.jpg", "images/dog.jpg", "images/duck.jpg", "images/bear.jpg", "images/owl.jpg", "images/horse.jpg", "images/cat.jpg", "images/pig.jpg"];
    let randomPic = Math.floor(Math.random() * myPix.length);
    imageC.src = myPix[randomPic];
    switch(randomPic){
        case 0:
            find("frog").play();
            break;
        case 1:
            find("sheep").play();
            break;
        case 2:
            find("reindeer").play();
            break;
        case 3:
            find("chicken").play();
            break;
        case 4:
            find("bat").play();
            break;
        case 5:
            find("cow").play();
            break;
        case 6:
            find("dog").play();
            break;
        case 7:
            find("duck").play();
            break;
        case 8:
            find("bear").play();
            break;
        case 9:
            find("owl").play();
            break;
        case 10:
            find("horse").play();
            break;
        case 11:
            find("cat").play();
            break;
        case 12:
            find("pig").play();
            break;
    }
}