let data = [];
// 그전값들
let userList = JSON.parse(localStorage.getItem("userinfo")) || [];
data.push(...userList);

// 새로운값
data.push(userinfo);
localStorage.setItem("userinfo", JSON.stringify(data));
