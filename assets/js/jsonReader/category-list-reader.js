
//페이지 로드시 json 데이터(게시글 전체) 불러오기
$.getJSON('./data/category.json', function(data){
  var html = '';
  $.each(data[0].category, function(index, entry){
    console.log(index);
    html += '<div class="category-card col-2" style="background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+entry.thumbnail+');">';
    html += '  <span class="count">'+index+'</span>';
    html += '  <span class="category-card-title" style="font-size:18px">'+entry.name+'</span>';
    html += '</div>';

  });
  $('#category').html(html);
});
