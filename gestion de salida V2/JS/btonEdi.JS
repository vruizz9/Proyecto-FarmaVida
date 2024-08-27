const inputs = document.querySelectorAll('input');
const editarBtn = document.getElementById('editarBtn');
const guardarBtn = document.getElementById('guardarBtn');
const borrarBtn = document.getElementById('borrarBtn');
const confirmarBorrarBtn = document.getElementById('confirmarBorrarBtn');

function habilitarInputs() {
    inputs.forEach(input => {
        input.disabled = false;
    });
    guardarBtn.disabled = false;
    editarBtn.disabled = true;
}

function deshabilitarInputs() {
    inputs.forEach(input => {
        input.disabled = true;
    });
    guardarBtn.disabled = true;
    editarBtn.disabled = false;
}

function limpiarInputs() {
    inputs.forEach(input => {
        input.value = '';
    });
}

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
            <div class="custom-alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
            </div>
        `;
    alertPlaceholder.append(wrapper);
    setTimeout(() => {
        wrapper.remove();
    }, 3000);
}

editarBtn.addEventListener('click', habilitarInputs);

guardarBtn.addEventListener('click', () => {
    showAlert('Se han guardado los datos con éxito', 'success');
    deshabilitarInputs();
});

confirmarBorrarBtn.addEventListener('click', () => {
    limpiarInputs();
    showAlert('Se han borrado los datos con éxito', 'success');
    const modal = document.querySelector('#exampleModal');
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
});