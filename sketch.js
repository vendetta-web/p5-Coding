let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(400, 400);
  rSlider = createSlider(0, 255, 0);
  gSlider = createSlider(0, 255, 0);
  bSlider = createSlider(0, 255, 0);
  
  let r = getItem("redValue");
  if (r !== null){
    rSlider.value(r);
  }
  let g = getItem("greenValue");
  if (g !== null){
    gSlider.value(g);
  }
  let b = getItem("blueValue");
  if (b !== null){
    bSlider.value(b);
  }
  
  rSlider.changed(storeData);
  gSlider.changed(storeData);
  bSlider.changed(storeData);
}

function storeData(){
  storeItem("redValue", rSlider.value());
   storeItem("greenValue", rSlider.value());
   storeItem("blueValue", rSlider.value());
  
}

function draw() {
  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();
  background(r, g, b);
}