
var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
alert(koopId);
$(document).ready(function(){
    $.ajax({
        url:"http://karka.academy/api/action.php",
        type:"get",
        data:{user:"jino",id:koopId,request:"get_resume_by_id"},
        success:function(display){
             console.log(display);
             let val=JSON.parse(display);
             console.log(val);
             let total=JSON.parse(val.data.data);
             console.log(total);
             $("#image_ji").attr("src",total.image);
             $("#mble").html(total.mobile_no);
             $("#gmail").html(total.email);
             $("#object").html(total.career_objective);
             $("#declar").html(total.declaration);
             $("#pro_title").html(total.project_details[0].project_title);
             $("#pro_desc").html(total.project_details[0].description);
             console.log(total.project_details[0].description)
             $("#nm").html(total.name);
             $("#db").html(total.personal_details[0].dob);
             $("#fnm").html(total.personal_details[0].father_name);
             $("#str").html(total.personal_details[0].street);
             $("#dist").html(total.personal_details[0].district);
             $("#ste").html(total.personal_details[0].state);
             $("#count").html(total.personal_details[0].country);
             $("#pcod").html(total.personal_details[0].post_code);

             let list_lang="";
             for(var i=0;i<total.languages.length;i++)
             {
                list_lang+=`
                       <ul>
                         <li>${total.languages[i]}</li>
                       </ul>
                `
             }
             $("#know_lang").html(list_lang);
             let list_hoby="";
             for(var i=0;i<total.hobbies.length;i++)
             {
                list_hoby+=`
                       <ul>
                         <li>${total.hobbies[i]}</li>
                       </ul>
                `
             }
             $("#hobby").html(list_hoby);
             let list_frame="";
             for(var i=0;i<total.work_ide.length;i++)
             {
                list_frame+=`
                       <ul>
                         <li>${total.work_ide[i]}</li>
                       </ul>
                `
             }
             $("#frame").html(list_frame);
             let list_tech="";
             for(var i=0;i<total.web_technologies.length;i++)
             {
                list_tech+=`
                       <ul>
                         <li>${total.web_technologies[i]}</li>
                       </ul>
                `
             }
             $("#web_tech").html(list_tech);
             let list_records="";
             for(var i=0;i<total.education.length;i++)
             {
                list_records+=`
                       <tr>
                         <td>${total.education[i].course}</td>
                         <td>${total.education[i].board}</td>
                         <td>${total.education[i].institution}</td>
                         <td>${total.education[i].passed_out}</td>
                         <td>${total.education[i].percentage}</td>
                       </tr>
                `
             }
             $("#education").html(list_records);
             let list_skills="";
             for(var i=0;i<total.programming_lang.length;i++)
             {
                list_skills+=`
                <ul><li>
                <span>${total.programming_lang[i].program}</span>
                <span class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style="width:${total.programming_lang[i].percentage}" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </span>
                  </li></ul>
                   
                 
                `
             }
             $("#langs").html(list_skills);


        },
        error:function(err){
            console.log(err);
        }
    });
})