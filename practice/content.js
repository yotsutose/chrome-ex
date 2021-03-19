$(function() {
  console.log("start");
  
  $('body').css('background-color','lightcyan');

  console.log($('.course-listitem .coursename').first().attr('href'));
  
  console.log("finish");
});

// $(function() {
//   console.log("コンテントスクリプトだよ");

//   // example をハイライトする (文字の背景色を変える)
//   const reg = new RegExp(/(example)/, "gi");
//   const $bodyText = $("body").html();
//   $("body").html(
//     $bodyText.replace(reg, "<span style='background-color: lightblue'>$1</span>")
//   );

//   // permission が含まれていたらアラート出す
//   if ($bodyText.match(/permission/i)) {
//     alert("このページには [permission] という文字列が含まれています");
//   }

//   // 画面内にボタンを追加して、clickされたら何か処理させる
//   $("div").append("<input type='button' value='送信' id='sendButton'>");
//   $("#sendButton").click(function() {
//     console.log('ボタンが押された');
//     // ここになんらかの処理
//     // 例えばページから特定の情報を取得してどっかのサーバーにPOSTするとかもできちゃう
//   });
// });


// 構造
// <li class="type_course depth_3 contains_branch" aria-labelledby="label_3_21" tabindex="-1">
//   <p class="tree_item branch" role="treeitem" id="expandable_branch_20_202" aria-expanded="false" data-requires-ajax="true" data-loaded="false" data-node-id="expandable_branch_20_202" data-node-key="202" data-node-type="20" tabindex="-1" aria-selected="false">
//     <a tabindex="-1" id="label_3_21" title="体育実技Ⅰ 202010355 前期 月曜3-4限_cls" href="https://cms6.ict.nitech.ac.jp/moodle38a/course/view.php?id=202">
//       20-1-0355
//     </a>
//   </p>
// </li>
