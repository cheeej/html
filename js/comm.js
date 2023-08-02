//  준비 이벤트
// html 코드를 모두 읽고나서 실행해줘
// $(document).ready(function () {}); - 일반형/ 아래 축약형
$(function () {
  // modal
  // .lst-bbs li:firsr-child를 클릭했을 때
  $(".lst-bbs li:first-child").click(function (event) {
    // a 태그의 링크 값 없애기
    event.preventDefault();
    // #modal 을 찾아서 display:flex로 변경해줘
    $("#modal").css("display", "flex");
    // $("#modal").show();로 쓸 경우, modal-box를 position:absolute(t/l/r/b0/ z-index로 설정해주어야함)
  });

  // .modal-box .btn-close를 클릭했을 때
  $(".modal-box .btn-close").on("click focus", function () {
    // #moal 안보이게 해줘
    $("#modal").hide();
    // "display", "none" = .hide
  });
});
