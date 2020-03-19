$(document).ready(function(){

    //게시글 전체보기 버튼 클릭 이벤트
    $(".load-more-post").click(function(){
      location.href = 'board-list.html';
    });

    //동적으로 생성된 게시글 바로가기 버튼 클릭 이벤트
    $(document).on('click','.read-more',function(){
      location.href = 'board.html?no='+$(this).attr('name');
    });

});
