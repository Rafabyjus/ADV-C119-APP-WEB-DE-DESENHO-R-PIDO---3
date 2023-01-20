function draw(){
    checkSketch()
    if(drawnSketch == sketch)
    {
        answerHolder = "set"
        score++;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    }
}
function checkSketch()
{
    timerConter++;
    document.getElementById('time').innerHTML = 'Timer: ' + timerConter;
    console.log(timerConter)
    if(timerConter > 400)
    {
        timerConter = 0
        timerCheck = "completed"
    }
    if(timerCheck =="completed" || answerHolder == "set")
    {
    timerCheck = "";
    answerHolder = "";
    updateCanvas();
    }
}
function updateCanvas() {
    background("white");
    randonNumber = Math.floor((Math.random() * quickDrawDataset.lenght) + 1);
    console.log(quickDrawDataset[randomNumber]);
    sketch = quickDrawDataset[randomNumber];
    document.getElementById('sketchName').innerHTML = 'Sketch to be Drawn: ' + sketch;
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}