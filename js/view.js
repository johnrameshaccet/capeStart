var baseUrl = (window.location).href; // You can also use document.URL
    var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    // alert(koopId)
    $(document).ready(function(){
        $.ajax({
            url:'http://karka.academy/api/action.php',
            type:'get',
            data:{
              user:'stefhi',
              request:'get_resume_by_id',
              id:koopId

            },
            success:function(response){
            console.log(response)
            console.log(JSON.parse(response).data.data)
            let Obj=JSON.parse(response).data.data
            Obj = JSON.parse(Obj)
            console.log(Obj)
            $('#name').html(Obj.name)
            $('#executive_summary').html(Obj.executive_summary) 
            $('#declaration').html(Obj.declaration) 
            $('#date').html(Obj.date)
            $('#place').html(Obj.place)
            
            let skill_container='';
            for (let i=0;i<Obj.skill.length;i++){
                skill_container+=`<li>${Obj.skill[i]}</li>`
            }
            $('#skills_ulist').html(skill_container)

            let cer_container='';
            for (let i=0;i<Obj.certification.length;i++){
                cer_container+=`<li>${Obj.certification[i]}</li>`
            }
            $('#cer_ulist').html(cer_container)

            
            let edu_container=''
            for(let i=0;i<Obj.education.length;i++){
                edu_container+=`<li>
                                <b>${Obj.education[i].course}</b><br>
                                   ${Obj.education[i].percentage}<br>
                                   ${Obj.education[i].board}
                                </li>`
            }
            console.log(edu_container)
            $('#edu').html(edu_container)

            let cont_container=''
            cont_container=`<p>Address:${Obj.contact.address}</p>
                            <p>phone number:${Obj.contact.phone_number}</p>
                            <p>Email:${Obj.contact.email}</p>`
            $('#add').html(cont_container)

            let personal_container=''
            personal_container=`<p>DOB: ${Obj.personal.dob}</p>
            <p>Gender: ${Obj.personal.gender}</p>
            <p>martial: ${Obj.personal.martial}</p>`
            $('#personal').html(personal_container)
            
            let lang_container=''
            
            for (let i=0;i<Obj.personal.language.length;i++){
                lang_container+=`<li>${Obj.personal.language[i]}</li>`
            }
            console.log(Obj.personal.language)
            $('#lang_ulist').html(lang_container)





                
            }
        })
    })