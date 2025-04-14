function togglemode() {
    const html = document.documentElement
    const profileImg = document.getElementById("profile-photo")
    const themeBtn = document.getElementById("theme-toggle-btn")
  
    html.classList.toggle("light")
    themeBtn.classList.toggle("active")
  
    const isLight = html.classList.contains("light")
    profileImg.setAttribute("src", isLight ? "assets/fernando-light.jpg" : "assets/fernando-dark.jpg")
  }
