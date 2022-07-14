let resume = {}

function addDetails(key,value,index=0,indexkey){
    if(key=='skill'){
        let tmp=[];
        for(let i=0;i<value.length;i++){
            if(value[i].selected){
                tmp.push(value[i].value)
            }
        }
        resume.skill=tmp;
        console.log(tmp);
    }
    else if(key=='certification'){
        let tmp=[];
        for(let i=0;i<value.length;i++){
            if(value[i].selected){
                tmp.push(value[i].value)
            }
        }
        resume.certification=tmp;
        
    }
    else if(key=='education'){
      if(!resume[key]){
        resume[key]=[];
      }
      if(!resume[key][index]){
        resume[key][index]={}
      }
      resume[key][index][indexkey]=value
      console.log(resume)
    }
    else if(key=='contact'){
        if(!resume[key]){
            resume[key]={}
          }
        resume[key][indexkey]=value
        console.log(resume)
    }
    else if(key=='personal'){
        if(indexkey!='language'){
        if(!resume[key]){
            resume[key]={}}
          
        resume[key][indexkey]=value
        console.log(resume)}
        
        else{
            if(!resume[key]){
                resume[key]={}}
                let tmp=[];
                for(let i=0;i<value.length;i++){
                    if(value[i].selected){
                        tmp.push(value[i].value)
                    }
                }
               resume.personal.language=tmp;
                console.log(tmp);
         }}
    else
    {
    resume[key] = value;}
    display()
}

function display(){
    document.getElementById('code').innerHTML = JSON.stringify(resume)
}
function api(){
    $.ajax({
        url:'http://karka.academy/api/action.php',
        type:'post',
        data:{
            request:'create_resume',
            user:'stefhi',
           // resume:{"name":"stefhi","executive_summary":"hello","declaration":"mtm","date":"23-09-1999","place":"mtm","skill":["skill-1","skill-2","skill-3","skill-4"],"certification":["cer-1","cer-2","cer-3"],"education":[{"course":"sslc","percentage":"90","board":"stateboard"},{"course":"12","percentage":"91","board":"stateboard"},{"course":"be","percentage":"91","board":"anna university"}],"contact":{"address":"mtm","phone_number":"8300540397","email":"stefhi238@gmail"},"personal":{"dob":"23-08-199","gender":"Female","martial":"married","language":["english","tamil","malayalam"]}}   
           resume    
        },
        success:function(res){
            console.log(res);
        }
    })
}
function getdata(){
    let tr_container="";
    $.ajax({
        url:'http://karka.academy/api/action.php',
        type:'get',
        data:{
            request:'get_user_resume',
            user:'stefhi'
        },
        success:function(response){
         let a=JSON.parse(response);
         console.log(a);
            for(let i=0;i<a.data.length;i++){
                tr_container+=`<tr>
                            <td>${a.data[i].id}</td> 
                            <td>${a.data[i].user}</td> 
                            <td>${a.data[i].datetime}</td> 
                            <td><a target="_blank" href='js/view.html?id=${a.data[i].id}'>view</a> <button onclick="delete_resume(${a.data[i].id})" type="button">delete</button></td>
                            </tr>`
            }
            
            $('#main').html(tr_container);
        }
    })
}
function delete_resume(r_id){
    
    $.ajax({
        url:'http://karka.academy/api/action.php',
        type:'get',
        data:{
            request:'delete_user_resume',
            user:'stefhi',
            id:r_id
        },
        success:function(resp){
            
             getdata();
        }
    })

}
