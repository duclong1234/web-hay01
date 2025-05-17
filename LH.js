// Danh sách phim mẫu
const movies = [
    {
        title: "Avengers: Endgame",
        description: "Trận chiến cuối cùng giữa các siêu anh hùng và Thanos.",
        videoUrl: "videos/endgame.mp4",
        thumbnail: "images/endgame.jpg"
    },
    {
        title: "John Wick 4",
        description: "Sát thủ huyền thoại trở lại với cuộc chiến mới.",
        videoUrl: "videos/johnwick4.mp4",
        thumbnail: "images/johnwick4.jpg"
    },
    {
        title: "Fast & Furious 9",
        description: "Cuộc đua tốc độ và những pha hành động nghẹt thở.",
        videoUrl: "videos/fast9.mp4",
        thumbnail: "images/fast9.jpg"
    }
];

// Load danh sách phim ra giao diện
const movieList = document.querySelector('.movie-list');
movies.forEach((movie, index) => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
        <img src="${movie.thumbnail}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    movieItem.addEventListener('click', () => {
        document.getElementById('video-source').src = movie.videoUrl;
        document.getElementById('movie-video').load();
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-description').textContent = movie.description;
    });
    movieList.appendChild(movieItem);
});

// Tìm kiếm phim
const searchInput = document.getElementById("search-text");
const suggestionBox = document.getElementById("suggestions");

// Gợi ý phim khi gõ
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (query.length > 0) {
        const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
        filtered.forEach(movie => {
            const li = document.createElement("li");
            li.textContent = movie.title;
            li.addEventListener("click", () => {
                searchInput.value = "";
                suggestionBox.innerHTML = "";
                document.getElementById('video-source').src = movie.videoUrl;
                document.getElementById('movie-video').load();
                document.getElementById('movie-title').textContent = movie.title;
                document.getElementById('movie-description').textContent = movie.description;
            });
            suggestionBox.appendChild(li);
        });
    }
});

// Nút chuyển slide phim trái/phải
const arrowRight = document.querySelector(".arrow");
const arrowLeft = document.querySelector(".arrowleft");
let scrollPosition = 0;
const movieListWrapper = document.querySelector(".movie-list-wrapper");

arrowRight.addEventListener("click", () => {
    scrollPosition += 200;
    movieListWrapper.scrollLeft = scrollPosition;
});

arrowLeft.addEventListener("click", () => {
    scrollPosition -= 200;
    movieListWrapper.scrollLeft = scrollPosition;
});

// Toggle dark/light mode
const toggle = document.querySelector(".toggle");
const toggleBall = document.querySelector(".toggle-ball");
                
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleBall.classList.toggle("move");
});
// Khởi tạo EmailJS với Public Key hợp lệ (chỉ một lần)
emailjs.init("30BRLeMEIQRU83OVP");

// Xử lý gửi form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Gửi thông tin qua EmailJS
    emailjs.send("service_b4gi3t6", "template_1pu24am", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(() => {
        document.getElementById("form-message").textContent = "✅ Gửi thành công!";
        document.getElementById("contact-form").reset();
    }, (error) => {
        document.getElementById("form-message").textContent = "❌ Lỗi khi gửi. Vui lòng thử lại.";
        console.error("EmailJS Error:", error);
    });
});
