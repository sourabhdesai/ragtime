#pragma strict
var whoosh: AudioClip;
var ticktock: AudioClip;

function Start () {

}

function Update () {

if (SpecialEffectsScript.slowMoState1==true)	{

audio.PlayOneShot(whoosh);
audio.PlayOneShot(ticktock);

}

}