(function ($) {

    var methods = {
        init: function (options) {
            alert('init');
        },
        show: function () {
            alert('show');
        },
        hide: function () {
            alert('hide');
        },
        update: function (content) {
            alert('update data - ' + content.data);
        }
    };

    $.fn.block = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) { // если плагин вызывался без параметров или с объектом в качестве параметра
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.');
        }

        // Array.prototype.slice.call(arguments, 1) - метод убирает первый параметр из массива arguments.
        // http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
    };

})(jQuery);