export default function updateUserContent(userData) {
    let userImg = document.querySelector(".img-user");
    let userIcons = document.querySelectorAll(".user-icon-infos i");
    let userInfo = document.getElementById("userInfo");
    userImg.style.backgroundImage = `url(${userData.picture.large})`;
    userInfo.textContent = `${userData.name.first} ${userData.name.last}`;
  
    userIcons.forEach((icon) => {
      icon.addEventListener("mouseover", () => {
        switch (icon.classList[1]) {
          case "fa-user":
            userInfo.textContent = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
            userInfo.style.visibility = "visible";
            break;
          case "fa-envelope-open":
            const email = userData.email;
            userInfo.textContent = `Email: ${email}`;
            userInfo.style.visibility = "visible";
            break;
          case "fa-calendar-xmark":
            const dateOfBirth = new Date(userData.dob.date);
            userInfo.textContent = `Date de naissance: ${dateOfBirth.toLocaleDateString()}`;
            userInfo.style.visibility = "visible";
            break;
          case "fa-map":
            const location = `${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`;
            userInfo.textContent = `Emplacement: ${location}`;
            userInfo.style.visibility = "visible";
            break;
          case "fa-phone-flip":
            const phone = userData.phone;
            userInfo.textContent = `Téléphone: ${phone}`;
            userInfo.style.visibility = "visible";
            break;
          case "fa-lock":
            const password = userData.login.password;
            userInfo.textContent = `Mot de passe: ${password}`;
            userInfo.style.visibility = "visible";
            break;
        }
      });
  
      // icon.addEventListener("mouseout", () => {
      //   userInfo.style.visibility = "hidden";
      //   userInfo.textContent = "";
      // });
    });
  }
