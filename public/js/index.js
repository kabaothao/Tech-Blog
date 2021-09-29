// //TODO: This is static code (placeholder). We will use API to pull the data in MYSQL
// let posts = [
//   {
//     Title: "Why MVC is so important",
//     User: "Xandromus",
//     Date: "5/8/2020",
//     Note: "MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
//   },
//   {
//     Title: "Authentication vs Authorization",
//     User: "Xandromus",
//     Date: "5/8/2020",
//     Note: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access to the system.",
//   },
//   {
//     Title: "Object-Relational Mapping",
//     User: "Lernatino",
//     Date: "5/8/2020",
//     Note: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
//   },
// ];

// let postDiv = document.getElementById("posts");
// let getPosts = function () {
//   for (let i = 0; i < posts.length; i++) {
//     postDiv.innerHTML += `
//         <div class="mt-3 mb-3 ml-3 mr-3">
//             <div class="card">
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">
//                         <h2>${posts[i].Title}</h2>
//                     </li>
//                     <li class="list-group-item">
//                         <small>Posted by ${posts[i].User} on ${posts[i].Date}</small>
//                     </li>
//                     <li class="list-group-item">
//                         ${posts[i].Note}
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     `;
//   }
// };

// getPosts();
