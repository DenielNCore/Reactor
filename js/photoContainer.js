function Photoes(photoes, parent) {
    let $el = $('<div class="searchPhoto"/>').appendTo(parent);
    let photoNames = photoes.map((item)=> {
        return item.name;
    });

    inputChange();

    function spawnPhotoes(photo) {
        $(`<div id="one"><img src="${photoes[photo].img1}"></div>
                <div id="two"><img src="${photoes[photo].img2}"></div>
                <div id="three"><img src="${photoes[photo].img3}"></div>
                <div id="four"><img src="${photoes[photo].img4}"></div>`).appendTo(`.searchPhoto`)
    }

    function inputChange() {
        let $input = $(`input`);
        let $q =$(`.searchPhoto > div`);
        $input.on(`input`, () => {
            let text = $input.val();
            let photo;
            text = text.toLowerCase();
            photo = photoNames.indexOf(text);
            if(text===photoNames[photo]) {
                spawnPhotoes(photo);
                $el.children().animate({
                    top: "-=200"
                },{duration: 2000,
                    complete: function() {
                    }
                });
            } else {
                $el.children().animate({
                    top: "+=1400"
                },{duration: 2000,
                    complete: function() {
                        $(this).remove();
                    }
                });
            }
        })
    }
}