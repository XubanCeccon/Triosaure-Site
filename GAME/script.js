var timerId;
var timeLeft = 30;
var currentScore = 0;
var timer = document.getElementById('timer');
var allBins = ["red","bluebin","greenbin","yellow"];
var allPictures = ["blue","green","red1","red2","red3","red4","red5","yellow1","yellow2","yellow3","yellow4","yellow5","yellow6","yellow7","yellow8"];
console.log(allBins.length);
for(var b = 1; b <= 4; b++)
{
	var randomBin = allBins.splice(allBins.length * Math.random() | 0, 1)[0];
	document.getElementById("alltrashes").innerHTML += "<img class='trashbin' id='"+randomBin+"' src='images/"+randomBin+".png' width='200' height='250' />";
}
function disableDragFeature()
{
	var trashImages = document.querySelectorAll('.trashimage');
	for(var p = 0; p < trashImages.length; p++)
	{
		trashImages[p].setAttribute("draggable","false");
	}
	var binImages = document.querySelectorAll('.trashbin');
	for(var p = 0; p < binImages.length; p++)
	{
		binImages[p].setAttribute("draggable","false");
	}
	document.getElementById("playAgain").style.display = "inline-block";
	document.getElementById("playAgain").addEventListener('click',function(e){
		location.reload();
	});
}
function restartGame()
{
	document.getElementById("playAgain").style.display = "inline-block";
	document.getElementById("playAgain").addEventListener('click',function(e){
		location.reload();
	});
}
function countdown()
{
	if(timeLeft == -1)
	{
		clearTimeout(window.timerId);
		disableDragFeature();
	}
	else
	{
		if(timeLeft < 10)
			timer.innerHTML = "0"+timeLeft;
		else
			timer.innerHTML = timeLeft;
		timeLeft--;
	}
}
countdown();
timerId = setInterval(countdown, 1000);
for(var e = 0; e < 15; e++)
{
	var randomImage = allPictures.splice(allPictures.length * Math.random() | 0, 1)[0];
	document.getElementById("allimages").innerHTML += "<img draggable='true' class='trashimage' id='"+randomImage+"' src='images/"+randomImage+".png' width='80' height='80' />";
}
var trash_images = document.querySelectorAll('.trashimage');
var trashbins = document.querySelectorAll('.trashbin');
var draggedItem = null;
for(var ti = 0; ti < trash_images.length; ti++)
{
	var item = trash_images[ti];
	item.addEventListener('dragstart',function(){
		draggedItem = this.id;
	});
	item.addEventListener('dragend',function(){
		setTimeout(function() {
			draggedItem = null;
		},0);
	});
}
var scoreIncreased = false;
document.getElementById("red").addEventListener('dragover',function(e){
	e.preventDefault();
});
document.getElementById("red").addEventListener('drop',function(e){
	e.preventDefault();
	var binid = this.id;
	var draggedItemBin = draggedItem.replace(/[0-9]/g, '');
	if(binid == draggedItemBin)
	{
		scoreIncreased = true;
		document.getElementById(draggedItem).style.display = 'none';
		if(scoreIncreased == true)
		{
			currentScore = document.getElementById("score").innerHTML;
			currentScore++;
			document.getElementById("score").innerHTML = currentScore;
			if(currentScore == 15)
			{
				clearTimeout(window.timerId);
				disableDragFeature();
				restartGame();
			}
		}
	}
});
document.getElementById("bluebin").addEventListener('dragover',function(e){
	e.preventDefault();
});
document.getElementById("bluebin").addEventListener('drop',function(e){
	e.preventDefault();
	var binid = this.id.replace('bin','');
	var draggedItemBin = draggedItem.replace(/[0-9]/g, '');
	if(binid == draggedItemBin)
	{
		scoreIncreased = true;
		document.getElementById(draggedItem).style.display = 'none';
		if(scoreIncreased == true)
		{
			currentScore = document.getElementById("score").innerHTML;
			currentScore++;
			document.getElementById("score").innerHTML = currentScore;
			if(currentScore == 15)
			{
				clearTimeout(window.timerId);
				disableDragFeature();
				restartGame();
			}
		}
	}
});
document.getElementById("greenbin").addEventListener('dragover',function(e){
	e.preventDefault();
});
document.getElementById("greenbin").addEventListener('drop',function(e){
	e.preventDefault();
	var binid = this.id.replace('bin','');
	var draggedItemBin = draggedItem.replace(/[0-9]/g, '');
	if(binid == draggedItemBin)
	{
		scoreIncreased = true;
		document.getElementById(draggedItem).style.display = 'none';
		if(scoreIncreased == true)
		{
			currentScore = document.getElementById("score").innerHTML;
			currentScore++;
			document.getElementById("score").innerHTML = currentScore;
			if(currentScore == 15)
			{
				clearTimeout(window.timerId);
				disableDragFeature();
				restartGame();
			}
		}
	}
});
document.getElementById("yellow").addEventListener('dragover',function(e){
	e.preventDefault();
});
document.getElementById("yellow").addEventListener('drop',function(e){
	e.preventDefault();
	var binid = this.id;
	var draggedItemBin = draggedItem.replace(/[0-9]/g, '');
	if(binid == draggedItemBin)
	{
		scoreIncreased = true;
		document.getElementById(draggedItem).style.display = 'none';
		if(scoreIncreased == true)
		{
			currentScore = document.getElementById("score").innerHTML;
			currentScore++;
			document.getElementById("score").innerHTML = currentScore;
			if(currentScore == 15)
			{
				clearTimeout(window.timerId);
				disableDragFeature();
				restartGame();
			}
		}
	}
});