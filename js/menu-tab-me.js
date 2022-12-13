// id noticeButton 을 누르면, is-selected 클래스 추가,
// 만약 이미 있다면 클래스 제거

// id noticeButton의 클래스가 active라면

const menuItems = document.querySelector(".tab-list");

const tabHandler = (e) => {
  const noticeTab = document.querySelector("#noticeButton");
  const notice = document.querySelector("#notice");
  const archiveTab = document.querySelector("#archiveButton");
  const archive = document.querySelector("#archive");

  if (e.target === noticeTab) {
    noticeTab.classList.add("is-selected");
    archiveTab.classList.remove("is-selected");
    notice.classList.add("is-selected");
    archive.classList.remove("is-selected");
  }
  if (e.target === archiveTab) {
    // 트루라면?
    archiveTab.classList.add("is-selected");
    noticeTab.classList.remove("is-selected");
    notice.classList.remove("is-selected");
    archive.classList.add("is-selected");
  }
};

menuItems.addEventListener("click", tabHandler);
