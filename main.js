// post button ###############################
function postprocess(){
    var posting = document.getElementById('posting')
    posting.style.display='block'
}
function discardpost(){
    var posting = document.getElementById('posting')
    posting.style.display='none' 
}
function openProfilebox(){
  var profilebox = document.getElementById("profilebox")
  profilebox.style.display="block"
}
function closeProfilebox(){
  var profilebox = document.getElementById("profilebox")
  profilebox.style.display="none"
}
function opensection(){
  var earnings = document.getElementById("earnings")
  earnings.style.display="block"
}s
function openwindow(){
  var profilebox = document.getElementById("profilebox")
  var personal_content = document.getElementById("personal-content")
  personal_content.style.right="10px"  
}
function closewindow(){
  var personal_content = document.getElementById("personal-content")
  personal_content.style.right="-400px"
}
        // alert button
function closealert(){
  var closebtn = document.getElementById("formalert")
  closebtn.style.display="none"
        }


// Function to handle post upload
// function uploadPost() {
//     //GETTING USER INPUTS
//       var postTitle = document.getElementById("postTitle").value.trim();
//       var postContent = document.getElementById("postContent").value;
//       var postImage = document.getElementById("postImage").files[0];
     
    
//     // Check if title and content are not empty
//        if (postTitle === "" || postContent ==="" ) {
//         var formalert = document.getElementById("formalert")
//         formalert.style.display="block"
        
//         return;
//           //  alert("Please enter post title and content.");
//           //  return;
//        }
    
//     // Prepare post data (you can send this data to your server for further processing)
//        var postData = new FormData();
//        postData.append("title", postTitle);
//        postData.append("content", postContent);
//        if (postImage) {
//            postData.append("image", postImage);
//        }
    
//     // You can perform AJAX request to send the post data to your server
//     // For demonstration purposes, we'll just log the post data to the console
//         console.log("Post Data:", postData)
//     // Reset form fields after upload
//         document.getElementById("postForm").reset();
    
//     // Create a new div element
//       var newDiv = document.createElement("div");
//     // Add a class for styling (optional)
//       newDiv.className = "postbox";
      
//     //new div element for post- header
//       var postheader = document.createElement('div')
//     //add class to new div
//       postheader.classList.add("top")
//       newDiv.appendChild(postheader)
//     //div for profiles photo
//         var profilePicture = document.getElementById("profilePicture")
//         var profilepicturesource = profilePicture.src
//         var userimage = document.createElement('img')
//         userimage.src =profilepicturesource
//         userimage.classList.add("profileimage")
        
//         postheader.appendChild(userimage)
//     //div for posts title
//         var username = document.createElement('div')
//         username.classList.add("topicbox")
//         postheader.appendChild(username)
//     //div for profiles name
//       var userName = document.createElement('h2')
     
//        userName.textContent=postTitle
//        username.appendChild(userName)
       
//     //posting time
//        var currentTime = new Date();
//     // Format time as HH:MM:SS
//       var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
//       var formattedTime = currentTime.toLocaleDateString('en-US', options);
//     // Create a paragraph element to display the time
//       var timeParagraph = document.createElement("span");
//       timeParagraph.textContent = formattedTime;
//     // Append time paragraph to new div
//       username.appendChild(timeParagraph);
       
       
//     //new div for post body
//         var postbody = document.createElement('div')
//         postbody.classList.add("postbody")
//         newDiv.appendChild(postbody)
        
//     //getting user input from posting form
//       var postcontent = document.createElement('p')
//       postcontent.innerText= postContent
//       postbody.appendChild(postcontent)

//       var postpic = document.createElement("img")
//       postpic.classList.add("postpic")
     
//       postcontent.appendChild(postpic)
      
    
//     //Actions
//       var actions = document.createElement("div")
//       actions.classList.add("actions")
//       newDiv.appendChild(actions)
    
//       var act1 = document.createElement("div")
//       act1.classList.add("act1")
//       actions.appendChild(act1)
//       var link = document.createElement("a")
//       link.href="Javascript:void(0)"
//       act1.appendChild(link)
//       var iconimage = document.createElement("img")
//       iconimage.src="images/like.png"
//       iconimage.classList.add("acticon")
//       link.appendChild(iconimage)
    
//       var act2 = document.createElement("div")
//       act2.classList.add("act2")
//       actions.appendChild(act2)
//       var link2 = document.createElement("a")
//       link2.href="Javascript:void(0)"
//       act2.appendChild(link2)
//       var iconimage1 = document.createElement("img")
//       iconimage1.src="images/comments.png"
//       iconimage1.classList.add("acticon")
//       link2.appendChild(iconimage1)
    
//       var act3 = document.createElement("div")
//       act3.classList.add("act3")
//       actions.appendChild(act3)
//       var link3 = document.createElement("a")
//       link3.href="Javascript:void(0)"
//       act3.appendChild(link3)
//       var iconimage2 = document.createElement("img")
//       iconimage2.src="images/tag.png"
//       iconimage2.classList.add("acticon")
//       link3.appendChild(iconimage2)
    
