var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
alert(koopId);

$(document).ready(function(){
    $.ajax({
        url:'https:karka.academy/api/action.php',
        type:'get',
        data:{request:"get_resume_by_id",user:'peterbernanth',id:koopId},
        success:function(response){
            console.log(JSON.parse(response).status)
            console.log(response)
            console.log(JSON.parse(response).data.data)
            let finalObj=JSON.parse(response).data.data
            finalObj = JSON.parse(finalObj)
            $('#name').html(finalObj.Name)
            console.log(finalObj["Name"])
            $('#mobile').html(finalObj.Mobile)
            $('#mailid').html(finalObj.MailID)
            $('#image').attr("src",finalObj.Image)
            $('#career_objective').html(finalObj.Careerobjective)
            let skill_container='';
            for (let i=0;i<finalObj.Skills.length;i++){
                skill_container+=`<li>${finalObj.Skills[i]}</li>`
            }
            console.log(skill_container)
            $('#skills_ul').html(skill_container)
            let language_known_container='';
            for (let i=0;i<finalObj.Languageknown.length;i++){
                language_known_container+=`<li>${finalObj.Languageknown[i]}</li>`
            }
            console.log(language_known_container)
            $('#language_known_ol').html(language_known_container)
            let hobbies_container='';
            for (let i=0;i<finalObj.Hobbies.length;i++){
                hobbies_container+=`<li>${finalObj.Hobbies[i]}</li>`
            }
            console.log(hobbies_container)
            $('#hobbies_ul').html(hobbies_container)
            console.log(finalObj.Education[0].Course)
            let edu_container=''
            for(let i=0;i<finalObj.Education.length;i++){
                edu_container+=`<li>
                                <b>${finalObj.Education[i].Course},${finalObj.Education[i].Year}</b><br>
                                   ${finalObj.Education[i].Institute}<br>
                                   ${finalObj.Education[i].Percentage}
                                </li>`
            }
            console.log(edu_container)
            $('#edu').html(edu_container)
            let work_exp_container=''
            for(let i=0;i<finalObj.work_experience.length;i++){
                work_exp_container+=`<tr>
                                    <td>${finalObj.work_experience[i].company}</td>
                                    <td>${finalObj.work_experience[i].designation}</td>
                                    <td>${finalObj.work_experience[i].duration}</td>                  
                                   </tr>`
                                   
                                
            }
            console.log(work_exp_container)
            $('#wrk').html(work_exp_container)
            let personal_container=''
            for(let i=0;i<finalObj.personal_details.length;i++){
                personal_container+=`<li>Father’s name : ${finalObj.personal_details[0].father_name}</li>
                <li>Date of Birth :${finalObj.personal_details[0].dob}</li>
                <li>Address:${finalObj.personal_details[0].address}</li>`
            }
            console.log(personal_container)
            $('#personal_details').html(personal_container)
            $('#declaration').html(finalObj.declaration)


        }
    })
})
