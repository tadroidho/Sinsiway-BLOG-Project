//페이지 로드시 json 데이터(게시글 전체) 불러오기
$.getJSON('./data/board.json', function(data){
  var html = '';
  $.each(data[0].post, function(index, entry){
    html += '<div class="card col col-4">';
    html += ' <div class="card-img-box">';
    html += '   <img src="'+entry.thumbnail+'" alt="Avatar" style="width:100%">';
    html += ' </div>';
    html += ' <div class="container">';
    html += '   <div class="content-day">';
    html += '     <i class="material-icons">calendar_today</i>';
    html += '     <time datetime="'+entry.date+'">'+entry.date+'</time>';
    html += '   </div>';
    html += '   <h4>'+entry.title+'</h4>';
    html += '   <div class="profile-content" style="left:8%; bottom:20px;">';
    html += '     <div class="profile-img"></div>';
    html += '     <span class="profile-name">신시웨이 관리자</span>';
    html += '     <i class="material-icons">chat_bubble_outline</i>';
    html += '     <span>'+entry.comment+'</span>';
    html += '   </div>';
    html += '   <div class="read-more" name="'+entry.no+'">READ MORE</div>';
    html += ' </div>';
    html += '</div>';
    if(index==8){
      return false;
    }
  });
  $('#post-list').html(html);
  console.log(data[0]);
});
