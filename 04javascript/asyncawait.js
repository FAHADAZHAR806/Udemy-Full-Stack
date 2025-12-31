function fetchUserData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject({ name: "Fahad", url: "codewithfahad.com" });
    }, 3000);
  });
}
async function getUserData() {
  try {
    console.log("Fetching userdata....");
    const userdata = await fetchUserData();
    console.log("User data fetch successfully");

    console.log("User data", userdata);
  } catch (error) {
    console.log("error", error);
  }
}

getUserData();
