for(let i = 0; i < 50; i++){
    let star = $('<div></div>').addClass('star star'+i);
    $('.intro').append(star);
}

for(let i = 0; i < 9; i++){
    let image = $('<div></div>').addClass('img'+i);
    let blueprint = $('<div></div>').addClass('bp bp'+i);
    blueprint.append(image);
    $('.projects').append(blueprint);
    
}