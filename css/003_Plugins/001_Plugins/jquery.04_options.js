(function ($) {

    $.fn.myTooltip = function (options) {

        var defaults = {
            border: "5px",
            color: "blue"
        };

        var settings = {};

        // В объект settings будут записаны свойства объектов defaults и options
        // свойства объекта options будут перетирать значения свойств объекта defaults если их имена совпадают
        $.extend(settings, defaults, options);

        return this.each(function () {

            current = $(this);

            current.mouseover(function () {
                $(this).text($(this).attr('title'));
                $(this).css('border', settings.border + ' solid black');
                $(this).css('background-color', settings.color);
            });

            current.mouseout(function () {
                $(this).empty('');
                $(this).css('border', '');
                $(this).css('background-color', '');
            });

        });

    };

})(jQuery);
