            $(".modal-button").click(function () {
                let modalId = $(this).attr("data-href");
                $("#" + modalId).addClass("show");
            });

            $(".modal-close").click(function () {
                $(this).closest(".modal").removeClass("show");
            });