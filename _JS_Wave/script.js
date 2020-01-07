for(let i = 1; i<=81; i++){
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.classList.add('bub'+i);

    document.getElementById('wrapper').appendChild(bubble);
}