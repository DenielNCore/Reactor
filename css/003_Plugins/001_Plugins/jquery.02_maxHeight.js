// Данный плагин возвращает высоту наибольшего элемента в наборе

(function ($) {

    $.fn.maxHeight = function () {

        var max = 0;

        // перебираем все элементы набора
        this.each(function () {
            max = Math.max(max, $(this).height());
        });

        return max;
    };
})(jQuery);