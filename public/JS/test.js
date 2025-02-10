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

    // 뭔가를 추가하는 내용
    let base_data = [];
    base_data = JSON.parse(localStorage.getItem("userinfo")) || [];

    // 기존 데이터에 동일한 항목이 있는지 확인
    const isDuplicate = base_data.some(
      (item) => JSON.stringify(item) === JSON.stringify(data)
    );
    if (!isDuplicate) {
      const update_data = JSON.parse(JSON.stringify(data));
      base_data.push(update_data);
      localStorage.setItem("userinfo", JSON.stringify(base_data));
      console.log(JSON.parse(JSON.stringify(data)), "dddddddd");
    }
    const tablebody = document.querySelector(".tablebody");
    base_data.map((x) => {
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
