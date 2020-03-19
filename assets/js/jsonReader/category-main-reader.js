
//페이지 로드시 json 데이터(게시글 전체) 불러오기
$.getJSON('./data/category.json', function(data){
  var html = '';
  $.each(data[0].category, function(index, entry){
    console.log(index);
    html += '<div class="category-card col-2" style="background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+entry.thumbnail+');">';
    html += '  <span class="count">'+index+'</span>';
    html += '  <span class="category-card-title" style="font-size:18px">'+entry.name+'</span>';
    html += '</div>';
    if(index==4){
      return false;
    }
  });
  $('#category').html(html);
});
// var html = '';
// var category_count_json = new Object();
// var category_count_array = new Array();
//
// $.getJSON('./data/category.json', function(data){
//   $.each(data[0].category, function(index, entry){
//     var no = entry.no;
//     var name = entry.name;
//     var super_no = entry.super_no;
//     var z_index = entry.z_index;
//
//     $.getJSON('./data/board.json', function(data){
//       var count = 0;
//       $.each(data[0].post, function(index, entry){
//         if(name == entry.category){
//           count++;
//         }
//       });
//       category_count_array.push({"name":name,"count":count});
//
//     });
//   });
// });
//
// var test = new Array();
// test.push({"test":"test","aa":"aa"});
//
// console.log(test);
//
// category_count_json.category_count = category_count_array;
// console.log(category_count_json);
//
// $.each(category_count_json, function(index, entry){
//     console.log(entry);
// });
