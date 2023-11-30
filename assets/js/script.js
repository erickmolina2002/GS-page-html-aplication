const sendData = document.querySelector('#send');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

nameInput.addEventListener('input', () => {
    updateInputColor();
});
emailInput.addEventListener('input', () => {
    updateInputColor();
});

sendData.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const validatName = validName(name);
    const validatEmail = validEmail(email);

    if (validatEmail && validatName) {
        const section = document.getElementById('form-data');
        section.style.height = '6rem';
        section.innerHTML = `
            <div id="show-message" >
                <p>${name.charAt(0).toUpperCase() + name.slice(1)} Agradecemos o contato!!</p>
            </div>
            `;
        setTimeout(() => {
            section.style.height = '26rem';
            section.style.width = '50rem';
            section.style.borderRadius = '3rem';
            section.innerHTML = `
            <span id="programers">
        <div class="card-image">
            <img src="/assets/image/erick.png" alt="">
            <table>
                <tr>
                    <td>Nome</td>
                    <td>RM</td>
                </tr>
                <tr>
                    <td>Erick Molina</td>
                    <td>553852</td>
                </tr>
            </table>

        </div>
        <div class="card-image">
            <img src="/assets/image/edu.png" alt="">
            <table>
                <tr>
                    <td>Nome</td>
                    <td>RM</td>
                </tr>
                <tr>
                    <td>Eduardo Fidelis</td>
                    <td>552795</td>
                </tr>
            </table>
        </div>
    </span>
            `;
          ;
        }, 2000);
    }
});

function validEmail(email) {
    const errorMessageEmail = document.querySelector('#error-message-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorMessageEmail.innerHTML = '';
    animateErrorMessages();

    if (!email.trim()) {
        errorMessageEmail.innerHTML += '<p>O campo Email não pode estar vazio</p>';
        emailInput.classList.add('error-input');
        return false;
    }
    if (!emailRegex.test(email)) {
        errorMessageEmail.innerHTML += '<p>O formato do email é inválido</p>';
        emailInput.classList.add('error-input');
        return false;
    }
    emailInput.classList.add('success-input');
    return true;
}

function validName(name) {
    const errorMessageName = document.querySelector('#error-message-name');
    errorMessageName.innerHTML = '';
    animateErrorMessages();

    if (!name.trim()) {
        errorMessageName.innerHTML += '<p>O campo Nome não pode estar vazio</p>';
        nameInput.classList.add('error-input');
        return false;
    }
    if (name.length < 5) {
        errorMessageName.innerHTML += '<p>O nome deve conter mais de 5 caracteres</p>';
        nameInput.classList.add('error-input');
        return false;
    }
    nameInput.classList.add('success-input');
    return true;
}

function animateErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');

    errorMessages.forEach(message => {
        message.classList.remove('show-error');
        setTimeout(() => {
            message.classList.add('show-error');
        }, 10);
    });
}

function updateInputColor() {
    const name = nameInput.value;
    const email = emailInput.value;

    if (email) {
        if (validEmail(email)) {
            emailInput.classList.remove('error-input');
            emailInput.classList.add('success-input');
        } else {
            emailInput.classList.remove('success-input');
            emailInput.classList.add('error-input');
        }
    }

    if (name) {
        if (validName(name)) {
            nameInput.classList.remove('error-input');
            nameInput.classList.add('success-input');
        } else {
            nameInput.classList.remove('success-input');
            nameInput.classList.add('error-input');
        }
    }
}