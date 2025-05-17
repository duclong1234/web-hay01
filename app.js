// Danh sách phim mẫu
const movieList = [
  {
    id: 1,
    title: "Final Score",
    title_en: "Final Score",
    year: 2010,
    genres: ["Action", "Thriller"],
    country: "UK",
    director: "Scott Mann",
    producer: "Marc Goldberg, Wayne Marc Godfrey",
    main_cast: ["Dave Bautista", "Pierce Brosnan", "Ray Stevenson"],
    trailer: "/video/final_score_trailer.mp4",
    video:"/video/PHI VỤ GIẢI CỨU (Thuyết Minh)   Phim Hành Động Tội Phạm Mỹ   Phim Lẻ hay 2023   Way Phim.mp4",
    description: "Michael Knox, a former American soldier, visits the UK to see his late comrade's niece. During a football match, the stadium is taken over by terrorists. Michael fights to rescue the girl and stop a large-scale terrorist plot.",
    poster: "Final-score.jpg"
  },
  {
    id: 2,
    title: "Sát Thủ Thợ Máy 2",
    title_en: "Mechanic: Resurrection",
    year: 2016,
    genres: ["Action", "Crime", "Thriller"],
    country: "USA",
    director: "Dennis Gansel",
    producer: "Frank DeMartini, John Thompson",
    main_cast: ["Jason Statham", "Jessica Alba", "Tommy Lee Jones"],
    trailer: "video/(Official Trailer) MECHANIC RESURRECTION (SÁT THỦ “THỢ MÁY” SỰ TÁI XUẤT).mp4",
    video:"video/SÁT THỦ THỢ MÁY - JASON STATHAM - Phim Hành Động Võ Thuật Mỹ Chiếu Rạp Thuyết Minh.mp4",
    description: "A hunted assassin must use all his skills to survive and complete his mission.",
    poster: "machine-resurrection.jpg"
  },
  {
    id: 3,
    title: "Chiến Lang",
    title_en: "Wolf Warrior",
    year: 2015,
    genres: ["Action", "Thriller", "War"],
    country: "China",
    director: "Wu Jing",
    producer: "Zhang Qi",
    main_cast: ["Wu Jing", "Scott Adkins", "Yang Zi"],
    trailer: "video/Trailer Phim Đặc Chủng Chiến Lang 2014  Ngô Kinh.mp4",
    video:"video/CHIẾN LANG - PHẦN CUỐI - NGÔ KINH   PHIM LẺ HÀNH ĐỘNG VÕ THUẬT CHIẾU RẠP HAY NHẤT 2025.mp4",
    description: "Wu Jing plays an elite soldier who defends his homeland from dark forces.",
    poster: "Chien-Lang.jpg"
  },
  {
    id: 4,
    title: "Diệp Vấn 3",
    title_en: "Ip Man 3",
    year: 2012,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Mike Tyson", "Max Zhang"],
    trailer: "/video/diep-van-3-trailer.mp4",
    video:"",
    description: "Ip Man faces a series of dangerous challenges and enemies in the fight to defend the honor of Chinese martial arts.",
    poster: "Diep-Van-3.jpg"
  },
  {
    id: 5,
    title: "Diệp Vấn 4",
    title_en: "Ip Man 4: The Finale",
    year: 2019,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Wu Yue", "Scott Adkins"],
    trailer: "/video/diep-van-4-trailer.mp4",
    video:"",
    description: "Ip Man continues his journey to uphold martial arts in a changing society.",
    poster: "Diep-Van-4.jpg"
  },
  {
    id: 6,
    title: "Hoàng Phi Hồng: Bí Ẩn Một Huyền Thoại",
    title_en: "Rise of the Legend",
    year: 2014,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "China",
    director: "Roy Chow",
    producer: "Bill Kong",
    main_cast: ["Eddie Peng", "Sammo Hung", "Angelababy"],
    trailer: "/video/hoang-phi-hong-bi-an-mot-huyen-thoai-trailer.mp4",
    video:"",
    description: "Eddie Peng plays Wong Fei Hung in a martial arts tale facing major challenges in the late 19th century.",
    poster: "hoang-phi-hong.jpg"
  },
  {
    id: 7,
    title: "Diệp Vấn 2",
    title_en: "Ip Man 2",
    year: 2010,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Huang Xiaoming", "Sammo Hung"],
    video:"",
    trailer: "/video/diep-van-2-trailer.mp4",
    description: "Ip Man faces off against foreign fighters, including Mike Tyson, to defend the reputation of Chinese martial arts.",
    poster: "Diep-Van-2.jpg"
  },
  {
    id: 8,
    title: "Chốt Chặn Cuối Cùng",
    title_en: "The Last Stand",
    year: 2013,
    genres: ["Action", "Thriller", "Crime"],
    country: "USA",
    director: "Kim Jee-woon",
    producer: "Lorenzo di Bonaventura",
    main_cast: ["Arnold Schwarzenegger", "Forest Whitaker", "Johnny Knoxville"],
    trailer: "video/Chốt Chặn Cuối Cùng  (The Last Stand).mp4",
    video:"",
    description: "A former soldier joins a hostage rescue operation at a stadium, confronting a large-scale terrorist plot.",
    poster: "Chot-Chan-Cuoi-Cung.jpg"
  },
  {
    id: 9,
    title: "Diệp Vấn 1",
    title_en: "Ip Man",
    year: 2008,
    genres: ["Action", "Drama", "Martial Arts"],
    country: "Hong Kong",
    director: "Wilson Yip",
    producer: "Raymond Wong",
    main_cast: ["Donnie Yen", "Lynn Hung", "Simon Yam"],
    trailer: "/video/diep-van-1-trailer.mp4",
    video:"",
    description: "Ip Man, a master martial artist, faces dangerous opponents in brutal fights to protect his honor and family.",
    poster: "Diep-Van-1.jpg"
  },
  {
    id: 10,
    title: "Skin Trade",
    title_en: "Skin Trade",
    year: 2014,
    genres: ["Action", "Crime"],
    country: "USA",
    director: "Ekachai Uekrongtham",
    producer: "Renny Harlin, Joel Silver",
    main_cast: ["Dolph Lundgren", "Tony Jaa", "Ron Perlman"],
    trailer: "/video/[Phim Chiếu Rạp] Skin Trade - Mạng Đổi Mạng Official Trailer.mp4",
    video:"",
    description: "An American cop and an assassin team up to fight a human trafficking crime syndicate.",
    poster: "Skin-Trade.jpg"
  },
  {
    id: 11,
    title: "Huyền Thoại Hercules",
    title_en: "The Legend of Hercules",
    year: 2014,
    genres: ["Action", "Adventure", "Mythology"],
    country: "USA",
    director: "Renny Harlin",
    producer: "Les Weldon, Danny Lerner",
    main_cast: ["Kellan Lutz", "Gaia Weiss", "Scott Adkins"],
    trailer: "/video/huyen-thoai-hercules-trailer.mp4",
    video:"",
    description: "Hercules, one of Greece's greatest heroes, faces immense challenges to save his world.",
    poster: "huyen-thoai-hercules.png"
  },
  {
    id: 12,
    title: "Krrish",
    title_en: "Krrish",
    year: 2006,
    genres: ["Science Fiction", "Action", "Drama"],
    country: "India",
    director: "Rakesh Roshan",
    producer: "Rakesh Roshan",
    main_cast: ["Hrithik Roshan", "Priyanka Chopra", "Rekha"],
    trailer: "/video/krrish-trailer.mp4",
    video:"",
    description: "Krishna, a man with superpowers, learns his past and fights an evil organization exploiting his power.",
    poster: "Krrish.jpg"
  },
  {
    id: 13,
    title: "Chiến Binh Hỏa Tiễn",
    title_en: "The Protector",
    year: 2005,
    genres: ["Action", "Martial Arts"],
    country: "Thailand",
    director: "Prachya Pinkaew",
    producer: "Sukanya Vongsthapat, Prachya Pinkaew",
    main_cast: ["Tony Jaa", "Petchtai Wongkamlao", "Bongkoj Khongmalai"],
    trailer: "/video/the_protector_trailer.mp4",
    video:"",
    description: "A young fighter travels to Australia to retrieve his stolen elephants and battles an underground crime syndicate.",
    poster: "chien-binh-hoa-tien.jpg"
},
{
    id: 14,
    title: "Cẩm Y Vệ",
    title_en: "14 Blades",
    year: 2010,
    genres: ["Action", "Historical", "Martial Arts"],
    country: "China",
    director: "Daniel Lee",
    producer: "Zhang Weiping",
    main_cast: ["Chung Tử Đơn", "Triệu Vy", "Ngô Tôn"],
    trailer: "/video/14_blades_trailer.mp4",
    video:"",
    description: "A secret service agent of the emperor is betrayed and must fight against powerful enemies to clear his name.",
    poster: "cam-y-ve.jpg"
},
{
  id: 15,
  title: "Điệp Vụ Giải Cứu",
  title_en: "Hunter Killer",
  year: 2018,
  genres: ["Action", "Thriller", "War"],
  country: "USA",
  director: "Donovan Marsh",
  producer: "Neal H. Moritz",
  main_cast: ["Gerard Butler", "Gary Oldman", "Common"],
  trailer: "/video/hunter_killer_trailer.mp4",
  video:"",
  description: "Một đội tàu ngầm và lực lượng đặc nhiệm Mỹ được giao nhiệm vụ ngăn chặn chiến tranh thế giới khi một âm mưu đảo chính diễn ra ở Nga.",
  poster: "diep-vu-giai-cuu.jpg"
},

{
  id: 16,
  title: "Frozen",
  title_en: "Frozen",
  year: 2013,
  genres: ["Animation", "Adventure", "Fantasy"],
  country: "USA",
  director: "Chris Buck, Jennifer Lee",
  producer: "Peter Del Vecho",
  main_cast: ["Kristen Bell", "Idina Menzel"],
  trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
  video: "https://www.youtube.com/watch?v=FLzfXQSPBOg",
  description: "Câu chuyện về tình chị em và sức mạnh băng giá của Elsa.",
  poster: "frozen.jpg"
},
{
  id: 17,
  title: "Kung Fu Panda",
  title_en: "Kung Fu Panda",
  year: 2008,
  genres: ["Animation", "Action", "Comedy"],
  country: "USA",
  director: "Mark Osborne, John Stevenson",
  producer: "Melissa Cobb",
  main_cast: ["Jack Black", "Dustin Hoffman"],
  trailer: "https://www.youtube.com/watch?v=_inKs4eeHiI",
  video: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
  description: "Chú gấu trúc Po vượt qua bản thân để trở thành chiến binh rồng.",
  poster: "kungfu-panda.jpg"
},
{
  id: 18,
  title: "Big Hero 6",
  title_en: "Big Hero 6",
  year: 2014,
  genres: ["Animation", "Action", "Adventure"],
  country: "USA",
  director: "Don Hall, Chris Williams",
  producer: "Roy Conli",
  main_cast: ["Ryan Potter", "Scott Adsit"],
  trailer: "https://www.youtube.com/watch?v=z3biFxZIJOQ",
  video: "https://www.youtube.com/watch?v=8IdMPpKMdcc",
  description: "Baymax và Hiro tạo nên đội siêu anh hùng công nghệ cao.",
  poster: "big-hero-6.png"
},
{
  id: 19,
  title: "The Notebook",
  title_en: "The Notebook",
  year: 2004,
  genres: ["Romance", "Drama"],
  country: "USA",
  director: "Nick Cassavetes",
  producer: "Nicholas Sparks",
  main_cast: ["Ryan Gosling", "Rachel McAdams"],
  trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw",
  video: "https://www.youtube.com/watch?v=fcM2OVFRB1k",
  description: "Câu chuyện tình yêu vượt thời gian giữa Noah và Allie.",
  poster: "the-note-book.jpg"
},
{
  id: 20,
  title: "La La Land",
  title_en: "La La Land",
  year: 2016,
  genres: ["Romance", "Musical"],
  country: "USA",
  director: "Damien Chazelle",
  producer: "Fred Berger",
  main_cast: ["Ryan Gosling", "Emma Stone"],
  trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
  video: "https://www.youtube.com/watch?v=Po8k1kGe-zo",
  description: "Câu chuyện tình yêu của một nhạc sĩ và một nữ diễn viên tại Los Angeles.",
  poster: "la-la-land.jpg"
},
{
  id: 21,
  title: "The Fault in Our Stars",
  title_en: "The Fault in Our Stars",
  year: 2014,
  genres: ["Romance", "Drama"],
  country: "USA",
  director: "Josh Boone",
  producer: "Wyck Godfrey",
  main_cast: ["Shailene Woodley", "Ansel Elgort"],
  trailer: "https://www.youtube.com/watch?v=9ItBvH5J6ss",
  video: "https://www.youtube.com/watch?v=2aDZHYsP8GI",
  description: "Tình yêu giữa hai thiếu niên đang chống chọi bệnh tật.",
  poster: "The_Fault_in_Our_Stars.png"
},

{
  id: 22,
  title: "Remember the Titans",
  title_en: "Remember the Titans",
  year: 2000,
  genres: ["Sport", "Drama"],
  country: "USA",
  director: "Boaz Yakin",
  producer: "Jerry Bruckheimer",
  main_cast: ["Denzel Washington", "Will Patton"],
  trailer: "https://www.youtube.com/watch?v=ERdmS7Vto1Q",
  video: "https://www.youtube.com/watch?v=QVmD8z4d-6I",
  description: "Huấn luyện viên bóng bầu dục giúp đoàn kết học sinh đa chủng tộc.",
  poster: "remember-the-titans.jpg"
},
{
  id: 23,
  title: "Coach Carter",
  title_en: "Coach Carter",
  year: 2005,
  genres: ["Sport", "Drama"],
  country: "USA",
  director: "Thomas Carter",
  producer: "Mark Ciardi",
  main_cast: ["Samuel L. Jackson", "Ashanti"],
  trailer: "https://www.youtube.com/watch?v=8F0nM0JrDJ0",
  video: "https://www.youtube.com/watch?v=lQ1n_zcNbdE",
  description: "Huấn luyện viên bóng rổ đặt luật học tập nghiêm ngặt cho học sinh.",
  poster: "Coach-Carter.jpg"
},
{
  id: 24,
  title: "Bend It Like Beckham",
  title_en: "Bend It Like Beckham",
  year: 2002,
  genres: ["Sport", "Comedy", "Drama"],
  country: "UK",
  director: "Gurinder Chadha",
  producer: "Deepak Nayar",
  main_cast: ["Parminder Nagra", "Keira Knightley"],
  trailer: "https://www.youtube.com/watch?v=p0rfSjfZ3zA",
  video: "https://www.youtube.com/watch?v=WB1ltWspN1g",
  description: "Cô gái trẻ Anh gốc Ấn quyết tâm theo đuổi bóng đá.",
  poster: "Bend It Like Beckham.jpg"
},
{
  id: 25,
  title: "The Blind Side",
  title_en: "The Blind Side",
  year: 2009,
  genres: ["Sport", "Biography", "Drama"],
  country: "USA",
  director: "John Lee Hancock",
  producer: "Alonzo Harding",
  main_cast: ["Sandra Bullock", "Quinton Aaron"],
  trailer: "https://www.youtube.com/watch?v=Z_8IuyTaylU",
  video: "https://www.youtube.com/watch?v=kNNLL5EjhXo",
  description: "Câu chuyện có thật về một cầu thủ bóng bầu dục vượt khó.",
  poster: "The Blind Side.jpg"
},
{
  id: 26,
  title: "Raging Bull",
  title_en: "Raging Bull",
  year: 1980,
  genres: ["Sport", "Biography", "Drama"],
  country: "USA",
  director: "Martin Scorsese",
  producer: "Irwin Winkler",
  main_cast: ["Robert De Niro", "Cathy Moriarty"],
  trailer: "https://www.youtube.com/watch?v=GdGDqYidikw",
  video: "https://www.youtube.com/watch?v=OJWJE0x7T4Q",
  description: "Cuộc đời võ sĩ quyền anh Jake LaMotta.",
  poster: "Raging Bull.jpg"
}

];

