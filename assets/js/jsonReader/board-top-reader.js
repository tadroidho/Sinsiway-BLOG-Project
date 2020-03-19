//페이지 로드시 json 데이터(게시글 전체) 불러오기
$.getJSON('./data/board.json', function(data){
  var html = '';
  $.each(data[0].post, function(index, entry){
    console.log(index);
    html += '<div class="rank-list">';
    html += '  <span class="count">'+index+'</span>';
    html += '  <a href="./board.html?no='+entry.no+'"><div class="top-bard-thumbnail" style="background: url('+entry.thumbnail+')"></div></a>';
    html += '  <div class="rank-list-content">';
    html += '    <h4>'+entry.title+'</h4>';
    html += '    <i class="material-icons">calendar_today</i>';
    html += '    <time datetime="'+entry.date+'">'+entry.date+'</time>';
    html += '  </div>';
    html += '</div>';
    if(index==2){
      return false;
    }
  });
  $('#top-board').html(html);
});
