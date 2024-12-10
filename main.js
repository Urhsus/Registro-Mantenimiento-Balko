document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mantenimientoForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const formData = new FormData(form);
        
        try {
            const response = await fetch('/registrar', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            
            if (data.success) {
                alert('Mantenimiento registrado exitosamente');
                form.reset();
                form.classList.remove('was-validated');
            } else {
                alert('Error al registrar el mantenimiento');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al registrar el mantenimiento');
        }
    });
});
