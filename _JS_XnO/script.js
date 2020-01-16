for(let i = 0; i < 3; i++){
    for(let j = 0; j<3; j++){
        let button = $('<button></button>');
        button.html('');
        button.addClass(''+i);
        button.attr('id', j);

        $('.table').append(button);
    }
}


let table = [[0,0,0],
             [0,0,0],
             [0,0,0]];

let turn = ['X', 'O'];
let i = 0;


let checkWinner = function(){
    let toCheck = turn[(i+1)%2];
    let count = 0;

    for(let i = 0; i < 3; i++){
        /*
        CHECK ROW
        */
        for(let j = 0; j < 3; j++){
            table[i][j] == toCheck? count++ : count = 0;
        }

        if(count == 3){
            alert(toCheck + ' won!');
        }

        /*
        CHECK COL
        */
        for(let j = 0; j < 3; j++){
            table[j][i] == toCheck? count++ : count = 0;
        }

        if(count == 3){
            alert(toCheck + ' won!');
        }
    }

    count = 0;
    for(let j = 0; j < 3; j++){
        table[j][j] == toCheck? count++ : count = 0;
    }
    count == 3? alert(toCheck + ' won!') : count = 0; 

    for(let j = 0; j <3; j++){
        table[2-j][2-j] == toCheck? count ++ : count = 0; 
    }
    count == 3? alert(toCheck + ' won!') : count = 0;
}

$('.table button').on('click', function(){
    if($(this).html() == ''){
        table[parseInt($(this).attr('class'))][parseInt($(this).attr('id'))] = turn[i%2];
        console.log(parseInt($(this).attr('class')) + ' ' + parseInt($(this).attr('id')));
        console.log(table);
        
        $(this).html(turn[i%2]);
        i++;

        checkWinner();
    }
})