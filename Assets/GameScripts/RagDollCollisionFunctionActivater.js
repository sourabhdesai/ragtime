#pragma strict

var boneCrack : AudioClip ;


function Start () {

}

function Update () {

}
function OnTriggerEnter()	{

	audio.PlayOneShot(boneCrack);	

	}