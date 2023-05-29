function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userName = profile.getName();
    var userImage = profile.getImageUrl();

    document.getElementById('user-name').textContent = "Welcome, " + userName;
    document.getElementById('user-image').src = userImage;

    document.getElementById('user-profile').style.display = 'block';
    document.getElementsByClassName('login')[0].style.display = 'none';
}