var accItem = document.getElementsByClassName("faqItem");
var accHD = document.getElementsByClassName("header-arrow-container");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "faqItem close";
  }
  if (itemClass == "faqItem close") {
    this.parentNode.className = "faqItem open";
  }
}