#pragma strict

var interval:int=1;
var timer: float;
static var timerEnd:boolean=false;
function Start () {
timer=Time.time+interval;
}

function Update () {

if (Time.time>= timer)	{

timerEnd=true;
timer=0;
GetComponent(BasicTimer).enabled=false;

}

}