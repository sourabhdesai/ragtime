#pragma strict

var mainCamera: GameObject;
var count: int= 0;
var startTimer: float;
static var slowMoMeter: float=0.0;
static var slowMoState: boolean=false;
static var slowMoState1: boolean=false;
static var Timer: float=0;
var slowMoMeterIncrement: float=0.5;
private var initialAmbientLightColor: Color;
private var slowMoMeterString: String;
var whoosh: AudioClip;
var heartbeat: AudioClip;
var mainLight: GameObject;
var spotlight: GameObject;
var ragDoll: GameObject;
var skyBoxSunny: Material;
var skyBoxGloomy: Material;

var menuSkin: GUISkin;

function Start () {

//Dont want to star off in slowmo
slowMoState=false;
slowMoState1=false;
initialAmbientLightColor=RenderSettings.ambientLight;
Physics.gravity.y=-9.8;
GUI.enabled=true;
mainCamera.audio.enabled=false;
spotlight.light.enabled=false;
RenderSettings.skybox=skyBoxSunny;

}

function Update () {
//The Timer, started everytime the shift key is pressed

if (slowMoMeter<0)	{

slowMoMeter=0;

}

//SlowMoState being true is a prerequisite for SlowMoState1 being true
if (slowMoState==false)	{
	
	slowMoState1=false;
	
	}

//the right shift key is an on and off button for slowmo mode
if (Input.GetKeyDown("right shift"))	{

	startTimer= Time.realtimeSinceStartup;
//startTimer will be subtracted from Time.time to output total time since shift key was pressed down

//If count is even and then the gamer presses right shift, then SlowMoState is true and count is made odd
	if (count % 2==0)	{
	
	slowMoState=true;
	count=count+1;
	
	}
	

//If count is odd then the gamer presses right shift, slowmostate is false, you return back to the original time settings
//and whatever time was on the timer is subtracted from whatever time was left on your slowMoMeter.	
	else	{
	
	Time.timeScale=1.0;
	Time.fixedDeltaTime=0.02;
	slowMoMeter=slowMoMeter-Timer;
	RenderSettings.ambientLight= initialAmbientLightColor;
	Physics.gravity.y=-9.8;
	RenderSettings.skybox=skyBoxSunny;
	mainLight.light.intensity= 0.5;
	spotlight.light.enabled=false;
	count=count+1;
	slowMoState=false;
	
	}
	
}

//SlowMoState1 is true if SlowMoState is true and
// you have more time on your SlowMoMeter than on the timer
if (slowMoState==true)	{

	slowMoState1=true;

}

//If slowmostate1 is true and you have some time left on your slowMoMeter then SlowMoMode is Activated
if (slowMoState1==true)	{
	
	Time.timeScale=0.35;
	Time.fixedDeltaTime= 0.02*Time.timeScale;
	if (0 < slowMoMeter)	{
	RenderSettings.ambientLight.r= 0;
	RenderSettings.ambientLight.g= 0;
	RenderSettings.ambientLight.b= 0;
	RenderSettings.ambientLight.a= 0.0;
	Physics.gravity.y=0;
	RenderSettings.skybox=skyBoxGloomy;
	mainLight.light.intensity= 0;
	spotlight.light.enabled=true;
	spotlight.transform.LookAt(ragDoll.transform.position);
	}
	
	}

//If the slowMoMeter ever dips below the Timer value, then set it and the Timer equal to zero
if (slowMoMeter < Timer && slowMoState1==true)	{

	slowMoState=false;
	slowMoMeter=0;
	count=0;
	RenderSettings.ambientLight= initialAmbientLightColor;
	Physics.gravity.y=-9.8;
	RenderSettings.skybox=skyBoxSunny;
	mainLight.light.intensity= 0.5;
	spotlight.light.enabled=false;

	}

//If slowMoState1 is false, then return back to normal time mode	
if (slowMoState1==false)	{
	
	Time.timeScale=1.0;
	Time.fixedDeltaTime=0.02;
	RenderSettings.ambientLight= initialAmbientLightColor;
	Physics.gravity.y=-9.8;
	RenderSettings.skybox=skyBoxSunny;
	mainLight.light.intensity= 0.5;
	spotlight.light.enabled=false;
	Timer=0;
	}
//To continuosly update the slowmomoeter in the gui
Timer= Time.realtimeSinceStartup-startTimer;

if (count==0)	{

Timer=0;

}

if (slowMoState1==true)	{

slowMoMeterString=(slowMoMeter-Timer).ToString("#.00");

}

if (slowMoState1==false)	{

slowMoMeterString=(slowMoMeter).ToString("#.00");
Timer=0;

}

}

function OnCollisionEnter (other: Collision)	{

//Everytime a collision happens at the given locations, add to the slowMoMeter
slowMoMeter=slowMoMeter+slowMoMeterIncrement;

}

function OnGUI()	{

GUI.skin=menuSkin;
GUI.Label(Rect (10, 10, 1000, 20),"Time Bank: "+slowMoMeterString);

}