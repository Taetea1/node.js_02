// const { response } = require("express");
// fetch("/userinfo").then((response) => {});
// const info = document.querySelector(".info");
// info.innerHTML = `
//     <table>
//     <thead>
//       <tr>
//         <td>이메일</td>
//         <td>이름</td>
//         <td>나이</td>
//       </tr>
//     </thead>
//     <tbody class="tablebody">
//     </tbody>
//     </table>`;
// let datas = [];
// // 그전값들
// let userList = JSON.parse(localStorage.getItem("userinfo")) || [];
// datas.push(...userList);

// // 새로운값
// datas.push(userinfo);
// localStorage.setItem("userinfo", JSON.stringify(datas));

// const tbody = document.querySelector(".tablebody");
// datas.map((x) => {
//   tbody.innerHTML += `<tr>
//         <td>${x.email}</td>
//         <td>${x.name}</td>
//         <td>${x.age}</td>
//       </tr>`;
// });
