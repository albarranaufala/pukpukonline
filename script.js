const socket = io('https://pukpuk-api.herokuapp.com');

const pukpukButton = document.getElementById('pukpukButton');

const pukpuk = () => {
    console.log('puk puk');
    const duration = 200;
    navigator.vibrate(duration);
}

const handleSubmitPukpuk = () => {
    socket.emit('pukpuk', { data: true });
}

socket.on('pukpuk', ({ data }) => {
    handleReceivePukpuk(data);
})

const handleReceivePukpuk = () => {
    const pukpuks = document.getElementById('pukpuks');
    pukpuks.innerHTML += `<li>pukpuk</li>`;
    pukpuk();
}