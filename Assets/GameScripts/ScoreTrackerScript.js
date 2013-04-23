#pragma strict
//THIS SCRIPT KEEPS TRACK OF THE PLAYERS SCORE AND VELOCITY
//IT CONTAINS THE FORMULA FOR 

static var score: float=0.00;
var scoreIncrementer: float=10;
static var totalScoreString: String;
var ragDoll: GameObject;
var velocity: float;
var velocityString: String;
static var time: float;
var timeString: String;
static var totalScore: float;

var menuSkin: GUISkin;

function Start () {

time=0;


}

function Update () {
totalScore=score-((time*time)/2);
if (totalScore<0)	{

totalScore=0;

}

if (GameEndController.gameState==0)	{

	ScoreTrackerScript.time=Time.time-GameEndController.timeStamp;

}

totalScoreString= totalScore.ToString("#.00");
velocity= Vector3.Magnitude(ragDoll.rigidbody.velocity);
velocityString=velocity.ToString("#");
timeString=time.ToString("#.0");



}

function OnCollisionEnter (other: Collision)	{

score= score+ scoreIncrementer;	
		
}	


function OnGUI ()	{
GUI.skin=menuSkin;

GUI.Label(Rect (10, 50, 200, 20), "Score: "+ totalScoreString);
GUI.Label(Rect (10, 90, 200, 20), "Velocity: "+ velocityString);
GUI.Label(Rect (10,130,200,20), "Time: "+timeString);
GUI.Label(Rect (10,160,200,20), "High Score: "+GameEndController.highScoreString);

if (velocity > 30)	{

score= score + 0.5;
GUI.Label(Rect(290,90,1000,20), "High Speed Bonus!");
}

}