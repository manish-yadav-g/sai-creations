function login(){
  const mob = document.getElementById("mobile").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  // YOUR CLIENT DATABASE
  const clients = {
    "9582033295" : {
      password: "1122",
      link: "https://drive.google.com/drive/folders/1L7bswGGX1zalCw3rOT80SduJ_1Nr97Ph?usp=sharing"
    }
  };

  if(clients[mob] && clients[mob].password === pass){
    msg.style.color="#55ff55";
    msg.textContent = "Login successful! Redirecting...";
    setTimeout(()=>{
      window.location.href = clients[mob].link;
    }, 1000);
  } else {
    msg.style.color="#ff3333";
    msg.textContent = "❗ Incorrect number or password";
  }
}
function goBack(){
  window.location.href = "index.html";
}
