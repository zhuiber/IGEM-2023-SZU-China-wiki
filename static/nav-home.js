// 导航栏激发事件
// 获取可点击的标签和对应的标签
const toggles = document.querySelectorAll("nav>.toggle");
const toggle_item = document.querySelectorAll(".menu .toggle_item");
const showcase = document.querySelector(".showcase");
const footer = document.querySelector("footer");

// 滚轮下滑，导航栏上移，滚轮上滑，导航栏下移
let prevScrollpos = window.scrollY;
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || window.scrollY <= 0) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-130px";
    for (let i = 0; i < toggles.length; i++) {
      let id = toggles[i].id;
      let correspondingId = "corresponding" + id.substring(9);
      if (toggles[i].classList.contains("active")) {
        toggles[i].classList.remove("active");
        document.getElementById(correspondingId).classList.remove("active");
        showcase.classList.remove("active");
        footer.classList.remove("active");
      }
      if (toggle_btn.classList.contains("active")) {
        toggle_btn.classList.remove("active");
        dropdown_menu.classList.remove("active");
      }
      for (let i = 0; i < dropdown_toggles.length; i++) {
        if (dropdown_toggles[i].classList.contains("active")) {
          dropdown_toggles[i].classList.remove("active");
          showcase.classList.remove("active");
          footer.classList.remove("active");
        }
      }
    }
  }
  prevScrollpos = currentScrollPos;
});

// 导航栏激发事件
// 获取可点击的标签和对应的标签
// 绑定点击事件
for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", function () {
    let id = this.id;
    let correspondingId = "corresponding" + id.substring(9);

    if (this.classList.contains("active")) {
      // 如果点击的标签已经有active类名，移除
      this.classList.remove("active");
      document.getElementById(correspondingId).classList.remove("active");
      showcase.classList.remove("active");
      footer.classList.remove("active");
    } else {
      // 如果点击的标签没有active类名，移除其他标签的active类名，给点击的标签和对应标签添加active类名
      for (let j = 0; j < toggles.length; j++) {
        toggles[j].classList.remove("active");
        toggle_item[j].classList.remove("active");
        showcase.classList.remove("active");
        footer.classList.remove("active");
      }
      this.classList.add("active");
      document.getElementById(correspondingId).classList.add("active");
      showcase.classList.add("active");
      footer.classList.add("active");
    }
  });
}

// 导航栏激发事件
// 获取可点击的标签和对应的标签
const dropdown_toggles = document.querySelectorAll(
  "nav>.dropdown_menu>.toggle"
);
// 绑定点击事件
for (let i = 0; i < dropdown_toggles.length; i++) {
  dropdown_toggles[i].addEventListener("click", function () {
    let id = this.id;
    let correspondingId = "corresponding" + id.substring(9);

    if (this.classList.contains("active")) {
      // 如果点击的标签已经有active类名，移除
      this.classList.remove("active");
      document.getElementById(correspondingId).classList.remove("active");
      showcase.classList.remove("active");
      footer.classList.remove("active");
    } else {
      // 如果点击的标签没有active类名，移除其他标签的active类名，给点击的标签和对应标签添加active类名
      for (let j = 0; j < dropdown_toggles.length; j++) {
        dropdown_toggles[j].classList.remove("active");
        toggle_item[j].classList.remove("active");
        showcase.classList.remove("active");
        footer.classList.remove("active");
      }
      this.classList.add("active");
      document.getElementById(correspondingId).classList.add("active");
      showcase.classList.add("active");
      footer.classList.add("active");
    }
  });
}

// 响应式导航栏
const toggle_btn = document.querySelector("nav>.toggle_btn");
const dropdown_menu = document.querySelector("nav>.dropdown_menu");

toggle_btn.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    dropdown_menu.classList.remove("active");
    if (showcase.classList.contains("active")) {
      showcase.classList.remove("active");
    }
    if (footer.classList.contains("active")) {
      footer.classList.remove("active");
    }
    for (let i = 0; i < dropdown_toggles.length; i++) {
      if (dropdown_toggles[i].classList.contains("active")) {
        dropdown_toggles[i].classList.remove("active");
      }
    }
  } else {
    this.classList.add("active");
    dropdown_menu.classList.add("active");
  }
});
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
let thumbnails_Swiper = new Swiper(".thumbnails-Swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  breakpoints: {
    590: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
// 内容展现
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});
// 滚动的数字

// 创建一个 ScrollTrigger 触发器
ScrollTrigger.create({
  trigger: "#target1", // 触发器元素的选择器或 DOM 元素
  onEnter: myFunction1, // 当触发器进入视口时触发的函数
});
function myFunction1() {
  const block1 = document.querySelector(".block1");
  let numElement1 = block1.querySelector(".num");
  let num1 = 189;
  let count1 = 0;
  let time1 = 12;
  const timerId1 = setInterval(() => {
    if (count1 == num1) {
      clearInterval(timerId1);
    } else {
      count1 += 1;
      numElement1.innerText = count1;
    }
  }, time1);
}
ScrollTrigger.create({
  trigger: "#target2", // 触发器元素的选择器或 DOM 元素
  onEnter: myFunction2, // 当触发器进入视口时触发的函数
});
function myFunction2() {
  const block2 = document.querySelector(".block2");
  let numElement2 = block2.querySelector(".num");
  let num2 = 68;
  let count2 = 0;
  let time2 = 30;
  const timerId2 = setInterval(() => {
    if (count2 == num2) {
      clearInterval(timerId2);
    } else {
      count2 += 1;
      numElement2.innerText = count2;
    }
  }, time2);
}
ScrollTrigger.create({
  trigger: "#target3", // 触发器元素的选择器或 DOM 元素
  onEnter: myFunction3, // 当触发器进入视口时触发的函数
});
function myFunction3() {
  const block3 = document.querySelector(".block3");
  let numElement3 = block3.querySelector(".num");
  let num3 = 60;
  let count3 = 0;
  let time3 = 30;
  const timerId3 = setInterval(() => {
    if (count3 == num3) {
      clearInterval(timerId3);
    } else {
      count3 += 1;
      numElement3.innerText = count3;
    }
  }, time3);
}

// 凝珠展开和收起
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".polycobead",
      start: "bottom center",
      end: "+=1750 center",
      scrub: true,
      // markers: true,
    },
  })
  .to(".polycobead-up", { y: 650, x: "-50vw" }, 0)
  .to(".polycobead-rna", { y: 650, x: "-50vw" }, 0)
  .to(".polycobead-immu", { y: 650, x: "-50vw" }, 0)
  .to(".polycobead-down", { y: 650, x: "-50vw" }, 0)
  .to(".polycobead-up", { y: 1050 })
  .to(".polycobead-rna", { y: 1150 }, "<")
  .to(".polycobead-immu", { y: 1350 }, "<")
  .to(".polycobead-down", { y: 1450 }, "<")
  .to(".polycobead-up", { y: 1963, x: 300, width: "10%", opacity: 0.2 }, )
  .to(".polycobead-immu", { y: 1908, x: 237, width: "5%", opacity: 0.2 }, "<")
  .to(".polycobead-rna", { y: 1884, x: 231, width: "5%", opacity: 0.2 }, "<")
  .to(".polycobead-down", { y: 1850, x: 334, width: "10%", opacity: 0.2 }, "<");

  //award
var award_swiper = new Swiper(".award-swiper", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});