document.addEventListener('DOMContentLoaded',function()
{
    const board = document.getElementById('board');
    const statusy = document.getElementById('status');
    const newgame = document.querySelector('.btn');
    if (board && statusy && newgame)
    {
        const squares = board.getElementsByTagName('div');
        const game = new Array(squares.length).fill('E');
        var currentMove = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        var gameOver = false;
        for (let i = 0; i < squares.length;i++)
        {
            squares[i].classList.add('square');

            squares[i].addEventListener('mouseover',function()
            {
                squares[i].classList.add('hover')
            });

            squares[i].addEventListener('mouseout',function()
            {
                squares[i].classList.remove('hover')
            });

            squares[i].addEventListener('click',function()
            {
                if(!gameOver && game[i]=== 'E')
                {
                    if(currentMove == 2)
                    {
                        game[i] = 'X';
                        squares[i].innerHTML ='X'
                        squares[i].classList.add('X');
                        currentMove =1;
                    }else
                    {
                        game[i] = 'O';
                        squares[i].innerHTML = 'O';
                        squares[i].classList.add('O');
                        currentMove =2;
                    }
                    winCheck();
                }
            });
        }
        newgame.addEventListener('click',function()
        {
            game.fill('E');
            gameOver=false;
            statusy.textContent='Move your mouse over a square and click to play an X or an O.';
            statusy.classList.remove('you-won');
            currentMove = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            for(let i =0;i < squares.length;i++)
            {
                squares[i].innerHTML = '';
                squares[i].classList.remove('X','O');
            }
        });

        function winCheck()
        {
            const winCombos =
            [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], 
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6] 

            ];
            for (const combo of winCombos)
            {
                const [a, b, c] =combo;
                if (game[a]!=='E' && game[a]===game[b] && game[a] === game[c])
                {
                    gameOver =true;
                    statusy.textContent =`Congratulations! ${game[a]} is the Winner!`;
                    statusy.classList.add('you-won');
                    return;
                }
            }
            if (!game.includes('E'))
            {
                gameOver= true;
                statusy.textContent = "It's a tie!";
            }
        }

    }
    
});
