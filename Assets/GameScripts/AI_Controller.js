#pragma strict

var AI_ragDoll: GameObject;
var gameTarget: GameObject;
var forceMagnitude: float=100;
private var forceDirection: Vector3;
var collisionOccur: boolean=false;
var AI_TimeStamp: float;
var timeSinceCollision:float;
var Land: GameObject;
var counter:int=0;
var AIvelocity: float=0;


function Start () {

AI_ragDoll.rigidbody.constantForce.enabled=true;

}

function Update () {

AIvelocity=Vector3.SqrMagnitude(AI_ragDoll.rigidbody.velocity);

if (AIvelocity>5625)	{

AI_ragDoll.rigidbody.constantForce.force=Vector3.zero;

}

if (GetComponent(BasicTimer).enabled==false)	{

forceDirection=Vector3.Normalize(gameTarget.transform.position-AI_ragDoll.transform.position);
AI_ragDoll.rigidbody.constantForce.force=forceDirection*forceMagnitude;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3.down,2))	{

AI_ragDoll.rigidbody.constantForce.force.y= AI_ragDoll.rigidbody.constantForce.force.y+184;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3.up,2))	{

AI_ragDoll.rigidbody.constantForce.force.y= AI_ragDoll.rigidbody.constantForce.force.y-50;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3(0,0,1),2))	{

AI_ragDoll.rigidbody.constantForce.force.z=AI_ragDoll.rigidbody.constantForce.force.z-100;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3(0,0,-1),2))	{

AI_ragDoll.rigidbody.constantForce.force.z=AI_ragDoll.rigidbody.constantForce.force.z+100;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3(1,0,0),2))	{

AI_ragDoll.rigidbody.constantForce.force.x= AI_ragDoll.rigidbody.constantForce.force.x-60;

}

if (Physics.Raycast(AI_ragDoll.transform.position,Vector3(-1,0,0),2))	{

AI_ragDoll.rigidbody.constantForce.force.x= AI_ragDoll.rigidbody.constantForce.force.x+60;

}

}

function OnCollisionEnter (other:Collision)	{
GetComponent(BasicTimer).enabled=true;
counter++;
if (BasicTimer.timerEnd==false)	{

forceDirection=Vector3.Normalize(other.contacts[0].normal);
AI_ragDoll.rigidbody.constantForce.force=forceDirection*forceMagnitude;

}


}