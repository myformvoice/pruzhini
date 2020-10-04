$(document).ready(function() {


	// Маска для формы телефона

    $(".mobile").mask("+7 (999) 999-99-99");


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
	});


});




