$(document).ready(function(){

    //페이지 로드시 json 데이터 불러오기
    $.getJSON('./data/ex1.json', function(data){
      var html = '';
      $.each(data, function(index, entry){
        html += '<div class="entry">';
	    	  html += '<h3 class="term">' + entry.term + '</h3>';
	    	  html += '<div class="part">' + entry.part + '</div>';
	    	  html += '<div class="definition">';
	    	  html += entry.definition;
	    	  html += '</div>';
	    	  html += '</div>';
      });
      console.log(html);
      $('#dictionary').html(html);
    });

    //게시글 전체보기 페이지로 이동
    $(".load-more-post").click(function(){
      location.href = 'board-list.html';
    });
});
