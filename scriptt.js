var find = document.getElementById("search");
find.addEventListener("click", getProfile);

//var profilephoto=document.getElementsByClassName("profile-photo");
var user_name = document.getElementById("user-name");
var followers = document.getElementById("followers");
var following = document.getElementById("following");
var repositary = document.getElementById("repositary");
//var anchor=document.getElementById("anchor");

var inputName;
var inputName = document.getElementById("profile-name").value;
var url =`https://api.github.com/users/${inputName}`;
var gitHubProfileDetails = [];
//find.addEventListner("click",getDetails);

async function getProfile() {
   
        const response = await fetch(url);
        gitHubProfileDetails = await response.json();
        console.log(gitHubProfileDetails);
        user_name.innerText = "name " + gitHubProfileDetails.name;
        followers.innerText = "followers " + gitHubProfileDetails.followers;
        following.innerText = "following " + gitHubProfileDetails.following;
        repositary.innerText = "repositary " + gitHubProfileDetails.public_repos;
        document.getElementById("profilephoto").setAttribute('src',gitHubProfileDetails.avatar_url);
        document.getElementById("anchor").setAttribute('href',gitHubProfileDetails.html_url);



    
}
/*var img = document.getElementsByClassName("profile-photo");
img.setAttribute('src', gitHubProfileDetails.avatar_url);
console.log(img)
var anchor = document.getElementById("anchor");
anchor.setAttribute('href', gitHubProfileDetails.html_url);
console.log(anchor)
anchor.appendChild(img);
display.append(anchor);*/


