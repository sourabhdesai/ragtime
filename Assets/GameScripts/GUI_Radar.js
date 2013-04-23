#pragma strict
var AI_ragDoll: GameObject;
var playerRagDoll: GameObject;
var textureCube: GameObject;
private var softTexture: Texture;
//Green square is the gametarget
var greenTexture: Texture;
//Red square is the AI ragdoll
var orangeTexture: Texture;
//Blue square is the player ragdoll
var blueTexture: Texture;
var radarObjectHeight: int;
var radarObjectWidth: int;
var radarAI_Height: int;
var radarAI_Width: int;
var AI_PositionPercentZ:float;
var AI_PositionPercentX:float;
var Player_PositionPercentZ:float;
var Player_PositionPercentX:float;
var fenceZ_Start: float=390.4794;
var fenceZ_End: float=201.354;
var fenceX_Start: float=-11.12418;
var fenceX_End: float=7.053847;



function Start () {

softTexture=textureCube.renderer.material.mainTexture;
radarObjectWidth=Screen.width*0.01;
radarObjectHeight=radarObjectWidth;

}

function Update () {

AI_PositionPercentZ=Mathf.Abs(0.2*((AI_ragDoll.transform.position.z-fenceZ_Start)/(fenceZ_End-fenceZ_Start)));
AI_PositionPercentX=Mathf.Abs(0.1*((AI_ragDoll.transform.position.x-fenceX_Start)/(fenceX_End-fenceX_Start)));
Player_PositionPercentZ=Mathf.Abs(0.2*((playerRagDoll.transform.position.z-fenceZ_Start)/(fenceZ_End-fenceZ_Start)));
Player_PositionPercentX=Mathf.Abs(0.1*((playerRagDoll.transform.position.x-fenceX_Start)/(fenceX_End-fenceX_Start)));

}

function OnGUI ()	{
//Draws Radar Box
GUI.Box(Rect(Screen.width*0.9,Screen.height*0.8, Screen.width*0.1, Screen.height*0.2),GUIContent.none);
//Draws Target Position
GUI.DrawTexture(Rect(Screen.width*0.945,Screen.height*0.89,radarObjectWidth,radarObjectHeight),greenTexture);
//Draws AI's Position
GUI.DrawTexture(Rect(Screen.width*(0.9+AI_PositionPercentX),Screen.height*(0.8+AI_PositionPercentZ),radarObjectWidth,radarObjectHeight),orangeTexture);
//Draws Player's Position
GUI.DrawTexture(Rect(Screen.width*(0.9+Player_PositionPercentX),Screen.height*(0.8+Player_PositionPercentZ),radarObjectWidth,radarObjectHeight),blueTexture);


}