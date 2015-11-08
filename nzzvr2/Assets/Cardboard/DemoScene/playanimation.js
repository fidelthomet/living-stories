#pragma strict

var animationstate = 0;
var prime1 : GameObject;
var prime2 : GameObject;
var prime3 : GameObject;
var prime4 : GameObject;
var prime5 : GameObject;

var restart : GameObject;

function Start () {
  
}

function Update () {
	var doStuff = false;
	
	for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
        	doStuff=true;
        }
    }
    if(Input.GetMouseButtonDown(0)){
    	doStuff=true;
    }
    
    if(doStuff){
    	switch(animationstate){
    		case 0:
    		gameObject.GetComponent.<Animation>().Play("a20to17");
    		break;
    		
    		case 1:
    		gameObject.GetComponent.<Animation>().Play("a17to3");
    		break;
    		
    		case 2:
    		gameObject.GetComponent.<Animation>().Play("a3to41");
    		break;
    		
    		case 3:
    		gameObject.GetComponent.<Animation>().Play("a41toMax");
    		break;
    		
    		case 4:
    		prime1.GetComponent.<Animation>().Play("up1");
    		prime2.GetComponent.<Animation>().Play("up2");
    		prime3.GetComponent.<Animation>().Play("up3");
    		prime4.GetComponent.<Animation>().Play("up4");
    		prime5.GetComponent.<Animation>().Play("up5");
    		
    		break;
    		
    		case 5:
    		prime1.GetComponent.<Animation>().Play("zdown1");
    		prime2.GetComponent.<Animation>().Play("zdown2");
    		prime3.GetComponent.<Animation>().Play("zdown3");
    		prime4.GetComponent.<Animation>().Play("zdown4");
    		prime5.GetComponent.<Animation>().Play("zdown5");
    		break;
    		
    		case 6:
			restart.GetComponent.<Renderer>().enabled = true;
    		break;
    		
    		case 7:
    		   Application.LoadLevel(0);
    		   break;
    			
    	}
    	animationstate ++;
	}   
}