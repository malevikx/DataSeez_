let alltheseeds = [];
let font;
let seedshape;
let seedcolor;
let x;
let y;
let data;
let elementsinrow = 126;
let w;
let whichIndex;
let selectYear = "2021";
let slider;

function preload() {
  // standard procedure quando lavoro coi Json
  data = loadJSON("./Assets/perjson.json");
  font = loadFont("./Assets/ArialUnicodeMS.ttf");
}

function setup() {
  createCanvas(windowWidth - 200, windowHeight - 200).parent("sketch");
  background("#f6f6f6");
  textSize(14); //
  textFont(font);
  textAlign(LEFT, TOP);
  slider = select("#slider");
  slider.changed(onSlideChange);

  about = createButton("HOME");
  about.position(60, 40);
  about.mouseClicked(homeClicked);
}

function draw() {
  background("#f6f6f6");
  w = width / elementsinrow; //span

  for (let i = 0; i < data.seeds.length; i++) {
    addSeeds(
      i,
      data.seeds[i].InstituteName,
      //genus
      data.seeds[i].colori,
      data.seeds[i].DateOfDeposit
    );
  }
  whichIndex = Math.floor(mouseY / w) * elementsinrow + Math.floor(mouseX / w);
  //console.log(data.seeds[whichIndex].VernacularName);
  if (
    data.seeds[whichIndex] &&
    data.seeds[whichIndex].DateOfDeposit <= selectYear
  ) {
    push();
    fill("#f6f6f6");
    stroke("#169264");
    textAlign(CENTER, BASELINE);
    rectMode(CENTER);
    rect(mouseX, mouseY - 4, 120, 20, 20);

    noStroke();
    fill("#169264");
    text(data.seeds[whichIndex].GenusName, mouseX, mouseY);
    pop();
  }
}

