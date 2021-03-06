var editBook = {

    ajaxFileUpload: function(){
        if($('#edit-photocover').val() == "") {
            editBook.ajaxSubmitForm();
        } else if(addBookFun.validateImage($('#edit-photocover'))){
            addBookFun.addButtonDisabled(true);
            $.ajaxFileUpload(
                {
                    url: basePath + '/upload.do',
                    secureuri: false,
                    fileElementId: 'edit-cover',
                    dataType: 'json',
                    success: function (result){
                        if(result.resultCode === 'success') {
                            $('#edit-coverImageId').val(result.coverImageId);
                            $("#edit-cover").parent().removeClass('has-error').addClass('has-success');
                            editBook.ajaxSubmitForm();
                        }
                    }
                }
            )
        }
    },
    ajaxSubmitForm: function(){

        var formData = {
            name: $('#edit-name').val(),
            author: $('#edit-author').val(),
            isbn: $('#edit-isbn').val(),
            publisher:$('#edit-publisher').val(),
            coverImageId:$('#edit-coverImageId').val(),
            introduction: $('#edit-introduction').val()
        };

        var changedData = {};
        for(var bookitem in formData){
            if(formData[bookitem] != editBook.bookData[bookitem] ){

                changedData[bookitem] = formData[bookitem];
            }
        }
        changedData.id = $("#book-id").val();

        $.ajax({
            type: "post",
            url:  basePath + "/editBook.do",
            contentType: "application/json; charset=utf-8",
            dataType:'json',
            data: JSON.stringify(changedData),
            success: function (result) {
                if(result.resultCode === 'success'){
                    $('#edit-successTips').removeClass('hide').text('Update successfully.');
                    setTimeout(editBook.closeModal,2000);
                }else{
                    editBook.addButtonDisabled(false);
                }
            },
            error: function(){
                editBook.addButtonDisabled(false);
            }
        });
    },
    closeModal: function(){
        $('#editBookForm').modal('hide');
        editBook.addButtonDisabled(false);
        window.location.reload();
    },
    addButtonDisabled: function(Boolean){
        $('#submitEdit').prop('disabled',Boolean)
    }
}

$(function(){

    $('#editBtn').click(function(){
        editBook.bookData = {
            name: $('#edit-name').val(),
            author: $('#edit-author').val(),
            isbn: $('#edit-isbn').val(),
            publisher:$('#edit-publisher').val(),
            coverImageId:$('#edit-coverImageId').val(),
            introduction: $('#edit-introduction').val()
        };
    });

    $('#edit-browse').click(function(){
        $('#edit-cover').click();
    });

    $('#edit-cover').change(function() {
        var filename = $(this).val();
        filename = filename.substring(filename.lastIndexOf('\\')+1);
        $('#edit-photocover').val(filename);
        addBookFun.validateImage($('#edit-photocover'));
    });

    addBookFun.validateForm("editBookForm",$("#book-id").val());

})