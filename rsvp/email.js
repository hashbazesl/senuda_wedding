function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    count: document.getElementById("guest").value,
    attending_status: document.getElementById("attend").value,
  };

  const serviceID = "service_quujekv";
  const templateID = "template_tc524bp";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("guest").value = "";
      document.getElementById("attend").value = "";
      // console.log(res);
      alert("Your response sent successfully");
    })
    .catch((err) => console.log(err));
}
