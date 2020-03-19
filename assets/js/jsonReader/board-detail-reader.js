//페이지 로드시 json 데이터(게시글 전체) 불러오기
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

$.getJSON('./data/board.json', function(data){
  var html = '';
  $.each(data[0].post, function(index, entry){
    console.log("파라미터 : "+getParameters('no'));
    console.log("JOSN : " + entry.no);
    if(getParameters('no') == entry.no){
      html += '<div class="container_inner_box">';
      html += ' <div class="thumbnail" style="background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+entry.thumbnail+');">';
      html += '   <h1>'+entry.title+'</h1>';
      html += ' </div>';
      html += '</div>';
      html += '<div class="container section">';
      html += ' <div class="row">';
      html += '   <div class="col col-12">';
      html += '     <div class="container_inner">';
      html += '       <h3>'+entry.category+'</h3>';
      html += '       <div class="content">'+entry.body+'</div>';
      html += '     </div>';
      html += '   </div>';
      html += '  </div>';
      html += '</div>';
    }
  });
  console.log(html);
  $('#detail').html(html);
});
