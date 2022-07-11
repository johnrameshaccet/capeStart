let resume = {}

function addDetails(label,value){
    resume[label] = value;
    display();
}

function display(){
    document.getElementById('code').innerHTML = JSON.stringify(resume)
}