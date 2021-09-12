let checklist = [];

function check_invalid() {
    checklist = [];
    let fieldlist = document.getElementsByClassName('mdui-textfield-input-card');
    let commit_btn = document.getElementById('btn-generate');
    if (commit_btn === null) {
        return;
    }
    Array.prototype.slice.call(fieldlist).forEach(element => {
        let textfield_input = element;
        let input_value = element.value;
        if (
            element.classList.contains('mdui-textfield-invalid-html5') ||
            (
                (textfield_input.required) && input_value == ""
            )
        ) {
            checklist.push(false);
        } else {
            checklist.push(true);
        };
    });
    if (checklist.indexOf(false) > -1) {
        commit_btn.disabled = 'disabled';
    } else {
        commit_btn.removeAttribute('disabled');
    }
    console.log(checklist);
};

window.onload = function () {
    mdui.$('#page-progress').hide();
};