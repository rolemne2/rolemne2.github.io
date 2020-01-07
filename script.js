function playGame(){
    let help = document.querySelector('.rules');
    let tip = document.querySelector('#gamerule');
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let usr = document.querySelector('#userchoice')
    let pc = document.querySelector('#pcchoice');
    let scusr = document.querySelector('#user');
    let scpc = document.querySelector('#pc');
    let scr = document.querySelector('#round');
    let drw = document.querySelector('#draw');
    var numberOfRounds = prompt('How many rounds would you like to play ?(click "Cancel" to stop)');
    var rounds = 0;
    var pcScore = 0;
    var userScore = 0;
    var draws = 0;

    if(numberOfRounds == '' || numberOfRounds == '0' || (/[^\d]/ig).test(numberOfRounds)){
        window.location.href = './index.html';
    }

    function drawCounter(){
        draws += 1;
        drw.innerText = `Draws : ${draws}`;
    }

    function plusUser(){
        userScore += 1;
        scusr.innerText = `User : ${userScore}`;
    }

    function plusPc(){
        pcScore += 1;
        scpc.innerText = `PC : ${pcScore}`;
    }

    function roundCounter(){
        rounds += 1;
        scr.innerText = `ROUND : ${rounds}`;
    }

    function allZero(){
        pcScore = 0;
        userScore = 0;
        rounds = 0;
        draws = 0;
        numberOfRounds = 0;
        drw.innerText = `Draws : ${draws}`;
        scusr.innerText = `User : ${userScore}`;
        scpc.innerText = `PC : ${pcScore}`;
        scr.innerText = `ROUND : ${rounds}`;
    }

    function update(){
        drw.innerText = `Draws : ${draws}`;
        scusr.innerText = `User : ${userScore}`;
        scpc.innerText = `PC : ${pcScore}`;
        scr.innerText = `ROUND : ${rounds}`;
    }

    function match(){
        if(rounds == +numberOfRounds){
            if(userScore > pcScore) {
                update();
                setTimeout(function(){
                    alert('User has won !');
                },100);
            }
            if(pcScore > userScore){
                update();
                setTimeout(function(){
                    alert('PC has won !');
                },100);
            }
            if(pcScore == userScore){
                update();
                setTimeout(function(){
                    alert('Draw Game !');
                },100);
                
            }
            setTimeout(function(){
                location.reload();
            }, 1000);
            setTimeout(function(){
                allZero();
            }, 500);
        }
    }

    help.addEventListener('mouseover', function(){
        tip.style.opacity = 1;
    })

    help.addEventListener('mouseout', function(){
        tip.style.opacity = 0;
    })

    rock.addEventListener('click', function(){
        let userChoice = 1;
        usr.innerHTML = '<span class="whosturn">USER</span><img src="rock.png">'
        let pcChoice = Math.floor(1 + (Math.random() * (4-1)));
        pc.innerHTML = `<img src="${pcChoice}.png"><span class="whosturn">PC</span>`
        if(userChoice == pcChoice){
            drawCounter();
        }
        else if(pcChoice == 2){
            plusPc();
        }
        else if(pcChoice == 3){
            plusUser();
        }
        roundCounter();
        match();
    })

    paper.addEventListener('click', function(){
        let userChoice = 2;
        usr.innerHTML = '<span class="whosturn">USER</span><img src="paper.png">'
        let pcChoice = Math.floor(1 + (Math.random() * (4-1)));
        pc.innerHTML = `<img src="${pcChoice}.png"><span class="whosturn">PC</span>`
        if(userChoice == pcChoice){
            drawCounter();
        }
        else if(pcChoice == 1){
            plusUser();
        }
        else if(pcChoice == 3){
            plusPc();
        }
        roundCounter();
        match();
    })

    scissors.addEventListener('click', function(){
        let userChoice = 3;
        usr.innerHTML = '<span class="whosturn">USER</span><img src="scissors.png">'
        let pcChoice = Math.floor(1 + (Math.random() * (4-1)));
        pc.innerHTML = `<img src="${pcChoice}.png"><span class="whosturn">PC</span>`
        if(userChoice == pcChoice){
            drawCounter();
        }
        else if(pcChoice == 1){
            plusPc();
        }
        else if(pcChoice == 2){
            plusUser();
        }
        roundCounter();
        match();
    })
}

playGame();