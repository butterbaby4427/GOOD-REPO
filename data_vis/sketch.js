var beansDic = {};
var visualDic = {};
var table;

var lowvis;
var hivis;


var vis_height = 50;
// left of the colon (the zip code) is the called the key
// right of the colon (frequency) is called the value
// together they are called key-value pair

function preload(){
  // the file is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('assets/data.csv', 'csv', 'header');
}

function setup() {
  lowvis = color(126, 107, 143);
  hivis = color(242, 200, 78);
  createCanvas(700,700);
  print(table.getRow(1));

  dropdown = createSelect();
  // positioning within my canvas
  dropdown.position(10,10);
  // the second number (ie the 1) is what is returned for dropdown.value()
  dropdown.option("Visual Self Reports", 0)
  dropdown.option("Jelly Bean Guesses", 1);

  for(var i=0; i<table.getRowCount(); i++){
    // get the zip code of the 311 call
    currVis = int(table.get(i, "Close your eyes and try to imagine a comfortable wooden chair. Try to delineate in your mind whatever intricacies there are in the woodwork, or embellishments in the embroidery. Picture it sitting in a cozy place in the corner of your room. Rate yourself on how clearly the image is able to sit in your mind. You have 30 seconds."));
    currBeans = Math.floor(int(table.get(i, "Try to concentrate but maybe not too hard. How many jelly beans are in the jar?"))/100);
    // is the zip code in the dictionary
    if(currVis in visualDic){
      visualDic[currVis] += 1;
    } else {
      visualDic[currVis] = 1;
    }

    visualDic[2] = 0;
    visualDic[4] = 0;

    beansDic[2] = 0;
    beansDic[5] = 0;
    beansDic[6] = 0;
    beansDic[7] = 0;
    beansDic[8] = 0;
    beansDic[10] = 0;
    beansDic[11] = 0;
    beansDic[12] = 0;
    beansDic[13] = 0;
    beansDic[14] = 0;
    beansDic[15] = 0;
    beansDic[16] = 0;
    beansDic[18] = 0;
    beansDic[19] = 0;



    if(currBeans in beansDic){
      beansDic[currBeans] += 1;
    } else {
      beansDic[currBeans] = 1;
    }
  }
  console.log(beansDic)
}

function draw() {
  if(dropdown.value() == 0){
    textSize(25)
    fill(color(0, 83, 143));
    textAlign(CENTER,CENTER);
    background(214, 238, 255);
    text("How does my audience rate themselves in terms of mental visualisation?",125,0,450,400);
    // pure JavaScript
    for (var [key, value] of Object.entries(visualDic)){
      // approx range of 311 calls per zip code is between 1 and 2000
      noStroke();
      fill(lerpColor(lowvis,hivis,key/7))
      rect(key * 40 + 160, 450 - visualDic[key]*vis_height, 20, visualDic[key]*vis_height);
      text(key,key*40+10+160,475);
    }
  }
  else{
    textSize(25)
    fill(color(0, 83, 143));
    textAlign(CENTER,CENTER);
    background(214, 238, 255);
    text("How well did they really fare?",125,0,450,400);
    // pure JavaScript
    for (var [key, value] of Object.entries(beansDic)){
      // approx range of 311 calls per zip code is between 1 and 2000
      noStroke();
      fill(lerpColor(lowvis,hivis,key/7))
      rect(key * 25 + 60, 450 - beansDic[key]*vis_height, 20, beansDic[key]*vis_height);
      push();
      textSize(12);
      translate(key*25+68,475);
      rotate(PI/2.75);
      text(key+"00",0,0);
      pop();
    }
    push();
    fill(color(218, 62, 82));
    rect(500,275,3,375);
    textSize(12);
    text("Actual number of jellybeans: 1741",500,250);
    pop();
  }
}