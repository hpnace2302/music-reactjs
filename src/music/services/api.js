import jwt from 'jsonwebtoken'
// import acb from '../img/songs/song1.mp3'

const SERECT_KEY_TOKEN = 'reactJS-2105'

let dataMusic = {
  songs: [
    {
        id: 1,
        name: "Khó Vẽ Nụ Cười",
        singer: "ĐạtG x Du Uyên",
        path: "../img/songs/song1.mp3",
        image: "https://i1.sndcdn.com/artworks-000599496182-c1r283-t500x500.jpg"
    },
    {
        id: 2,
        name: "Câu Hẹn Câu Thề",
        singer: "Đình Dũng",
        path: "../img/songs/song2.mp3",
        image: "https://i.ytimg.com/vi/QXmn3aw-2dE/maxresdefault.jpg"
    },
    {
        id: 3,
        name: "Sài Gòn Đau Lòng Quá",
        singer: "Hứa KIm Tuyền",
        path: ".../img/songs/song3.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjbbFrb0ukngZfX_G0DHeqFiH8CcTGRqKtpvoU4VAnj7Tt_ygJvDKLRubdTp1CRxGcEs&usqp=CAU"
    },
    {
        id: 4,
        name: "Tình Bạn Diệu Kỳ",
        singer: "Amee x Karik x Ricky Star",
        path: ".../img/songs/song4.mp3",
        image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/amee_tbdk.jpg"
    },
    {
        id: 5,
        name: "Chỉ Là Không Cùng Nhau",
        singer: "Tăng Phúc",
        path: ".../img/songs/song5.mp3",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/1/a/1f1ab8428a983f8a7700bfaa5591713b.jpg"
    },
    {
        id: 6,
        name: "Laylalay",
        singer: "Jack",
        path: ".../img/songs/song6.mp3",
        image: "https://ss-images.saostar.vn/wp700/pc/1617941043961/saostar-z0f2nz1e67eaafaq.jpeg"
    },
    {
        id: 7,
        name: "Nàng Thơ",
        singer: "Hoàng Dũng",
        path: ".../img/songs/song7.mp3",
        image: "http://data.chiasenhac.com/data/cover/126/125060.jpg"
    },
    {
        id: 8,
        name: "Phải Chăng Em Đã Yêu",
        singer: "JukySan x RedT",
        path: ".../img/songs/song8.mp3",
        image: "https://i.ytimg.com/vi/O81_4VAson4/maxresdefault.jpg"
    },
    {
        id: 9,
        name: "Kẻ Cắp Gặp Bà Già",
        singer: "Hoàng Thuỳ Linh",
        path: ".../img/songs/song9.mp3",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 10,
        name: "Trên Tình Bạn Dưới Tình Yêu",
        singer: "MIN",
        path: ".../img/songs/song10.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273c7a101d54f57aed7b650b74c"
    },
    {
        id: 11,
        name: "Chúng Ta Của Hiện Tại",
        singer: "Sơn Tùng MTP",
        path: ".../img/songs/song11.mp3",
        image: "https://kenh14cdn.com/203336854389633024/2020/12/16/photo-1-1608088706527625974240-16080929200002104649977.jpg"
    },
    {
        id: 12,
        name: "Muộn Rồi Mà Sao Còn",
        singer: "Sơn Tùng MTP",
        path: ".../img/songs/song12.mp3",
        image: "https://2sao.vietnamnetjsc.vn/images/2021/04/29/23/53/3.jpg"
    },
    {
        id: 13,
        name: "Chỉ Là Muốn Nói",
        singer: "Khải",
        path: ".../img/songs/song14.mp3",
        image: "https://data.chiasenhac.com/data/cover/138/137964.jpg"
    },
    {
        id: 14,
        name: "Không Thể Là Một Ai Khác",
        singer: "Trịnh Đình Quang",
        path: ".../img/songs/song13.mp3",
        image: "https://i1.sndcdn.com/artworks-y2qkEYzwaBxO-0-t500x500.jpg"
    },
    {
        id: 15,
        name: "Thiên Đường Vắng Em",
        singer: "Trịnh Đình Quang",
        path: ".../img/songs/song15.mp3",
        image: "https://data.chiasenhac.com/data/cover/122/121995.jpg"
    },
    {
        id: 16,
        name: "Sắp 30",
        singer: "Trịnh Đình Quang",
        path: ".../img/songs/song16.mp3",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/9/e/9/d9e901750b0205d7fd0cbc8bd87aea85.jpg"
    },
  ]
}

const getAllDataMusic = async () => {
  // console.log(dataMusic)
  return dataMusic
}

const checkLoginUser = (user, pass) => {
  // khi mà user gửi username, password lên server (backend api)
  // backend api sẽ kiểm tra xem account có tồn tại k ?
  // backend sẽ trả về thông tin user đó dưới dạng mã hoá token
  // client-frontend sẽ nhận được token đó và giải mã ra để có đc các thông tin của ng đăng nhập
  // giữa backend và frontend cần có cơ chế mã hoá và giải mã chung
  // sử dụng jsonwebtoken
  // vì k có api login từ backend nên mình tự fix
  let token = null;
  if (user === "admin" && pass === "123") {
    // mã hoá thông tin thành token trả về
    token = jwt.sign({
      id: 1,
      user: user,
      fullname: "Đăng Phong",
      email: "hpnace2302@gmail.com",
      phone: "012345",
      address: "Hà Nội"
    }, SERECT_KEY_TOKEN)
  }
  return token
}

export const api = {
  getAllDataMusic,
  checkLoginUser
}