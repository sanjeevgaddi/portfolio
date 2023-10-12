var tablinks = document.getElementsByClassName("tab-links");
var tablcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tablcontent of tablcontents)
    {
        tablcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// side menu logic for small screen

var sidemenu = document.getElementById("sideMenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

//Contact form details to store in excel sheet

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwIMocEeRe38v6e89_8pbUlvvn_RFjuxFjjVoT3FprCk1HkeP5Ct41mokV8Ds9J8sOJKg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
