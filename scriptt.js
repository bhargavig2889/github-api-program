var searchbutton = document.getElementById("search");
searchbutton.addEventListener("click", getProfile);

var profilephoto=document.getElementsByClassName("profile-photo");
var user_name = document.getElementById("user-name");
var followers = document.getElementById("followers");
var following = document.getElementById("following");
var repositary = document.getElementById("repositary");
var anchor=document.getElementById("anchor");

var inputName;

var gitHubProfileDetails = [];


async function getProfile() {
        var inputName = document.getElementById("profile-name").value;
        var url = `https://api.github.com/users/${inputName}` 
        const response = await fetch(url);
        gitHubProfileDetails = await response.json();
        console.log(gitHubProfileDetails);

        var profilephoto =document.createElement("img");
        profilephoto.setAttribute('src', gitHubProfileDetails.avatar_url);
       // console.log(profilephoto)
        var anchor = document.createElement("anchor");
        anchor.setAttribute('href', gitHubProfileDetails.html_url);
        anchor.setAttribute('target', '_blank');
        //console.log(anchor)
        anchor.appendChild(profilephoto);
        display.append(anchor);

        user_name.innerText = "name " + gitHubProfileDetails.name;
        followers.innerText = "followers " + gitHubProfileDetails.followers;
        following.innerText = "following " + gitHubProfileDetails.following;
        repositary.innerText = "repositary " + gitHubProfileDetails.public_repos;
}
