
let area = document.getElementById('area');//area in calc in which we will giveinput
buttons = document.querySelectorAll('button');
let area_value= ''//by default we put it empty 
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            area_value += buttonText;
            area.value = area_value;
        }
        else if (buttonText == 'C') {
            area_value = "";
            area.value = area_value;
        }
        
        else if(buttonText=='=')
        {
            area.value=eval(area_value)//means the text inside the are-value variable will be evaluated and shown on the screen by storing it ////in area.value
        }
        else{
            area_value += buttonText;
            area.value = area_value;
        }
    });
}
