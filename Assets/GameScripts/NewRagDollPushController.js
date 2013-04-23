#pragma strict
var ragDoll: GameObject;
var WforceDirectionMaker: GameObject;
var AforceDirectionMaker: GameObject;
var SforceDirectionMaker: GameObject;
var DforceDirectionMaker: GameObject;
var QforceDirectionMaker: GameObject;
var EforceDirectionMaker: GameObject;
var ragDollForceAmount: float=100.0;
private var WDirectionMakerPosInitial: Vector3;
private var WDirectionMakerPosFinal: Vector3;
private var ADirectionMakerPosInitial: Vector3;
private var ADirectionMakerPosFinal: Vector3;
private var SDirectionMakerPosInitial: Vector3;
private var SDirectionMakerPosFinal: Vector3;
private var DDirectionMakerPosInitial: Vector3;
private var DDirectionMakerPosFinal: Vector3;
private var QDirectionMakerPosInitial: Vector3;
private var QDirectionMakerPosFinal: Vector3;
private var EDirectionMakerPosInitial: Vector3;
private var EDirectionMakerPosFinal: Vector3;
private var WForceVector: Vector3;
private var SForceVector: Vector3;
private var AForceVector: Vector3;
private var DForceVector: Vector3;
private var QForceVector: Vector3;
private var EForceVector: Vector3;

function Start () {

WforceDirectionMaker.transform.localPosition= Vector3.zero;
AforceDirectionMaker.transform.localPosition= Vector3.zero;
SforceDirectionMaker.transform.localPosition= Vector3.zero;
DforceDirectionMaker.transform.localPosition= Vector3.zero;
QforceDirectionMaker.transform.localPosition= Vector3.zero;
EforceDirectionMaker.transform.localPosition= Vector3.zero;
ragDoll.constantForce.enabled=false;



}

function Update () {
//W is in positive Z direction
if (Input.GetKeyDown("w"))	{
	
	WDirectionMakerPosInitial=WforceDirectionMaker.transform.position;
	WforceDirectionMaker.transform.localPosition= Vector3(0,0,1);
	WDirectionMakerPosFinal=WforceDirectionMaker.transform.position;
	WForceVector=WDirectionMakerPosFinal-WDirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= WForceVector*ragDollForceAmount;
	WforceDirectionMaker.transform.localPosition= Vector3(0,0,0);
	
	
	}
if (Input.GetKeyUp("w"))	{

	ragDoll.constantForce.enabled=false;

	}
//S is in negative Z direction
if (Input.GetKeyDown("s"))	{

	SDirectionMakerPosInitial=SforceDirectionMaker.transform.position;
	SforceDirectionMaker.transform.localPosition= Vector3(0,0,-1);
	SDirectionMakerPosFinal=SforceDirectionMaker.transform.position;
	SForceVector=SDirectionMakerPosFinal-SDirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= SForceVector*ragDollForceAmount;
	SforceDirectionMaker.transform.localPosition= Vector3(0,0,0);
	

	}
if (Input.GetKeyUp("s"))	{

	ragDoll.constantForce.enabled=false;

	}
//E is in positive Y direction
if (Input.GetKeyDown("e"))	{

	EDirectionMakerPosInitial=EforceDirectionMaker.transform.position;
	EforceDirectionMaker.transform.localPosition= Vector3(0,1,0);
	EDirectionMakerPosFinal=EforceDirectionMaker.transform.position;
	EForceVector=EDirectionMakerPosFinal-EDirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= EForceVector*ragDollForceAmount;
	EforceDirectionMaker.transform.localPosition= Vector3(0,0,0);

	}
if (Input.GetKeyUp("e"))	{

	ragDoll.constantForce.enabled=false;

	}
//Q is in negative Y direction
if (Input.GetKeyDown("q"))	{

	QDirectionMakerPosInitial=QforceDirectionMaker.transform.position;
	QforceDirectionMaker.transform.localPosition= Vector3(0,-1,0);
	QDirectionMakerPosFinal=QforceDirectionMaker.transform.position;
	QForceVector=QDirectionMakerPosFinal-QDirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= QForceVector*ragDollForceAmount;
	QforceDirectionMaker.transform.localPosition= Vector3(0,0,0);
	
	}
if (Input.GetKeyUp("q"))	{

	ragDoll.constantForce.enabled=false;

	}
//D is in the positive X direction
if (Input.GetKeyDown("d"))	{

	DDirectionMakerPosInitial=DforceDirectionMaker.transform.position;
	DforceDirectionMaker.transform.localPosition= Vector3(1,0,0);
	DDirectionMakerPosFinal=DforceDirectionMaker.transform.position;
	DForceVector=DDirectionMakerPosFinal-DDirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= DForceVector*ragDollForceAmount;
	DforceDirectionMaker.transform.localPosition= Vector3(0,0,0);
	
	}
if (Input.GetKeyUp("d"))	{

	ragDoll.constantForce.enabled=false;

	}
//A is in negative X direction
if (Input.GetKeyDown("a"))	{

	ADirectionMakerPosInitial=AforceDirectionMaker.transform.position;
	AforceDirectionMaker.transform.localPosition= Vector3(-1,0,0);
	ADirectionMakerPosFinal=AforceDirectionMaker.transform.position;
	AForceVector=ADirectionMakerPosFinal-ADirectionMakerPosInitial;
	ragDoll.constantForce.enabled=true;
	ragDoll.constantForce.force= AForceVector*ragDollForceAmount;
	AforceDirectionMaker.transform.localPosition= Vector3(0,0,0);

	}
if (Input.GetKeyUp("a"))	{

	ragDoll.constantForce.enabled=false;

	}


}