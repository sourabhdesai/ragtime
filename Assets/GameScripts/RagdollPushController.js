#pragma strict
var ragDollTorso: GameObject;
var ragDollHead: GameObject;
var ragDollFootLeft: GameObject;
var ragDollFootRight: GameObject;
var forwardForce: int= 100;
var pullUpForce: int=100;
var backwardForce: int=100;
var pullDownForce: int=100;
var ragDollTorque: int=100;

function Start () {

}

function Update () {

if (Input.GetKeyDown("w"))	{
	ragDollTorso.constantForce.enabled=true;
	ragDollTorso.constantForce.relativeForce=Vector3.right*forwardForce*-1;

	}
if (Input.GetKeyUp("w"))	{

	ragDollTorso.constantForce.enabled=false;

	}
if (Input.GetKeyDown("s"))	{

	ragDollTorso.constantForce.enabled=true;
	ragDollTorso.constantForce.relativeForce=Vector3.right*backwardForce;

	}
if (Input.GetKeyUp("s"))	{

	ragDollTorso.constantForce.enabled=false;

	}
if (Input.GetKeyDown("e"))	{

	ragDollHead.constantForce.enabled=true;
	ragDollHead.constantForce.relativeForce=Vector3.up*pullUpForce;

	}
if (Input.GetKeyUp("e"))	{

	ragDollHead.constantForce.enabled=false;

	}
if (Input.GetKeyDown("q"))	{

	ragDollFootRight.constantForce.enabled=true;
	ragDollFootLeft.constantForce.enabled=true;
	ragDollFootLeft.constantForce.relativeForce=Vector3.up*pullDownForce*-1;
	ragDollFootRight.constantForce.relativeForce=Vector3.up*pullDownForce*-1;

	}
if (Input.GetKeyUp("q"))	{

	ragDollFootRight.constantForce.enabled=false;
	ragDollFootLeft.constantForce.enabled=false;

	}
if (Input.GetKeyDown("d"))	{

	ragDollTorso.constantForce.enabled=true;
	ragDollTorso.constantForce.relativeTorque=Vector3.up*ragDollTorque;
	
	}
if (Input.GetKeyUp("d"))	{

	ragDollTorso.constantForce.enabled=false;

	}
if (Input.GetKeyDown("a"))	{

	ragDollTorso.constantForce.enabled=true;
	ragDollTorso.constantForce.relativeTorque=Vector3.up*ragDollTorque*-1;

	}
if (Input.GetKeyUp("a"))	{

	ragDollTorso.constantForce.enabled=false;

	}


}