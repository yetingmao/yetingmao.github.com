const Alert = function (str) {
    let _alertDom = document.querySelector(".alertModel");
    if (!_alertDom) {
        let _html = `
            <div class='model-dialog alertModel'>
                <div class="model-overlay"></div>
                <div class= 'dialog-container dialog-container-smaller'>
                    <div class='dialog' >
                        <div class="dialog-title">
                            提示
                        </div>
                        <div class="dialog-content">
                             `+ str + `
                        </div>
                        <div class="dialog-action">
                            <button class="btn btn-info btn-submit">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        const _dom = document.createElement('div');
        _dom.className = 'alert_layout';
        _dom.innerHTML = _html;
        document.querySelector('body').appendChild(_dom)
    } else {
        _alertDom.querySelector('.alertModel .dialog-content').innerHTML = str;
    }
    //显示
    const alertDom = document.querySelector(".alertModel");
    alertDom.className = alertDom.className + " dialog-fadeIn";
    //确定按钮和点击空白处消失
    const btn = document.querySelector(".alertModel .btn-submit");
    const overlay = document.querySelector(".alertModel .model-overlay");
    const inReg = new RegExp("dialog-fadeIn", 'g');
    btn.addEventListener("click", function () {
        alertDom.className = alertDom.className.replace(inReg, "");
    });
    overlay.addEventListener("click", function () {
        btn.click();
    })
}
const Confirm = function (str, cb) {
    let _alertDom = document.querySelector(".confirmModel");
    if (!_alertDom) {
        let _html = `
            <div class='model-dialog confirmModel'>
                <div class="model-overlay"></div>
                <div class= 'dialog-container dialog-container-small'>
                    <div class='dialog' >
                        <div class="dialog-title">
                            提示
                        </div>
                        <div class="dialog-content">
                             `+ str + `
                        </div>
                        <div class="dialog-action">
                            <button class="btn btn-info btn-cancel">取消</button>
                            <button class="btn btn-info btn-submit">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        const _dom = document.createElement('div');
        _dom.className = 'alert_layout';
        _dom.innerHTML = _html;
        document.querySelector('body').appendChild(_dom)
    } else {
        _alertDom.querySelector('.confirmModel .dialog-content').innerHTML = str;
    }
    //显示
    const alertDom = document.querySelector(".confirmModel");
    alertDom.className = alertDom.className + " dialog-fadeIn";
    //确定按钮和点击空白处消失
    const btn_submit = document.querySelector(".confirmModel .btn-submit");
    const btn_cancel = document.querySelector(".confirmModel .btn-cancel");
    const overlay = document.querySelector(".confirmModel .model-overlay");
    const inReg = new RegExp("dialog-fadeIn", 'g');
    let result = false;
    overlay.onclick = () => {
        alertDom.className = alertDom.className.replace(inReg, "");
        if (typeof cb == "function") {
            cb(result);
        }
    }
    btn_submit.onclick = () => {
        result = true;
        overlay.click();
    };
    btn_cancel.onclick = () => {
        result = false;
        overlay.click();
    };

}