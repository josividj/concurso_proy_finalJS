const saludoFinal = new Promise((resolve) => {
    setTimeout(() => {
        resolve(
            Swal.fire({
                title: "<h1>Gracias por Participar!</h1>",
                html: "<h2>Esperamos verlo pronto!</h2>",
                icon: "success",
            })
        );
    }, 3000);
});
