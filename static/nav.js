// 导航栏激发事件
// 获取可点击的标签和对应的标签
const toggles = document.querySelectorAll("nav>.toggle");
const toggle_item = document.querySelectorAll(".menu .toggle_item");
const showcase = document.querySelector(".showcase");
const footer = document.querySelector("footer");
footer.style.display = "block";

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

const label = document.querySelector("#menu-btn-1");
const menu_btn = document.querySelector("#menu-btn");
const main_left = document.querySelector("main>.container>.row>.col-md-9");
label.addEventListener("click", function () {
  if (menu_btn.checked) {
    main_left.classList.remove("big");
  } else {
    main_left.classList.add("big");
  }
});

// 侧边栏响应
let targetElement = document.querySelectorAll(".scroll-link");
let triggerElement = document.querySelectorAll("section[id^=anchor]");
let isTriggered = false;

window.addEventListener("scroll", function () {
  // 遍历所有触发元素
  for (let i = 0; i < triggerElement.length; i++) {
    // 获取当前触发元素的位置信息
    let triggerElementBottom =
      triggerElement[i].offsetTop + triggerElement[i].offsetHeight;
    let triggerElementTop = triggerElement[i].offsetTop;
    // 当触发元素完全进入视口时，改变目标元素的颜色
    if (
      triggerElementBottom >= window.scrollY &&
      triggerElementTop <= window.scrollY
    ) {
      if (!targetElement[i].classList.contains("active")) {
        targetElement[i].classList.add("active");
      }
    } else {
      // 当触发元素完全离开视口时，移除目标元素的颜色
      if (targetElement[i].classList.contains("active")) {
        targetElement[i].classList.remove("active");
      }
    }
  }
});

// 侧边栏响应伸缩
let menu_item = document.querySelectorAll("[id^=menu-item]");
let part = document.querySelectorAll(".col-md-9>section[id^=anchor]");

window.addEventListener("scroll", function () {
  // 遍历所有触发元素
  for (let i = 0; i < part.length; i++) {
    // 获取当前触发元素的位置信息
    let partBottom = part[i].offsetTop + part[i].offsetHeight;
    let partTop = part[i].offsetTop;
    if (partBottom >= window.scrollY && partTop <= window.scrollY) {
      menu_item[i].checked = true;
    } else {
      menu_item[i].checked = false;
    }
  }
});

// 侧边栏传送
const links = document.querySelectorAll(".scroll-link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
