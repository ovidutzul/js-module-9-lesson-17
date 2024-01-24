// // const datePicker = document.getElementById("start");

// // datePicker.addEventListener("change", () => {
// //   console.log(datePicker.value);
// // });

// let data;

// setTimeout(() => {
//   const response = JSON.stringify({
//     name: "Alex",
//     age: 35
//   });
//   data = JSON.parse(response);
//   setTimeout(() => {
//     const feed = [{}, {}, {}];
//     setTimeout(() => {
//       const pageData = {};
//       setTimeout (() => {
//         const likePost = {};
//       });
//     }, 102);
//   }, 500);
// }, 2000);

// // data.city = "Bucuresti";
// // console.log(data);


// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// console.log(promise);


// function add(a, b) {
//   return a + b;
// };

// const x = 1;
// const y = add(x, 2);
// console.log(`Sum is ${x + y}`);


// const listLocations = locations => {
//   locations.forEach(location => {
//     console.log(location);
//   });
// }; 

// const myLocations = ["Timisoara", "Bucuresti"];

// listLocations(myLocations);


console.log("Start");

setTimeout(() => {
  console.log("0 sec");
});

setTimeout(() => {
  console.log("2 sec");
}, 2000);

console.log("Finish");