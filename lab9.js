function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
    button.innerHTML = 'Щелчок'
}

function student1(button) {
    if(button.innerHTML == 'Прокина')
        button.innerHTML = 'Ольга';
    else
    button.innerHTML = 'Прокина'
}
    
function knopka(button) {
    if(button.innerHTML == 'Нажми сюда') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'red';
    }

        else if(button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';  
        button.style.color = 'green';
    }
         
    else if(button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';   
        button.style.color = 'blue';
    }
        
    else {
        button.innerHTML = 'Нажми сюда' 
        button.style.color = 'gray'; 
    }
