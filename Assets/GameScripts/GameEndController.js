#pragma strict
var AIragDoll: GameObject;
var ragDoll: GameObject;
var ragDollHead: GameObject;
var ragDollTorso: GameObject;
var ragDollKneeLeft:GameObject;
var ragDollKneeRight: GameObject;
var ragDollLeftArm: GameObject;
var ragDollRightArm: GameObject;
var ragDollLeftForeArm: GameObject;
var ragDollRightForeArm: GameObject;
var ragDollThighLeft: GameObject;
var ragDollThighRight: GameObject;

var menuSkin: GUISkin;


var gameTarget: GameObject;
private var startingPosition: Vector3;
private var startingRotation: Quaternion;
static var gameState: int;
static var timeStamp:float;
static var highScore: float=0;
static var highScoreString :String;
static var PlayerWins:boolean;
//gameState of 0 indicates start of game, gamestate of 1 indicates finish, gamestate 2 indicates game restart

function Start () {

startingPosition= ragDoll.transform.position;
startingRotation= ragDoll.transform.rotation;
gameState=0;
AI_GameEndScript.gameState=0;
highScore=0;
highScoreString="0.00";


}

function Update () {

if (gameState==0 && Input.GetKeyDown("space"))	{

	ScoreTrackerScript.score=0;
	
	timeStamp=Time.time;
	ScoreTrackerScript.time= ScoreTrackerScript.time-timeStamp;

}

if (AI_GameEndScript.AI_Wins==true)	{

ragDoll.rigidbody.isKinematic=true;
ragDollHead.rigidbody.isKinematic=true;
ragDollTorso.rigidbody.isKinematic=true;
ragDollKneeLeft.rigidbody.isKinematic=true;
ragDollKneeRight.rigidbody.isKinematic=true;
ragDollLeftArm.rigidbody.isKinematic=true;
ragDollRightArm.rigidbody.isKinematic=true;
ragDollLeftForeArm.rigidbody.isKinematic=true;
ragDollRightForeArm.rigidbody.isKinematic=true;
ragDollThighLeft.rigidbody.isKinematic=true;
ragDollThighRight.rigidbody.isKinematic=true;

gameState=3;
AI_GameEndScript.gameState=3;
}



}

function OnCollisionEnter (other: Collision)	{

PlayerWins=true;

ragDoll.rigidbody.isKinematic=true;
ragDollHead.rigidbody.isKinematic=true;
ragDollTorso.rigidbody.isKinematic=true;
ragDollKneeLeft.rigidbody.isKinematic=true;
ragDollKneeRight.rigidbody.isKinematic=true;
ragDollLeftArm.rigidbody.isKinematic=true;
ragDollRightArm.rigidbody.isKinematic=true;
ragDollLeftForeArm.rigidbody.isKinematic=true;
ragDollRightForeArm.rigidbody.isKinematic=true;
ragDollThighLeft.rigidbody.isKinematic=true;
ragDollThighRight.rigidbody.isKinematic=true;

CameraLerpController.cameraState=4;
if (ragDoll.rigidbody.isKinematic==true)	{

gameState=1;
AI_GameEndScript.gameState=1;

}

}

function OnGUI ()	{
GUI.skin=menuSkin;

if (gameState==1)	{

GUI.Label(Rect(200,50,1000,20), "FINISH");
GUI.Label(Rect(200,60,1000,20), "YOU WON!");
GUI.Label(Rect(200,90,1000,20),"Final Score: "+ScoreTrackerScript.totalScoreString);
GUI.Label(Rect(200,210,1000,210),"PRESS SPACEBAR TO RESTART");
//Script for controlling highschore (Not suppposed to be present in AI_GameEndScript)
	if (highScore <= ScoreTrackerScript.totalScore)	{
	
	GUI.Label(Rect(200,150,1000,200), "NEW HIGH SCORE!");
	highScore= ScoreTrackerScript.totalScore;
	highScoreString=highScore.ToString("#.00");
	
	}

}
	
if (Input.GetKeyDown("space"))	{

	PlayerWins=false;
	timeStamp=Time.time;
	
 	ragDoll.transform.position=startingPosition;
 	ragDoll.transform.rotation=startingRotation;
 	
 	ragDoll.rigidbody.isKinematic=false;
	ragDollHead.rigidbody.isKinematic=false;
	ragDollTorso.rigidbody.isKinematic=false;
	ragDollKneeLeft.rigidbody.isKinematic=false;
	ragDollKneeRight.rigidbody.isKinematic=false;
	ragDollLeftArm.rigidbody.isKinematic=false;
	ragDollRightArm.rigidbody.isKinematic=false;
	ragDollLeftForeArm.rigidbody.isKinematic=false;
	ragDollRightForeArm.rigidbody.isKinematic=false;
	ragDollThighLeft.rigidbody.isKinematic=false;
	ragDollThighRight.rigidbody.isKinematic=false;
 	
 	ScoreTrackerScript.score=0;
 	ScoreTrackerScript.totalScore=0;
 	SpecialEffectsScript.slowMoMeter=0;
 	SpecialEffectsScript.Timer=0;
 	CameraLerpController.cameraState=1;
 	SpecialEffectsScript.slowMoState=false;
 	
 	gameState=2;
	AI_GameEndScript.gameState=2;

}

if (gameState==2)	{
	
 	ragDoll.transform.position=startingPosition;
 	ragDoll.transform.rotation=startingRotation;

	ragDoll.rigidbody.isKinematic=false;
	ragDollHead.rigidbody.isKinematic=false;
	ragDollTorso.rigidbody.isKinematic=false;
	ragDollKneeLeft.rigidbody.isKinematic=false;
	ragDollKneeRight.rigidbody.isKinematic=false;
	ragDollLeftArm.rigidbody.isKinematic=false;
	ragDollRightArm.rigidbody.isKinematic=false;
	ragDollLeftForeArm.rigidbody.isKinematic=false;
	ragDollRightForeArm.rigidbody.isKinematic=false;
	ragDollThighLeft.rigidbody.isKinematic=false;
	ragDollThighRight.rigidbody.isKinematic=false;

 	ScoreTrackerScript.score=0;
 	ScoreTrackerScript.totalScore=0;
 	SpecialEffectsScript.slowMoMeter=0;
 	SpecialEffectsScript.Timer=0;
 	CameraLerpController.cameraState=1;
 	SpecialEffectsScript.slowMoState=false;
 	
 	gameState=0;
 	AI_GameEndScript.gameState=0;

}



}