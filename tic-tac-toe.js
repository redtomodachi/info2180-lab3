document.addEventListener('DOMContentLoaded',function()
{
    const board = document.getElementById('board');
    if (board)
    {
        const squares = board.getElementsByTagName('div');
        for (let i = 0; i < squares.length;i++)
        {
            squares[i].classList.add('square');
            squares[i].classList.add('empty');
        }

    }
    
});
