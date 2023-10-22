document.addEventListener('DOMContentLoaded',function()
{
    const board = document.getElementById('board');
    if (board)
    {
        const squares = board.getElementsByTagName('div');
        const game = new Array(squares.length).fill('E');
        var currentMove = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
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
            });
        }

    }
    
});
