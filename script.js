const socket = io('https://pukpuk-api.herokuapp.com');

const pukpukButton = document.getElementById('pukpukButton');

const pukpuk = async () => {
    console.log('puk puk');
    const duration = 250;
    const gap = 100;
    navigator.vibrate(duration);
    await delay(duration);
    await delay(gap);
    console.log('puk puk');
    navigator.vibrate(duration);
    await delay(duration);
    await delay(gap);
    console.log('puk puk');
    navigator.vibrate(duration);
}

const handleSubmitPukpuk = () => {
    socket.emit('pukpuk', { data: true });
}

socket.on('pukpuk', ({ data }) => {
    handleReceivePukpuk(data);
})

const handleReceivePukpuk = () => {
    pukpuk();
    const pukpuks = document.getElementById('pukpuks');
    if (pukpuks.innerText === 'Belum puk puk') {
        pukpuks.innerHTML = '<li class="my-2 font-bold text-2xl text-center">Puk puk puk</li>';
    } else {
        pukpuks.innerHTML = '<li class="my-2 font-bold text-2xl text-center">Puk puk puk</li>' + pukpuks.innerHTML;
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));
