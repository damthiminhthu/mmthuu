// Hiện thông báo chào mừng khi trang được tải
window.onload = function() {
    alert("Chào mừng bạn đến với trang giới thiệu của tôi!");
};

// Hiện thông báo khi nhấp vào liên kết mạng xã hội
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        alert("Bạn đang được chuyển đến trang mạng xã hội của tôi!");
        window.open(this.href, '_blank'); // Mở liên kết trong tab mới
    });
});
