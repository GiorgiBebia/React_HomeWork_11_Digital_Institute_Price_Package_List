const isHover = (e) => e.parentElement.querySelector(":hover") === e;

CheckDiv("basic", "btn");
CheckDiv("basic2", "btn2");
CheckDiv("basic3", "btn3");
CheckDiv("basic4", "btn4");

function CheckDiv(var1, var2) {
  const basic = document.querySelector(`.${var1}`);
  document.addEventListener("mousemove", function checkHover() {
    const hovered = isHover(basic);
    if (hovered !== checkHover.hovered) {
      const btn = document.querySelector(`.${var2}`);
      if (btn) {
        btn.style.backgroundColor = hovered ? "#4d4c7d57" : "";
      }
      checkHover.hovered = hovered;
    }
  });
}
