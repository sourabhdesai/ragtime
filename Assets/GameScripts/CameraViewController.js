#pragma strict
var TextureCube: GameObject;
var HexCieling1: GameObject;
var HexCieling2: GameObject;
var HexCieling3: GameObject;
var HexCieling4: GameObject;
var HexCieling5: GameObject;
var mainCamera: GameObject;
var ragDoll: GameObject;
var cameraToDollDist: int;

private var initialTexture1: Material;
private var initialTexture2: Material;
private var initialTexture3: Material;
private var initialTexture4: Material;
private var initialTexture5: Material;
private var softTexture: Material;


function Start () {

softTexture= TextureCube.renderer.material;
initialTexture1= HexCieling1.renderer.material;
initialTexture2= HexCieling2.renderer.material;
initialTexture3= HexCieling3.renderer.material;
initialTexture4= HexCieling4.renderer.material;
initialTexture5= HexCieling5.renderer.material;

}

function Update () {

cameraToDollDist=Mathf.Ceil(Vector3.Magnitude(mainCamera.transform.position-ragDoll.transform.position));

if (Physics.Raycast(mainCamera.transform.position,ragDoll.transform.position,cameraToDollDist)==false)	{

HexCieling1.renderer.material=softTexture;
HexCieling2.renderer.material=softTexture;
HexCieling3.renderer.material=softTexture;
HexCieling4.renderer.material=softTexture;
HexCieling5.renderer.material=softTexture;

}

else	{

HexCieling1.renderer.material=initialTexture1;
HexCieling2.renderer.material=initialTexture2;
HexCieling3.renderer.material=initialTexture3;
HexCieling4.renderer.material=initialTexture4;
HexCieling5.renderer.material=initialTexture5;

}

}