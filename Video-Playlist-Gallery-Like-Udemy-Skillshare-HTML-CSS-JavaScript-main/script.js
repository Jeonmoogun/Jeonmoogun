/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '자기소개',
        'name': '자기소개.mp4',
        'duration': '1:05',
    },
    {
        'id': 'a2',
        'title': '쌍둥이 효과',
        'name': '쌍둥이 효과.mp4',
        'duration': '1:37',
    },
    {
        'id': 'a3',
        'title': '112 신고 경찰청 공모전',
        'name': '경찰청 공모전.mp4',
        'duration': '2:00',
    },

    {
        'id': 'a4',
        'title': 'Lion 이모티콘',
        'name': 'Lion 이모티콘.mp4',
        'duration': '0:02',
    },
    {
        'id': 'a5',
        'title': 'I phone 광고',
        'name': 'I phone.mp4',
        'duration': '0:15',
    },
    {
        'id': 'a6',
        'title': '너는 계획이 다 있구나 ?',
        'name': '너는 계획이 다 있구나.mp4',
        'duration': '0:16',
    },
    {
        'id': 'a7',
        'title': '스냅샷',
        'name': '스냅샷.mp4',
        'duration': '0:16',
    },

    {
        'id': 'a8',
        'title': '슈퍼마리오 패러디',
        'name': '슈퍼마리오 패러디.mp4',
        'duration': '0:21',
    },

    {
        'id': 'a9',
        'title': '유튜브 프리미엄 패러디',
        'name': '(과제) 유튜브 프리미엄 광고 패러디.mp4',
        'duration': '1:05',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
