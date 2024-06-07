$(document).ready(function () {
    $('#reco').on('input change', function () {
        if ($(this).val() != '') {
            $('#submit').prop('disabled', false);
        }
        else {
            $('#submit').prop('disabled', true);
        }
    });
});

function acceder(){
    alert('Se accedió correctamente')
}