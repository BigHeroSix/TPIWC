document.body.addEventListener('complete', e =>{
    console.log('Llego al main');
    document.querySelector('details-marca').mostrarDetalle(e.detail.marca);
});

