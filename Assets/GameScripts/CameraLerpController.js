#pragma strict

//THIS CODE NEEDS EDITING. FIX IT SO THAT THE CAMERA IS ACTUALLY LOOKING
//AT THE RAGDOLL USING QUATERNION.LERP!!!

var mainCamera: GameObject;
var topDownCameraPosition: GameObject;
var ragDoll: GameObject;
var secondaryCam: GameObject;
var cameraPointer: GameObject;
var gameTarget: GameObject;
static var cameraState: int;
var cameraStopPos: Vector3;
var velocity:Vector3=Vector3(100,100,100);


function Start () {

mainCamera.camera.enabled=true;
secondaryCam.camera.enabled=false;
mainCamera.transform.position=topDownCameraPosition.transform.position;
cameraState=1;


}

function Update () {
//the following is for assigning the topdown cameras position
	topDownCameraPosition.transform.position.x=ragDoll.transform.position.x;
	topDownCameraPosition.transform.position.z=ragDoll.transform.position.z;
	topDownCameraPosition.transform.position.y=ragDoll.transform.position.y + 7;
	
if (Input.GetKeyDown(KeyCode.LeftShift)==true)	{
cameraState=cameraState+1;


}

	
if (cameraState == 1)	{
	
	mainCamera.transform.position= Vector3.SmoothDamp(mainCamera.transform.position,topDownCameraPosition.transform.position,velocity,0.5f);
	mainCamera.transform.LookAt(ragDoll.transform);
	mainCamera.camera.enabled=true;

	}

if (cameraState == 2)	{
	
	mainCamera.transform.position=topDownCameraPosition.transform.position;
	mainCamera.transform.rotation=topDownCameraPosition.transform.rotation;
	mainCamera.camera.enabled=true;
	
}

if (cameraState==3)	{

cameraState=1;

}

if (cameraState==4)	{

camera.transform.RotateAround((ragDoll.transform.position+gameTarget.transform.position)/2,Vector3.up, 20*Time.deltaTime);

}
	
}