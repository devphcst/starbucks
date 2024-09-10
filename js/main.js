const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window = 브라우저 창 객체. 우리가 보는 화면 그자체
window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 뱃지 숨기기
      // badgeEl.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });

      gsap.to(toTopEl, 0.5, {
        x: 0,
      });
    } else {
      // 뱃지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      gsap.to(toTopEl, 0.5, {
        x: 100,
      });
    }
  }, 300)
  // 300 = 300ms
  // _throttle을 함수를 통해 스크롤되면서 실행되는 함수 횟수를 줄임. (부하 줄이기)
  // _.throttle(함수, 시간)
);

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  // gasp.to('요소', '지속시간', '옵션')
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  // direction default = horizontal
  // direction: 'horizontal'
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 각 슬라이드 사이 간격
  centeredSlides: true, // 1번 슬라이드가 가운데
  loop: true,
  // autoplay: true,
  // autoplay: {
  //   delay: 5000, // 5초
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; // !isHidePromotion = true

  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수 (소수점 2자리까지)
function random(min, max) {
  // .toFixed() 를 통해 반환된 문자 데이터를,
  // parseFloat() 을 통해 소수점을 가지는 솟자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delayTime, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 요요처럼 되돌아오는것
    ease: Power1.easeInOut,
    delay: random(0, 2), // 지연시간 옵션
  });
}
floatingObject('.float1', 1, 15);
floatingObject('.float2', 0.5, 15);
floatingObject('.float3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 적어줌
    triggerHook: 0.8, // 뷰포트 특정 지점에서 감시 0 ~ 1 사이
  })
    .setClassToggle(spyEl, 'show') // show가 붙어짐
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }
