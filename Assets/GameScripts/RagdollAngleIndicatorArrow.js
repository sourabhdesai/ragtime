#pragma strict
var arrow: GameObject;
var arrowPointer: GameObject;
var gameTarget: GameObject; //New
private var arrowInitialXRot: float;
private var arrowInitialYRot: float;
private var arrowInitialZRot: float;
private var ragDollInitialXRot: float;
private var ragDollInitialYRot: float;
private var ragDollInitialZRot: float;
function Start () {

arrowInitialXRot= arrow.transform.localRotation.x;
arrowInitialXRot= arrow.transform.rotation.y;
arrowInitialZRot= arrow.transform.rotation.z;

ragDollInitialXRot= arrowPointer.transform.rotation.x;
ragDollInitialYRot= arrowPointer.transform.rotation.y;
ragDollInitialZRot= arrowPointer.transform.rotation.z;

}

function Update () {

arrowPointer.transform.LookAt(gameTarget.transform); //New
arrow.transform.rotation=arrowPointer.transform.rotation;


}