// 백엔드에 요청을 다시 보냄
fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    // 가져온 데이터를 화면에 표시
    const info = document.querySelector(".info");

    info.innerHTML = `
      <table>
      <thead>
        <tr>
          <td>이메일</td>
          <td>이름</td>
          <td>나이</td>
        </tr>
      </thead>
      <tbody class="tablebody">
      </tbody>
      </table>`;

    let base_data = [];
    base_data = JSON.parse(localStorage.getItem("userinfo")) || [];

    let filtername = base_data.filter((item) => item.name === data.user);

    const tablebody = document.querySelector(".tablebody");
    filtername.map((x) => {
      tablebody.innerHTML += `<tr>
      <td>${x.email}</td>  
      <td>${x.name}</td>  
      <td>${x.age}</td>  
    </tr>`;
    });
  })
  .catch((e) => {
    console.log("에러");
  });
