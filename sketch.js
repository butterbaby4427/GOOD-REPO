//change the colors of the 4 corners below and middle values will automatically be generated. 
//rows and columns can also be changed.
var rows = 10;
var columns = 10;
var width1;
var height1;
color1 = [255,126,165];
color2 = [243,222,138];
color3 = [50,115,142];
color4 = [165,255,214];


bottomline = []; 
topline = [];
var h;



function setup() {
	
	r1Slider = createSlider(0, 255, 111);
	r1Slider.position(520, 20);
	g1Slider = createSlider(0, 255, 44);
	g1Slider.position(520, 40);
	b1Slider = createSlider(0, 255, 129);
	b1Slider.position(520, 60);	
	
	r2Slider = createSlider(0, 255, 96);
	r2Slider.position(520, 100);
	g2Slider = createSlider(0, 255, 141);
	g2Slider.position(520, 120);
	b2Slider = createSlider(0, 255, 145);
	b2Slider.position(520, 140);	
	
	r3Slider = createSlider(0, 255, 213);
	r3Slider.position(520, 180);
	g3Slider = createSlider(0, 255, 70);
	g3Slider.position(520, 200);
	b3Slider = createSlider(0, 255, 63);
	b3Slider.position(520, 220);
	
	r4Slider = createSlider(0, 255, 249);
	r4Slider.position(520, 260);
	g4Slider = createSlider(0, 255, 165);
	g4Slider.position(520, 280);
	b4Slider = createSlider(0, 255, 31);
	b4Slider.position(520, 300);	
	
	createCanvas(500,500);
	width1 = width / rows;
	height1 = height / columns;
	for(var i=0; i<rows; i++){
		bottomline.push([(color3[0]+((color4[0]-color3[0])/(rows-1)*i)),(color3[1]+((color4[1]-color3[1])/(rows-1)*i)),(color3[2]+((color4[2]-color3[2])/(rows-1)*i))]);	
	}
	
	for(var i=0; i<rows; i++){
		topline.push([(color1[0]+((color2[0]-color1[0])/(rows-1)*i)),(color1[1]+((color2[1]-color1[1])/(rows-1)*i)),(color1[2]+((color2[2]-color1[2])/(rows-1)*i))]);
	}
	
	for(var x=0; x<rows; x++){
		for(var y=0; y<columns; y++){
			h = "#"+hex(floor(topline[x][0]+((bottomline[x][0]-topline[x][0])/(columns-1)*y)),2)+hex(floor(topline[x][1]+((bottomline[x][1]-topline[x][1])/(columns-1)*y)),2)+hex(floor(topline[x][2]+((bottomline[x][2]-topline[x][2])/(columns-1)*y)),2);
			console.log(h);
		}
	}
	
}


function draw() {
	bottomline = []; 
	topline = [];
	for(var i=0; i<rows; i++){
		bottomline.push([(color3[0]+((color4[0]-color3[0])/(rows-1)*i)),(color3[1]+((color4[1]-color3[1])/(rows-1)*i)),(color3[2]+((color4[2]-color3[2])/(rows-1)*i))]);	
	}
	
	for(var i=0; i<rows; i++){
		topline.push([(color1[0]+((color2[0]-color1[0])/(rows-1)*i)),(color1[1]+((color2[1]-color1[1])/(rows-1)*i)),(color1[2]+((color2[2]-color1[2])/(rows-1)*i))]);
	}
	
	for(var x=0; x<rows; x++){
		for(var y=0; y<columns; y++){
			h = "#"+hex(floor(topline[x][0]+((bottomline[x][0]-topline[x][0])/(columns-1)*y)),2)+hex(floor(topline[x][1]+((bottomline[x][1]-topline[x][1])/(columns-1)*y)),2)+hex(floor(topline[x][2]+((bottomline[x][2]-topline[x][2])/(columns-1)*y)),2);
		}
	}
	color1 = [r1Slider.value(),g1Slider.value(),b1Slider.value()];
	color2 = [r2Slider.value(),g2Slider.value(),b2Slider.value()];
	color3 = [r3Slider.value(),g3Slider.value(),b3Slider.value()];
	color4 = [r4Slider.value(),g4Slider.value(),b4Slider.value()];
	
	noStroke();
	background(0);
	for(var x=0; x<rows; x++){
		for(var y=0; y<columns; y++){
			fill((topline[x][0]+((bottomline[x][0]-topline[x][0])/(columns-1)*y)),(topline[x][1]+((bottomline[x][1]-topline[x][1])/(columns-1)*y)),(topline[x][2]+((bottomline[x][2]-topline[x][2])/(columns-1)*y)));
			rect(x*width1,y*height1,width1-0,height1-0);
		}
	}
}