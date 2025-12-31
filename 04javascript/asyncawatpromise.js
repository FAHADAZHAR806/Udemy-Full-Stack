function userBio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Fahad Azhar", age: 27, Gender: "Male" });
    }, 3000);
  });
}
function userCredentials() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ email: "fahadkiyani28@gmail.com", pasword: "abc@123$" });
    }, 5000);
  });
}
function userWorkHistory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ designation: "Director", Experience: "10Years" });
    }, 10000);
  });
}

async function getallDetail() {
  try {
    console.log("Fetching details.............");
    const AllDetails = await Promise.all([
      userBio(),
      userCredentials(),
      userWorkHistory(),
    ]);
    console.log("Fetch successfully✅✅✅✅");
    console.log(AllDetails);
  } catch (error) {
    console.log("Error fetching", error);
  }
}

getallDetail();
