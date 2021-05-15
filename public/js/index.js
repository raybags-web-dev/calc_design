"use strict";

// asthetics and initial intaractivity
function alljQuery() {
  $(document).ready(function () {
    console.log("all resouces loaded.");

    $(".theme-btn-1").on("click", function () {
      $(".switch")
        .animate(
          {
            left: "0%",
          },
          100
        )
        .css({ background: "#303755" });
      $(this).css({ "box-shadow": "0px 0px 2px #cbecee" });
      $(".screen-container").css({
        background: "#182133",
      });
      $(".screen-container h2").css({
        color: "#fff",
      });
      $(".box button").css({
        color: "#fff",
        background: "#182133",
      });
      $(".del-btn").css({ background: "#303755" });
      $(".reset-btn, .eq-btn").css({ background: "#303755", color: "#fff" });
      $(".switch-container").css({ background: "#182133" });
      $(".button-board").css({ background: "#182133" });
      $(".numbers span").css({ background: "#182133" });
      $(".c-head").css({
        background: "#182133",
        "box-shadow": "0px 0px 5px #182133",
      });
      $("body").css({ background: "#303755" });
    });

    $(".theme-btn-2").on("click", function () {
      $(".switch")
        .animate(
          {
            left: `35%`,
          },
          100
        )
        .css({ background: "#fff", opacity: ".5" });
      $(this).css({ "box-shadow": "0px 0px 2px #cbecee" });
      $(".screen-container").css({
        background: "#fff",
        opacity: ".8",
      });
      $(".screen-container h2").css({
        color: "#182133",
      });
      $(".box button").css({
        color: "#182133",
        background: "#fff",
        opacity: ".5",
      });
      $(".reset-btn, .eq-btn, .del-btn").css({
        background: "#6b7880",
        color: "#fff",
        "backdrop-filter": "blur(100px)",
      });
      $(".switch-container").css({ background: "#6b7880" });
      $(".button-board").css({ background: "#9aaab4" });
      $(".numbers span").css({ background: "#6b7880" });
      $(".c-head").css({
        background: "#fff",
        opacity: ".8",
        "box-shadow": "0px 0px 5px #fff",
      });
      $("body").css({ background: "#1d1d1d" });
    });

    $(".theme-btn-3").on("click", function () {
      $(".switch")
        .animate(
          {
            left: `70%`,
          },
          100
        )
        .css({ background: "#462a06" });
      $(this).css({ "box-shadow": "0px 0px 2px #cbecee" });

      $(".screen-container").css({
        background: "#462a06",
      });
      $(".screen-container h2").css({
        color: "#fff",
      });
      $(".box button").css({
        color: "#fff",
        background: "#533c1d",
      });
      $(".reset-btn, .eq-btn, .del-btn").css({
        background: "#534c43",
        color: "#fff",
        "backdrop-filter": "blur(100px)",
      });
      $(".switch-container").css({ background: "#534c43" });
      $(".button-board").css({ background: "#462a06" });
      $(".numbers span").css({ background: "#534c43" });
      $(".c-head").css({
        background: "#462a06",
        "box-shadow": "0px 0px 5px #534c43",
      });
      $("body").css({ background: "#2f271b" });
    });

    // ==================== Math calculations =====================
    function calculator() {
      let sum = "";
      let len;
      let arr = [];
      let operators = ["+", "-", "*", "/"];
      let inputVal = document.getElementById("screen");
      $(".digit").on("click", function () {
        let num = $(this).attr("value");
        sum += num;
        arr.push(num);
        $("#screen").html(sum);
        len = inputVal.innerHTML.split("");
        console.log(len);
        //console.log(arr);
      });
      $(".operator").on("click", function (e) {
        e.preventDefault();
        let ops = $(this).attr("value");
        sum += ops;
        //arr.push(num);
        $("#screen").html(sum);
        len = inputVal.innerHTML;
        if (/(?=(\D{2}))/g.test(sum)) {
          sum = len.substring(0, len.length - 1);
          $("#screen").html(sum);
        }
      });

      $("#equal").on("click", function () {
        let total = eval(sum);
        //$("#screen").attr('value', total);
        $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
      });

      $("#clear").on("click", function () {
        sum = "";
        arr = [];
        $("#screen").html(0);
      });
    }
    calculator();
  });
}
export { alljQuery };
