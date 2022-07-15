let resume = {
};


function addDetails(key,value,index=null,indexKey=null)
{
  if(key=="languages")
  {
      let lang=[];
    for(var i=0;i<value.length;i++)
    {
      if(value[i].selected)
      {
        lang.push(value[i].value);
      }
    }
    resume.languages=lang;
  }
  else if(key=="hobbies")
  {
    let hoby=[];
    for(var i=0;i<value.length;i++)
    {
      if(value[i].selected)
      {
        hoby.push(value[i].value);
      }
    }
    resume.hobbies=hoby;
  }
  else if(key=="web_technologies")
  {
    let web=[];
    for(var i=0;i<value.length;i++)
    {
      if(value[i].selected)
      {
        web.push(value[i].value);
      }
    }
    resume.web_technologies=web;
  }
  else if(key=="work_ide")
  {
    let ide=[];
    for(var i=0;i<value.length;i++)
    {
      if(value[i].selected)
      {
        ide.push(value[i].value);
      }
    }
    resume.work_ide=ide;
  }
  else if(key=="programming_lang")
 {
    if(!resume[key])
    {
      resume[key]=[];
    }
    if(!resume[key][index])
    {
      resume[key][index]={};
    }
    resume[key][index][indexKey]=value;
 }
 else if(key=="project_details")
 {
    if(!resume[key])
    {
      resume[key]=[];
    }
    if(!resume[key][index])
    {
      resume[key][index]={};
    }
    resume[key][index][indexKey]=value;
 }
 else if(key=="education")
 {
    if(!resume[key])
    {
      resume[key]=[];
    }
    if(!resume[key][index])
    {
      resume[key][index]={};
    }
    resume[key][index][indexKey]=value;
 }
  else if(key=="personal_details")
  {
    if(!resume[key])
    {
      resume[key]=[];
    }
    if(!resume[key][index])
    {
      resume[key][index]={};
    }
    resume[key][index][indexKey]=value;
  }
  else
  {
    resume[key]= value;
  }
  display();
} 

function display()
{
    document.getElementById('code').innerHTML = JSON.stringify(resume);
}
function upload_api()
{
    $.ajax({
            url:"http://karka.academy/api/action.php",
            type:"post",
            data:{user:"jino",
            request:"create_resume",
            resume: resume},
            success:function(res)
                    {
                      console.log(res);
                      $("#out").html("Success");
                    },
            error:function(err)
                 {
                    console.log(err);
                    $("#out").html("Error");
                 }   

          });
}
function load()
{
    $.ajax({
        url:"http://karka.academy/api/action.php",
        type:"get",
        data:{ request:"get_user_resume",user:"jino"},
        success:function(response){
           console.log(JSON.parse(response));
           let res=JSON.parse(response);
           let tr_contents="";
           for(var i=0;i<res.data.length;i++)
           {
              tr_contents+=`<tr>
                            <td>${res.data[i].id}</td>
                            <td>${res.data[i].user}</td>
                            <td>${res.data[i].data}</td>
                            <td>${res.data[i].datetime}</td>
                            <td><a href="view.html?id=${res.data[i].id}" target="_blank">View</a><button type="button" class="btn btn-danger" onclick="delete_data(${res.data[i].id})">Delete</button></td>`
           }
           $("#content").html(tr_contents);
        },
        error:function(err){
          $("#content").html("Error");
        }
    });
}
function delete_data(getId)
{
  console.log(getId);
   $.ajax({
        url:"http://karka.academy/api/action.php",
        type:"get",
        data:{user:"jino",id:getId,request:"delete_user_resume"},
        success:function(result){
          console.log(result);
          load();
        },
        error:function(error){
          console.log(error);
        }
   });
}