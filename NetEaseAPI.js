let UID;
let SID;

let xhr = new XMLHttpRequest();
let url = `https://pay.neteasegames.com/gameclub/aceracer/${SID}/login-role?roleid=${UID}&client_type=gameclub`;

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