//       var act4 = document.createElement("div")
//       act4.classList.add("act4")
//       actions.appendChild(act4)
//       var link3 = document.createElement("a")
//       link3.href="Javascript:void(0)"
//       act4.appendChild(link3)
//       var iconimage3 = document.createElement("img")
//       iconimage3.src="images/report.png"
//       iconimage3.classList.add("acticon")
//       link3.appendChild(iconimage3)
    
      
//       var container = document.getElementById("col2");
//       container.insertBefore(newDiv, container.firstChild);

//       var postcontainer = document.getElementById('posting')
//       postcontainer.style.display=('none') 
      
//         }

function uploadPost() {
  //GETTING USER INPUTS
    var postTitle = document.getElementById("postTitle").value.trim();
    var postContent = document.getElementById("postContent").value;
    var postImage = document.getElementById("postImage").files[0];
   
  
  // Check if title and content are not empty
     if (postTitle === "" || postContent ==="" ) {
      var formalert = document.getElementById("formalert")
      formalert.style.display="block"
      
      return;
        //  alert("Please enter post title and content.");
        //  return;
     }
  
  // Prepare post data (you can send this data to your server for further processing)
     var postData = new FormData();
     postData.append("title", postTitle);
     postData.append("content", postContent);
     if (postImage) {
         postData.append("image", postImage);
     }
  
  // You can perform AJAX request to send the post data to your server
  // For demonstration purposes, we'll just log the post data to the console
      console.log("Post Data:", postData)
  // Reset form fields after upload
      document.getElementById("postForm").reset();


  //NEW POST BOX
  
  var newpostbox = document.createElement("div")
  newpostbox.classList.add("postbox")
  
  // postbox header and its elements
  var top = document.createElement("div")
  top.classList.add("top")
  newpostbox.appendChild(top)

  var profileimage = document.createElement("img")
  profileimage.classList.add("profileImage")
  profileimage.src=document.getElementById("profilePicture").src
  top.appendChild(profileimage)

  var topicbox = document.createElement("div")
  topicbox.classList.add("topicbox")
  top.appendChild(topicbox)
  
  var topics = document.createElement("h2")
  topics.textContent=postTitle
  topicbox.appendChild(topics)

   //posting time
   var currentTime = new Date();
   // Format time as HH:MM:SS
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
     var formattedTime = currentTime.toLocaleDateString('en-US', options);
   // Create a paragraph element to display the time
     var timeParagraph = document.createElement("span");
     timeParagraph.textContent = formattedTime;
   // Append time paragraph to new div
     topicbox.appendChild(timeParagraph);


  var postbody = document.createElement("div")
  postbody.classList.add("postbody")
  newpostbox.appendChild(postbody)

  var postpic =document.createElement("img")
  postpic.classList.add("postpic")
  postbody.appendChild(postpic)

  var postparagraph = document.createElement("p")
  postparagraph.textContent= postContent
  postbody.appendChild(postparagraph)

   //Actions
   var actions = document.createElement("div")
   actions.classList.add("actions")
   newpostbox.appendChild(actions)
 
   var act1 = document.createElement("div")
   act1.classList.add("act1")
   actions.appendChild(act1)
   var link = document.createElement("a")
   link.href="Javascript:void(0)"
   act1.appendChild(link)
   var iconimage = document.createElement("img")
   iconimage.src="images/like.png"
   iconimage.classList.add("acticon")
   link.appendChild(iconimage)
 
   var act2 = document.createElement("div")
   act2.classList.add("act2")
   actions.appendChild(act2)
   var link2 = document.createElement("a")
   link2.href="Javascript:void(0)"
   act2.appendChild(link2)
   var iconimage1 = document.createElement("img")
   iconimage1.src="images/comments.png"
   iconimage1.classList.add("acticon")
   link2.appendChild(iconimage1)
 
   var act3 = document.createElement("div")
   act3.classList.add("act3")
   actions.appendChild(act3)
   var link3 = document.createElement("a")
   link3.href="Javascript:void(0)"
   act3.appendChild(link3)
   var iconimage2 = document.createElement("img")
   iconimage2.src="images/tag.png"
   iconimage2.classList.add("acticon")
   link3.appendChild(iconimage2)
 
   var act4 = document.createElement("div")
   act4.classList.add("act4")
   actions.appendChild(act4)
   var link3 = document.createElement("a")
   link3.href="Javascript:void(0)"
   act4.appendChild(link3)
   var iconimage3 = document.createElement("img")
   iconimage3.src="images/report.png"
   iconimage3.classList.add("acticon")
   link3.appendChild(iconimage3)

   var container = document.getElementById("col2");
   container.insertBefore(newpostbox,container.firstChild);
  
   discardpost()

   console.log("am cool")
  //  var postcontainer = document.getElementById('posting')
  //  postcontainer.style.display=('none')


}
const fileInput=document.getElementById("fileInput")
const profileImages = document.querySelectorAll(".profileImage")



fileInput.addEventListener('change',function(){
  const file = this.files[0]
  const reader = new FileReader()

  reader.onload = function(){
    const newSource = reader.result
    profileImages.forEach(profileImage =>{
      profileImage.src = newSource
    })
    
  }
  if  (file) {
    reader.readAsDataURL(file)
  }
  

  // userImage()
})

function opennav(){
  var navigation =document.getElementById("navigation")
  navigation.style.display="block"
}
function closenav(){
  var navigation =document.getElementById("navigation")
  navigation.style.display="none"
}
    
