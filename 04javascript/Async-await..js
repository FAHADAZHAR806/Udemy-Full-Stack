function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User fetched");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post fetched");
    }, 1000);
  });
}

async function fetchAllData() {
  console.log("User data");
  let Alldata = await Promise.all([fetchUser(), fetchPosts()]);
  console.log("Posts Data");
  console.log(Alldata);
}

fetchAllData();

function fetchSuccess() {
  return new Promise((resolve, reject) => {
    resolve("Successfully resolved");
  }, 1000);
}

function fetchFailure() {
  return new Promise((resolve, reject) => {
    reject("Error ");
  });
}

async function handlePromises() {
  try {
    console.log("Fetching ........");
    let result = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

handlePromises();

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout exceeded");
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}
const fastPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 4000);
});

fetchWithTimeout(fastPromise, 2000).then((result) => console.log(result));
