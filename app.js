/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var rsPlayer=[0,0],newGame=false,saveRandom=0,player=0;
document.querySelector('.btn-new').addEventListener('click', function() {
    document.querySelector('.btn-new').style.display='none';
    newGame=true;
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
    document.querySelector('.dice').style.display='block';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    for(var i=0;i<2;i++){
        rsPlayer[i]=0;
    }
    saveRandom=0;
    document.querySelector('#current-0').innerHTML='0';
    document.querySelector('#current-1').innerHTML='0';
    document.querySelector('#score-0').innerHTML='0';
    document.querySelector('#score-1').innerHTML='0';
});
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(newGame){
        var currentC=document.querySelector('#current-'+player);
        var numRandom=Math.floor(Math.random() * 6) + 1;
        console.log(numRandom);
        var dado=document.querySelector('.dice');
        if(numRandom!=1){
            saveRandom+=numRandom;
            dado.src='dice-'+numRandom+'.png';
            currentC.innerHTML=saveRandom;
        }else{
            saveRandom=0;
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            currentC.innerHTML="0";
            console.log('player:'+player);
            if(player==0){
                player=1;
            }else{
                player=0;
            }
            document.querySelector('.player-'+player+'-panel').classList.add('active');
            console.log('player1:'+player);
            
            }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    document.querySelector('#current-'+player).innerHTML=0;
    document.querySelector('.player-'+player+'-panel').classList.remove('active');
    rsPlayer[player]+=saveRandom;
    document.querySelector('#score-'+player).innerHTML=rsPlayer[player];
        if(rsPlayer[player]>=100){
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.btn-hold').style.display='none';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.btn-new').style.display='block';
            document.querySelector('#name-'+player).innerHTML='Winner!';
            document.querySelector('.player-'+player+'-panel').classList.add('winner');
            newGame=false;
            for(var i=0;i<2;i++){
                rsPlayer[i]=0;
            }
            }else{
                if(player==0){
                    player=1;
                }else{
                    player=0;
                }
            document.querySelector('.player-'+player+'-panel').classList.add('active');
            saveRandom=0;
            }
        
});
document.querySelector('#popup').addEventListener('click', function() {
    document.querySelector('#popup').style.display='none';
});

