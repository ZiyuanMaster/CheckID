let UID;
let SID;
let game;

let xhr = new XMLHttpRequest();
let url = `https://pay.neteasegames.com/gameclub/aceracer/10001/login-role?roleid=4976908&client_type=gameclub`;

xhr.open("POST", url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === this.DONE) {
    let parsed = JSON.parse(xhr.responseText);
    let IGN = parsed.data.rolename;

    if (xhr.status === 200) {
      console.log(IGN);
    } else {
      console.error("Request failed. Status: " + xhr.status);
    }
  }
}

function executeAPI() {
  xhr.send();
}
