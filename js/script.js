function stamp_update() {
    // テキスト入力
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();
    var text3 = $('#text3').val();

    // canvasに描画する処理
    var canvas = document.getElementById('stamp');  // HTMLCanvasElement
    var ctx = canvas.getContext('2d');  // CanvasRenderingContext2D
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = $('#colorPicker').val();

    if(text2.length == 0){
        // 1行
        ctx.font = "bold 390pt " + ($('[class="checkbox"]:checked').map(function(){return $(this).val()}).get()[0]);
        ctx.textBaseline = "middle";
        ctx.fillText(text1, 0, 250, 500);

    }else if(text3.length == 0){
        // 2行
        ctx.font = "bold 210pt " + ($('[class="checkbox"]:checked').map(function(){return $(this).val()}).get()[0]);
        ctx.textBaseline = "middle";
        ctx.fillText(text1, 0, 125, 500);
        ctx.fillText(text2, 0, 375, 500);

    }else{
        // 3行
        ctx.font = "bold 130pt " + ($('[class="checkbox"]:checked').map(function(){return $(this).val()}).get()[0]);
        ctx.textBaseline = "middle";
        ctx.fillText(text1, 0, 83, 500);
        ctx.fillText(text2, 0, 250, 500);
        ctx.fillText(text3, 0, 415, 500);

    }
}

function text_box_update() {
    var text1 = $('#text1').val();
    var text2 = $('#text2').val();

    if(text1.length == 0){
        $("#text2").prop('disabled', true);
        $("#text3").prop('disabled', true);
        $("#text2").val("");
        $("#text3").val("");
    }else if(text1.length > 0 && text2.length == 0){
        $("#text2").prop('disabled', false);
        $("#text3").prop('disabled', true);
        $("#text3").val("");
    }else if(text1.length > 0 && text2.length > 0){
        $("#text2").prop('disabled', false);
        $("#text3").prop('disabled', false);
    }
}

$('#colorPicker').on('change', function(e){
    var color = e.detail[0];
    $(this).val(color);
    // console.log("picked color : ", color);
    text_box_update();
    stamp_update();
});

$('#download_btn').click(function(){
    var canvas = document.getElementById('stamp');

    //アンカータグを作成
    var a = document.createElement('a');
    //canvasをJPEG変換し、そのBase64文字列をhrefへセット
    a.href = canvas.toDataURL('image/png');
    //ダウンロード時のファイル名を指定
    a.download = 'stamp.png';
    //クリックイベントを発生させる
    a.click(); 
});

$(".checkbox").on("click", function(){
    $('.checkbox').prop('checked', false);  //  全部のチェックを外す
    $(this).prop('checked', true);  //  押したやつだけチェックつける
});


$('#text1').keyup(function() {
    text_box_update();
    stamp_update();
});

$('#text2').keyup(function() {
    text_box_update();
    stamp_update();
});

$('#text3').keyup(function() {
    text_box_update();
    stamp_update();
});

$('#font_meiryo').change(function(){
    text_box_update();
    stamp_update();
});

$('#font_Gothic').change(function(){
    text_box_update();
    stamp_update();
});

$('#font_mincho').change(function(){
    text_box_update();
    stamp_update();
});

$(document).ready(function() {
    text_box_update()
});

