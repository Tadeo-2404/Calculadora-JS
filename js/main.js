jQuery(function () {
    $(".btn").click(function () {

        $(this).css("background-color", "orange");
        $(this).css("color", "black");

        setTimeout(() => {
            $(this).css("background-color", "");
            $(this).css("color", "");
        }, 1000);

        let $value = $(this).html();

        switch ($value) {
            case 'C':
                $("#input").val("");
                break;

            case '=':
                $("#input").val( eval( $("#input").val() ));
                break;

            default:
                $("#input").val($("#input").val() + $value); 
                break;
        }
    })
})