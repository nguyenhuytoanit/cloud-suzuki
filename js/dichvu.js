const tabItems = document.querySelectorAll(".tab-service-item");
const tabContents = document.querySelectorAll(".tab-content");

tabItems.forEach((tabItem, index) => {
  tabItem.addEventListener("click", () => {
    tabItems.forEach((tabItem, index) => {
      tabItem.classList.remove("active");
    });
    tabContents.forEach((tabContent, index) => {
      tabContent.classList.remove("active-tab");
    });

    tabItem.classList.add("active");
    tabContents[index].classList.add("active-tab");
  });
});

const optionItems = document.querySelectorAll(".option-item");
const contentOptions = document.querySelectorAll(".content-info");

optionItems.forEach((optionItem,index) => {
  optionItem.addEventListener("click", () => {
    optionItems.forEach((optionItem) => {
      optionItem.classList.remove("active");
    });
    contentOptions.forEach((optionContent) => {
      optionContent.classList.remove("active-content");
    });
    optionItem.classList.add("active");
    contentOptions[index].classList.add("active-content");
  });
});
