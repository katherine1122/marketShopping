$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//全选
$('#checked').click(function(){
    $('.checked_id').prop("checked",this.checked)
});