function addSeeds(index, bank, genus, year) {
  //gestisco il simbolo
  //AFRICA
  if (bank == "Africa Rice Center") {
    seedshape = "⌹";
  } else if (
    bank ==
    "Agricultural Plant Genetic Resources Conservation and Research Centre"
  ) {
    seedshape = "⌸";
  } else if (bank == "Agricultural Research Institute of Burundi") {
    seedshape = "⌺";
  } else if (bank == "Institut d'Economie Rurale") {
    seedshape = "⌻";
  } else if (bank == "Institut National de la recherche Agronomique") {
    seedshape = "⌼";
  } else if (bank == "International Institute of Tropical Agriculture") {
    seedshape = "⃞";
  } else if (bank == "International Livestock Research Institute") {
    seedshape = "⃟";
  } else if (bank == "National Genebank of Kenya") {
    seedshape = "◈";
  } else if (bank == "National Genebank of Kenya") {
    seedshape = "◈";
  } else if (
    bank == "Nigeria National Centre for Genetic Resources and Biotechnology"
  ) {
    seedshape = "⁃";
  } else if (bank == "SADC Plant Genetic Resources Centre") {
    seedshape = "∎";
  } else if (bank == "The Uganda National Genebank") {
    seedshape = "۞";
  } else if (bank == "World Agroforestry Centre") {
    seedshape = "⊟";
  }
  //ASIA
  else if (bank == "Agricultural University of Georgia") {
    seedshape = "✷";
  } else if (
    bank ==
    "Armenian State Agrarian University, Laboratory of plant gene pool and breeding"
  ) {
    seedshape = "✶";
  } else if (bank == "Baekdudaegan National Arboretum") {
    seedshape = "✵";
  } else if (
    bank ==
    "Barley and Wild Plant Resources Center, National University Corporation Okayama University"
  ) {
    seedshape = "✴";
  } else if (
    bank ==
    "Biotechnology, Plant Genetic Resources and Plant Protection Division"
  ) {
    seedshape = "✲";
  } else if (bank == "Chai Nat Field Crops Research Center") {
    seedshape = "✱";
  } else if (
    bank == "Department of Agriculture, Ministry of Agriculture and Cooperation"
  ) {
    seedshape = "✸";
  } else if (
    bank ==
    "Genetic Resources Institute of the Azerbaijan National Academy of Sciences"
  ) {
    seedshape = "✹";
  } else if (bank == "I. Lamouri Research Institute of Farming") {
    seedshape = "✺";
  } else if (
    bank ==
    "Indonesian Center for Agricultural Biotechnology and Genetic Resources Research and Biotechnology"
  ) {
    seedshape = "✻";
  } else if (
    bank == "Institute of Creal Crop Improvement, Tel Aviv University"
  ) {
    seedshape = "✼";
  } else if (
    bank == "International Centre for Agricultural Research in Dry Areas"
  ) {
    seedshape = "✽";
  } else if (
    bank == "International Centre for Agricultural Research in Dry Areas"
  ) {
    seedshape = "✾";
  } else if (
    bank == "International Crop Research Institute for the Semi-Arid Tropics"
  ) {
    seedshape = "✧";
  } else if (bank == "International Rice Research Institute") {
    seedshape = "❀";
  } else if (bank == "Lebanese Agricultural Research Institute") {
    seedshape = "❁";
  } else if (bank == "National Bureau of Plant Genetic Resources India") {
    seedshape = "❂";
  } else if (
    bank ==
    "National Institute of Agricultural Sciences. Rural Development Genebank"
  ) {
    seedshape = "❃";
  } else if (bank == "National Plant Genetic Resources Laboratory") {
    seedshape = "❇";
  } else if (
    bank == "National Rice Seed Storage Laboratory for Genetic Resources"
  ) {
    seedshape = "❈";
  } else if (
    bank ==
    "Plant Genetic Resources Institute, National Agricultural Research Centre"
  ) {
    seedshape = "❊";
  } else if (
    bank == "Plant Science Agricultural Research and Training Institute"
  ) {
    seedshape = "❖";
  } else if (bank == "Pyongyang AAS") {
    seedshape = "❦";
  } else if (bank == "Republican National Genetic Resource Center") {
    seedshape = "❧";
  } else if (bank == "Taiwan Agricultural Research Institute") {
    seedshape = "⁂";
  } else if (bank == "Temasek Life Sciences Laboratory Limited") {
    seedshape = "❋";
  } else if (bank == "The Chaipattana Foundation") {
    seedshape = "∗";
  } else if (bank == "The World Vegetable Center") {
    seedshape = "✠";
  } else if (bank == "Uzbek Research Institute of Plant Industry") {
    seedshape = "✤";
  } else if (bank == "Wild Cereal Gene Bank") {
    seedshape = "✣";

    //EUROPA
  } else if (bank == "Agroscope Changins") {
    seedshape = "⊖";
  } else if (bank == "Austrian Agency for Health and Food Safety") {
    seedshape = "⊕";
  } else if (bank == "Centre for Genetic Resources") {
    seedshape = "⊗";
  } else if (bank == "Crop Research Institute") {
    seedshape = "⊘";
  } else if (bank == "Department of Agriculture, Food and Rural Development") {
    seedshape = "⊙";
  } else if (bank == "Estonian Crop Research Institute") {
    seedshape = "⊚";
  } else if (
    bank ==
    "Federal Research Centre for Cultivated Plants - Institute of Fruit Breeding"
  ) {
    seedshape = "⊛";
  } else if (bank == "Genetic Resources Institute, University of Banjaluka") {
    seedshape = "⊜";
  } else if (bank == "Institute for Plant Genetic Resources K. Malkov") {
    seedshape = "⊝";
  } else if (bank == "Institute of Field and Vegetable Crops") {
    seedshape = "◙";
  } else if (bank == "Institute of Plant Production n.a. V.Y. Yurjev of UAAS") {
    seedshape = "◘";
  } else if (bank == "John Innes Centre, Germplasm Resources Unit") {
    seedshape = "◉";
  } else if (bank == "Latvian State Forest Research Institute 'Silava'") {
    seedshape = "●";
  } else if (
    bank == "Leibniz Institute of Plant Genetics and Crop Plant Research"
  ) {
    seedshape = "◌";
  } else if (
    bank == "Lombardy Seed Bank, Botanical Garden, University of Pavia"
  ) {
    seedshape = "○";
  } else if (
    bank ==
    "N.I. Vavilov All-Russian Scientific Research Institute of Plant Industry"
  ) {
    seedshape = "◍";
  } else if (bank == "National Agricultural Research Foundation Greec") {
    seedshape = "◎";
  } else if (bank == "National Institute for Agricultural Research") {
    seedshape = "◕";
  } else if (bank == "Natural Resources Institute Finland") {
    seedshape = "◒";
  } else if (bank == "Nordic Genetic Resource Center") {
    seedshape = "◑";
  } else if (bank == "Oak Park Research Centre") {
    seedshape = "•";
  } else if (bank == "Plant Breeding and Acclimatization Institute") {
    seedshape = "⃠";
  } else if (bank == "Portuguese Bank of Plant Germplasm") {
    seedshape = "۝";
  } else if (bank == "Research Institute of Plant Production Piestany") {
    seedshape = "༓";
  } else if (
    bank ==
    "Scientific Practical Centre of the National Academy of Sciences of Belarus for Arable Farming"
  ) {
    seedshape = "ᅌ";
  } else if (bank == "Suceava Genebank") {
    seedshape = "ᇹ";
  } else if (bank == "The James Hutton Institute") {
    seedshape = "⌾";
  } else if (bank == "The Norwegian Forest Seed Centre") {
    seedshape = "Ⓞ";
  } else if (bank == "Warwick Genetic Resources Unit") {
    seedshape = "◐";

    //NORD AMERICA
  } else if (
    bank == "Centro Agronómico Tropical de Investigación y Enseñanza"
  ) {
    seedshape = "⍍";
  } else if (bank == "Centro Internacional de Mejoramiento de Maíz y Trigo") {
    seedshape = "⍢";
  } else if (bank == "Cherokee Nation") {
    seedshape = "⊲";
  } else if (bank == "Desert Legume Program") {
    seedshape = "⊳";
  } else if (bank == "National Plant Germplasm System") {
    seedshape = "⊴";
  } else if (bank == "Plant Gene Resources of Canada") {
    seedshape = "⊵";
  } else if (bank == "Seed Savers Exchange") {
    seedshape = "⊿";
  } else if (bank == "Universidad de Costa Rica") {
    seedshape = "⍙";

    //SUD AMERICA
  } else if (bank == "Centro Internacional de Agricultura Tropical") {
    seedshape = "۵";
  } else if (bank == "Centro Internacional de la Papa") {
    seedshape = "⌇";
  } else if (bank == "Instituto de Investigaciones Agropecuarias") {
    seedshape = "☀";
  } else if (
    bank == "Instituto Nacional Autónomo de Investigaciónes Agropecuarias"
  ) {
    seedshape = "☼";
  } else if (bank == "Parque de la Papa") {
    seedshape = "☾";
  } else if (bank == "The Brazilian Agricultural Research Corporation") {
    seedshape = "♒";
  } else if (bank == "Universidad Nacional Agraria La Molina") {
    seedshape = "↘️";

    //OCEANIA
  } else if (bank == "Australian Grains Genebank") {
    seedshape = "⋈";
  } else if (bank == "Australian Pastures Genebank") {
    seedshape = "⋉";
  } else if (bank == "Margot Forde Forage Germplasm Centre, AgResearch Ltd") {
    seedshape = "⋊";
  }
  //gestisco colore
  //fill(genus);

  //let elementsinrow = 110;
  // let w = width / elementsinrow; //span
  let x = index % elementsinrow; //colonna
  let y = Math.floor(index / elementsinrow); //riga
  //
  if (year <= selectYear) {
    fill(genus);
    text(seedshape, x * w, y * w);
  }
}
function onSlideChange() {
  selectYear = slider.value().toString();
  document.getElementById("currentyear").innerHTML = selectYear;
}
function homeClicked() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* function mouseClicked(){

  text(seedshape, x * w, y * w);

} */
