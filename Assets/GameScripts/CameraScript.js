#pragma strict
var topDownCamera: GameObject;
var firstPersonCamera: GameObject;
var ragDoll: GameObject;
var cameraController: GameObject;
private var count: int=0;

function Start () {
//sets the topdown cameras rotation
topDownCamera.transform.rotation= cameraController.transform.rotation;

//sets topdown camera as the one that is enabled at start
topDownCamera.camera.enabled=true;

firstPersonCamera.camera.enabled=false;

}

function LateUpdate ()	{
//the following is for assigning the topdown cameras position
	topDownCamera.transform.position.x=ragDoll.transform.position.x;
	topDownCamera.transform.position.z=ragDoll.transform.position.z;
	topDownCamera.transform.position.y=ragDoll.transform.position.y + 7;

//the following is for changing camera views
if (Input.GetKeyDown("left shift"))	{
	if (count % 2== 0)	{
	
	topDownCamera.camera.enabled=false;
	firstPersonCamera.camera.enabled=true;
	count= count+1;
	
	}
	
	else	{
	
	topDownCamera.camera.enabled=true;
	firstPersonCamera.camera.enabled=false;
	count=count+1;
	
	}
	
	}
	

}