#pragma strict

function Start () {

Screen.fullScreen=true;

}

function Update () {

if (Input.GetKeyDown(KeyCode.Return))	{

Screen.fullScreen=true;

}

if (Input.GetKeyDown(KeyCode.Escape))	{

Screen.fullScreen=false;

}

}