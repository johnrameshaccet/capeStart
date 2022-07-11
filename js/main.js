let resume = {}

function addDetails(key,value){
    resume[key] = value;
    display()
}

function display(){
    document.getElementById('code').innerHTML = JSON.stringify(resume)
}