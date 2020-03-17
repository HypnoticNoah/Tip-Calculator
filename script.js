function calTip() {
    var ques = prompt('What is your total?');
    var Tip = (ques) *0.15;
    var h1 = document.createElement('h1');
    var text = document.createTextNode('You should tip $' + Tip + '!');
    h1.setAttribute('id', 'calTip');
    h1.appendChild(text);
    document.getElementById('tip-result').appendChild(h1)();
}
function reset() {
    location.reload();
}
function divideTip () {
    var ques1 = prompt('What is your total with tax?');
    var ques2 = prompt('How many people are paying?');
    var Tip = (ques1) / (ques2);
    var h1 = document.createElement('h1');
    var text = document.createTextNode('Each person should pay $' + Tip + '!');
    h1.setAttribute('id', 'divideTip');
    h1.appendChild(text);
    document.getElementById('tip-result1').appendChild(h1)();
}

