var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");

for (let index = 0; index < selectPlanButtons.length; index++) {
  selectPlanButtons[index].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}
