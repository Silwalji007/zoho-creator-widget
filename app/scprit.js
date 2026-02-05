ZOHO.CREATOR.init().then(function () {
  console.log("Zoho Creator Ready");
});

function myfunctionAdd() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  const formData = {
      data: {
        "Full_Name": name,
        "Email": email,
        "Redirect_To": "Employee_Registration_Form"

      }
    };

    const config = {
      formName: "Login_Page",
      data: formData
    };

  ZOHO.CREATOR.API.addRecord(config)
    .then(function (response) {
      console.log("SUCCESS:", response);
      alert("✅ Record added successfully");
      location.reload();
    })
    .catch(function (error) {
      console.error("ERROR:", error);
      alert("❌ Error while submitting form");
    });
}
