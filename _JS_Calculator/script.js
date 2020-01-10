let calculator = document.querySelector('.calculator');
let keys = calculator.querySelector('.calculator--keys');

let actionKey ='';
let history = [0,0,0];

keys.addEventListener("click", e =>{
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const display = calculator.querySelector('.calculator--display')
        if(!action){
            if(display.innerHTML =='0'){
                display.innerHTML = key.innerHTML;
            }
            else {
                display.innerHTML += key.innerHTML;
            }
        } else if(action == 'decimal'){
            if(display.innerHTML.includes('.') == false){
                display.innerHTML += '.';
            }
        } else if(action == 'clear'){
            display.innerHTML = '0';
        } else if(
            action == 'add' || 
            action == 'substract' ||
            action == 'multiply' ||
            action == 'divide'
        ){
            history[0] = parseFloat(display.innerHTML);
            display.innerHTML = 0;

            actionKey = action;
        }
        else if(action == 'clear'){
            display.innerHTML = '0';
            history[0] = 0;
            history[1] = 0;
            history[2] = 0;
            console.log(history[0]);
        } else if(action == 'calculate'){
            history[1] = parseFloat(display.innerHTML);

            switch(actionKey){
                case 'add': history[2] = history[0] + history[1]; break;
                case 'substract': history[2] = history[0] - history[1]; break;
                case 'multiply' : history[2] = history[0] * history[1]; break;
                case 'divide' : history[1] == 0?
                                        history[2] = 'Cannot divide by 0' : history[2] = history[0] / history[1];
            }
            display.innerHTML = history[2];
        }
    }
})