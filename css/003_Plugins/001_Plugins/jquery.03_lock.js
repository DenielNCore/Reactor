// Плагин делает одинаковыми высоту и ширину элементов. 
// При этом поддерживает цепочки - после вызова данного плагина можно продолжить вызывать другие плагины

(function ($) {

    $.fn.lock = function () {

        // возвращаем набор, для того, чтобы следующая функция в цепочке могла продолжить работу с этим набором
        return this.each(function () {

            $this = $(this);

            var max = Math.max(
                parseInt($this.css('height')),
                parseInt($this.css('width')));

            $this.css('width', max);
            $this.css('height', max);
        });

    };
})(jQuery);