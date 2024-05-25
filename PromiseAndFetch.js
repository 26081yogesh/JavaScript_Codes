const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("After 1 second");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("Promise Fulfilled");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Yogesh", age: 23 });
  }, 1000);
}).then((userInfo) => console.log(userInfo));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isError = true;
    if (isError) {
      reject("ERROR: Sorry you got an error");
    } else {
      resolve({
        firstName: "Yogesh",
        lastName: "Yadav",
        state: "Haryana",
        country: "India",
      });
    }
  }, 1000);
});
//   .then((users) => {
//     console.log(users);
//     console.log(users.state);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally! the rock has come back to Newyork");
//   });

async function handlePromise3() {
  try {
    const response = await promise3;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

handlePromise3();

// Using Fetch
fetch("https://api.github.com/users/26081yogesh")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
