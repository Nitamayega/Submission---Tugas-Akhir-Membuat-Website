function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    void document.getElementById('feedback-form').offsetHeight;
    document.getElementById('feedback-form').classList.add('active');
}

function handleSubmit() {
    Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan sudah dikirim! Terima kasih atas pesan atau sarannya.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            resetForm();
        }
    });

    return false;
}