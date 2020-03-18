$(document).ready(function(){

    //페이지 로드시 json 데이터 불러오기
    $.getJSON('./data/ex1.json', function(data){
      var html = '';
      $.each(data, function(index, entry){
        html += '<div class="card col col-4">';
        html += ' <div class="card-img-box">';
        html += '   <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">';
        html += ' </div>';
        html += ' <div class="container">';
        html += '   <div class="content-day">';
        html += '     <i class="material-icons">calendar_today</i>';
        html += '     <time datetime="2020-03-18">July, 20 2019</time>';
        html += '   </div>';
        html += '   <h4>'+entry.post.title+'</h4>';
        html += '   <div class="profile-content" style="left:8%; bottom:20px;">';
        html += '     <div class="profile-img"></div>';
        html += '     <span class="profile-name">신시웨이 관리자</span>';
        html += '     <i class="material-icons">chat_bubble_outline</i>';
        html += '     <span>15</span>';
        html += '   </div>';
        html += '   <div class="read-more">READ MORE</div>';
        html += ' </div>';
        html += '</div>';
	    	//html += '<h3 class="term">' + entry.post.no + '</h3>';
	    	//html += '<div class="part">' + entry.part + '</div>';
	    	//html += '<div class="definition">';
	    	//html += entry.definition;
      });
      console.log(html);
      $('#dictionary').html(html);
    });


    //게시글 전체보기 페이지로 이동
    $(".load-more-post").click(function(){
      location.href = 'board-list.html';
    });
});
