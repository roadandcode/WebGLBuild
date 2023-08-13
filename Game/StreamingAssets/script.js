let player
function onYouTubeIframeAPIReady(){
    console.log("API is loaded")
    player = new YT.Player("player",{
        height: 500,
        width:900,
        videoId:"ZXl0Iug0iKU",
        playerVars:{
            playersinline :1,
            autoplay:1,
            controls:1

        }
        // events:{
        //     onReady:onPlayerReady,
        //     OnStateChange: onPlayerStateChange
        // }
    })
}