const unwantedNum = [55, 63, 81, 95, 96, 97, 98, 99, 123, 141, 153, 164];

function start() {
  generateNum();
};

function generateNum() {
  current = Math.ceil(Math.random() * 203);
  if (!unwantedNum.includes(current) === false) {
    generateNum();
  } else {
    nextStep();
  }
};

function post(number) {
  $("#level-title").text("Zufällige Folge: " + number);
  $("#btn").text("Neue zufällige Folge");
};

function nextStep() {
  if (current < 10) {
    post(current);
    $("#picture").attr("src", "images/00" + current + ".jpg");
    $("#picture").attr("alt", "Folge" + current);
  } else if (current < 100) {
    post(current);
    $("#picture").attr("src", "images/0" + current + ".jpg");
    $("#picture").attr("alt", "Folge" + current);
  } else {
    post(current);
    $("#picture").attr("src", "images/" + current + ".jpg");
    $("#picture").attr("alt", "Folge" + current);
  }
};


$("#btn").click(function() {
  start();
});
