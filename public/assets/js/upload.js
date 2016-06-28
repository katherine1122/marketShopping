//文件上传
var opts = {
    url: "/system/upload",
    type: "POST",
    beforeSend: function () {
        $("#loading").attr("class", "am-icon-spinner am-icon-pulse");
    },
    success: function (result, status, xhr) {
        if(result.status == "0") {
            alert(result.info);
            return false;
        }
        $("input[name='thumb']").val(result.info);
        $("#img_show").attr('src', result.info);
        $("#loading").attr("class", "am-icon-cloud-upload");
    },
    error: function (result, status, errorThrown) {
        alert('文件上传失败');
    }
}
$('#thumb_upload').fileUpload(opts);