window.SetVolume = function(val)
{
  var player = document.getElementById('bgm');
  console.log('Before: ' + player.volume);
  player.volume = val / 100;
  console.log('After: ' + player.volume);
}

// function play(){
//     var audio = document.getElementById("audio");
//     audio.play();
//   }
