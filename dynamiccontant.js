// dynamicContent.js

// إضافة الإعلانات
window.onload = function() {
    addAds();
    addVideos();
    addEarnings();
};

// إضافة الإعلانات
function addAds() {
    let adsContainer = document.getElementById("ads-content");
    let ad = document.createElement("div");
    ad.innerHTML = "<p>إعلان: اشترك في خدماتنا الآن!</p>";
    adsContainer.appendChild(ad);
}

// إضافة الفيديوهات
function addVideos() {
    let videoContainer = document.getElementById("video-content");
    let video = document.createElement("div");
    video.innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    videoContainer.appendChild(video);
}

// إضافة الفرص الربحية
function addEarnings() {
    let earningsContainer = document.getElementById("earnings-content");
    let opportunity = document.createElement("div");
    opportunity.innerHTML = "<p>فرصة ربح: انضم الآن لبرنامج الشركاء وابدأ في كسب المال!</p>";
    earningsContainer.appendChild(opportunity);
}

// وظيفة رفع الكتاب
function uploadFile() {
    alert("تم رفع الكتاب بنجاح (هذا مجرد محاكاة)");
}
