$(function () {
    // Слайдер

    $(".slicer__inner").slick({
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        draggable: true,
    });

    // Плавний скрол

    $("#menu").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            target = $(id),
            header = $("#menu"), // Замініть на відповідний селектор
            headerHeight = header.outerHeight(),
            offset = 10; // Замініть це на бажану величину в пікселях

        if (target.length) {
            var top = target.offset().top - headerHeight - offset;
            $("body, html").animate({ scrollTop: top }, 1500);
        }
    });
});