//nút sáng tối 
const toggleball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .toggle, .menu-list-item, .menu-list-item a");
const body = document.body;

toggleball.onclick = function () {
  // Toggle giao diện
  items.forEach(item => {
    item.classList.toggle("light");
  });
  body.classList.toggle("light");
  toggleball.classList.toggle("light");

  // So sánh thủ công
  if (toggleball.className === "toggle-ball light") {
    localStorage.setItem("theme", "light");//set up cập nhật, theme như là biến tạm để lưu trữ lâu dài
  } else {
    localStorage.removeItem("theme");//remove đưa về
  }
};
//kiểm tra xem lúc load xong thì theme có sẵn light hoặc null chưa 
 window.onload = darkLight(); //dành cho tất cả các trnag mới tải lần đầu, nếu đã tải rồi mà muốn chuyển đổi
 //giữa các trang ăn khớp thì ở mỗi trang viết thêm darkLight(); để gọi hàm và kiểm tra

 function darkLight() { // hoặc viết như này window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    if(toggleball.className === "toggle-ball") {
      items.forEach(item => item.classList.toggle("light"));
      body.classList.toggle("light");
      toggleball.className = "toggle-ball light";
    }
    else {
      return;
    }
  }
  else if(savedTheme !== "light") {
    if(toggleball.className === "toggle-ball light") {
      items.forEach(item => item.classList.toggle("light"));
      body.classList.toggle("light");
      toggleball.classList.toggle("light");
    }
    else{
      return;
    }
  }

}

