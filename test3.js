// Rainyday.js 초기화
window.onload = function() {
    var image = document.getElementById('rain-canvas');
    var engine = new Rainyday({
        image: document.getElementById('image'), // 비 효과를 적용할 이미지
        canvas: image
    });
    engine.rain([
        [1, 2, 800],
        [3, 3, 1200]
    ], 100);
};

// 기존 인터랙션 코드
document.getElementById('image').addEventListener('click', function(event) {
    var image = document.getElementById('image');
    var overlay = document.getElementById('overlay');
    var textBox = document.getElementById('text-box');
    
    if (!image.classList.contains('active')) {
        image.classList.add('active');
        overlay.classList.add('active');
        textBox.classList.add('active');
    }
    event.stopPropagation(); // 이미지 클릭 시 이벤트 전파 중지
});

document.getElementById('overlay').addEventListener('click', function() {
    resetView();
});

document.getElementById('container').addEventListener('click', function() {
    if (document.getElementById('image').classList.contains('active')) {
        resetView();
    }
});

function resetView() {
    var image = document.getElementById('image');
    var overlay = document.getElementById('overlay');
    var textBox = document.getElementById('text-box');

    image.classList.remove('active');
    overlay.classList.remove('active');
    textBox.classList.remove('active');
}
