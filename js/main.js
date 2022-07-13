let resume ={"Name":"Peter Bernanth","MailID":"peterbernanth@gmail.com","Mobile":"9698384808",
          "Image":"https://i.ibb.co/njLpZ20/In-Shot-20220710-011206454.jpg","Careerobjective":"To be involved in a career where I can venture into the diverse aspects of engineering with my technical knowledge and skills to serve the organization as well as the society.","Skills":["Leadership Skills","Apptitude skills","Innovative","Quick Learner"],"Education":[{"Course":"SSLC","Year":"2015","Institute":"LMS Boys Higher Secondary School, Marthandam","Percentage":"93.6%"},{"Course":"HSC","Year":"2017","Institute":"Good Shepherd Matric And Higher Secondary School,Marthandam","Percentage":"94.3%"},{"Course":"B.E Mechanical Engineering","Year":"2021","Institute":"St.Xaviers Catholic College of Engineering, Chunkankadai","Percentage":"7.79 CGPA"}],"Languageknown":["Tamil","English","Malayalam"],"work_experience":[{"company":"FOXCONN","designation":"Automation Engieering Trainee","duration":"4 months (August 2021 - November 2021)"},{"company":"CAPESTART","designation":"Associate Software Engineer","duration":"Till Date"}],"personal_details":[{"dob":"","father_name":"John Peter","address":"30/126, Vathiyakudi Vilai, Kodumkulam, Marthandam, Kanyakumari - 629 159"}],"Hobbies":["Singing","Music"],"declaration":"I declare that the above details and information are true to my knowledge"}
;

function addDetails(key, value, index = null, indexkey = null) {
  switch (key) {
    case "Skills":
      let temp = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].selected) {
          temp.push(value[i].value);
        }
      }
      resume.Skills = temp;

      break;
    case "Education":
      if (!resume[key]) {
        resume[key] = [];
      }
      if (!resume[key][index]) {
        resume[key][index] = {};
      }
      resume[key][index][indexkey] = value;
      break;
    case "Languageknow":
      let tmp = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].selected) {
          tmp.push(value[i].value);
          console.log(value[i].value);
        }
      }
      resume.Languageknown = tmp;

      break;
    case "Hobbies":
      let temp2 = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].selected) {
          temp2.push(value[i].value);
        }
      }
      resume.Hobbies = temp2;
      break;
    case "personal_details":
      if (!resume[key]) {
        resume[key] = [];
      }
      if (!resume[key][index]) {
        resume[key][index] = {};
      }
      resume[key][index][indexkey] = value;
      break;
    case "work_experience":
      if (!resume[key]) {
        resume[key] = [];
      }
      if (!resume[key][index]) {
        resume[key][index] = {};
      }
      resume[key][index][indexkey] = value;
      break;
    default:
      resume[key] = value;
      break;
  }
  display();
}
function display() {
  document.getElementById("code").innerHTML = JSON.stringify(resume);
}
function createObj() {
  $.ajax({
    url: "http://karka.academy/api/action.php",
    type: "post",
    data:{user:"peterbernanth",resume:resume,request:"create_resume"},
    success: function (res) {
      // let a=JSON.parse(res)
      console.log(res);
      if (res) {
        console.log("Success");
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
  dispData();
}
function dispData(){
    
  $.ajax({
      url:'https:karka.academy/api/action.php',
      type:'get',
      data:{request:"get_user_resume",user:"peterbernanth"},
      success:function(response){
          console.log(response)
          let tr_container='';
          let data_parsed=JSON.parse(response);
          console.log(data_parsed)
          for(let i=0;i<data_parsed.data.length;i++){
              tr_container+=`<tr>
                               <td>${data_parsed.data[i].id}</td>
                               <td>${data_parsed.data[i].user}</td>
                               <td>${data_parsed.data[i].datetime}</td>
                               <td><a href="view.html?id=${data_parsed.data[i].id}" target="_blank">view</a>
                               <button onclick="deleteResume(${data_parsed.data[i].id})">delete</button></td>
                              </tr>`
          }
          $('#t_body').html(tr_container);
      }

  })
}
function deleteResume(del_id){
  console.log(del_id)
  $.ajax({
      url:'https:karka.academy/api/action.php',
      type:'get',
      data:{request:"delete_user_resume",user:'peterbernanth',id:del_id},
      success:function(result){
        dispData();
      }
  })
}