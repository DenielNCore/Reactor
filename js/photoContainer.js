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
        $input = $(`input`);
        $q =$(`.searchPhoto > div`);
        $input.on(`input`, () => {
            let text = $input.val();
            let photo;
            text = text.toLowerCase();
            photo = photoNames.indexOf(text);
            if(text===photoNames[photo]) {
                spawnPhotoes(photo);
                $(`#one`).offset({top: 363});
                $(`#two`).offset({top: 268});
                $(`#three`).offset({top: 363});
                $(`#four`).offset({top: 511});
            } else {
                $(`#one`).offset({top: 563});
                $(`#two`).offset({top: 468});
                $(`#three`).offset({top: 563});
                $(`#four`).offset({top: 711});
                $el.children().remove();
            }
        })
    }
}