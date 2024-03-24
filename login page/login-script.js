function toggleForm(formName) {
    var forms = document.querySelectorAll('.form');
    forms.forEach(function (form) {
        form.classList.remove('active');
    });

    var form = document.getElementById(formName + 'Form');
    form.classList.add('active');

}

function validateSignIn(){
        var username = document.getElementById('signinUsername')

}

n