#pragma strict
var AIragDoll: GameObject;
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
static var AI_isKinematic: boolean=false;
static var AI_Wins:boolean;

var menuSkin: GUISkin;

var gameTarget: GameObject;
private var startingPosition: Vector3;
private var startingRotation: Quaternion;
static var gameState: int;

//gameState of 0 indicates start of game, gamestate of 1 indicates finish

function Start () {

startingPosition= AIragDoll.transform.position;
startingRotation=AIragDoll.transform.rotation;
GameEndController.gameState=0;


}

function Update () {

//if (gameState==0 && Input.GetKeyDown("space"))	{
//
//	gameState=2;
//	GameEndController.gameState=2;
//	
//}

if (GameEndController.PlayerWins==true)	{

AIragDoll.rigidbody.isKinematic=true;
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



}

if (AI_Wins==true)	{

AIragDoll.rigidbody.isKinematic=true;
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

}

if (GameEndController.gameState==3)	{

AIragDoll.rigidbody.isKinematic=true;
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

}

}

function OnCollisionEnter (other: Collision)	{

ScoreTrackerScript.score=0;

AI_Wins=true;

AIragDoll.rigidbody.isKinematic=true;
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

GameEndController.gameState=3;



}

function OnGUI ()	{
GUI.skin=menuSkin;

if (GameEndController.gameState==3)	{

GUI.Label(Rect(200,50,1000,20), "FINISH");
GUI.Label(Rect(200,60,1000,20), "YOU LOST");
GUI.Label(Rect(200,210,1000,210),"PRESS SPACEBAR TO RESTART");

}
	
if (Input.GetKeyDown("space"))	{

	GameEndController.gameState=2;
	AI_Wins=false;
 	AIragDoll.transform.position=startingPosition;
 	AIragDoll.transform.rotation=startingRotation;
 	
 	AIragDoll.rigidbody.isKinematic=false;
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

}

if (GameEndController.gameState==2)	{

 	AIragDoll.transform.position=startingPosition;
 	AIragDoll.transform.rotation=startingRotation;

	AIragDoll.rigidbody.isKinematic=false;
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

	GameEndController.gameState=0;
	
}

}