//thanh cuộn cho danh sách phim 
//tí khai báo let curentIndex 1 và 2 đều = 0; trong Trangchu.html còn let currentIndex3  = 0; ở Trangchitiet.html

    function scrollArrow(b, currentIndex, listId) {
        const list = document.getElementById(listId);
        const items = list.querySelectorAll('.movie-list-item');
        const itemWidth = (items[0].offsetWidth + 20); // + khoảng cách margin nếu có
        const maxIndex = items.length - 1;

        if (b === 'right' && currentIndex < maxIndex) {
            currentIndex+=3;
        } else if (b === 'left' && currentIndex > 0) {
            currentIndex-=3;
        }
        else if (b === 'right' && currentIndex >= maxIndex) {
            currentIndex=0;
        }else if (b === 'left' && currentIndex <= 0) {
            currentIndex=maxIndex;
        }

        const offset = currentIndex * itemWidth;
        list.style.transform = `translateX(-${offset}px)`;
        list.style.transition = "transform 0.5s ease";

        return currentIndex;//trả về kết quả và giá trị về trang html
    }

//Phần gợi ý 
const searchInput = document.getElementById("search-text");
const suggestions = document.getElementById("suggestions");
function tolower(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d").replace(/Đ/g, "D")
              .toLowerCase().replace(/\s+/g, '');
}

searchInput.addEventListener("input", function () {
    const text = tolower(this.value.trim());
    suggestions.innerHTML = "";

    if (text.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    const goiY = [];

    for (let i = 0; i < movieList.length; i++) {
        const movie = movieList[i];
        // Kiểm tra tên phim
        if (tolower(movie.title).includes(text)) {
            goiY.push(movie);
            if (goiY.length >= 10) break;
            continue;
        }

        // Kiểm tra diễn viên
        for (let j = 0; j < movie.main_cast.length; j++) {
            if (tolower(movie.main_cast[j]).includes(text)) {
                goiY.push(movie);
                break;
            }
        }
        if (goiY.length >= 10) break;
    }

    // Hiển thị gợi ý
    for (let i = 0; i < goiY.length; i++) {
        const li = document.createElement("li");
        li.textContent = goiY[i].title;
        li.onclick = function () {
            searchInput.value = goiY[i].title;
            suggestions.style.display = "none";
        }
        suggestions.appendChild(li);
    }

    if (goiY.length > 0) {
        suggestions.style.display = "block";
    } else {
        suggestions.style.display = "none";
    }
});


