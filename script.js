// const socket = io('https://pukpuk-api.herokuapp.com');
const socket = io('http://localhost:3000');

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
    const pukpukSenderInput = document.getElementById('pukpukSender');
    let sender = pukpukSenderInput.value
    if (!sender) {
        sender = 'Anonim'
    }
    socket.emit('pukpuk', { data: {
        sender,
        isPukpuk: true
    } });
}

socket.on('pukpuk', ({ data }) => {
    handleReceivePukpuk(data);
})

const handleReceivePukpuk = (data) => {
    pukpuk();
    const pukpuks = document.getElementById('pukpuks');
    if (pukpuks.innerText === 'Belum ada puk puk') {
        pukpuks.innerHTML = `<li class="my-2 font-bold text-center">Puk puk dari ${data.sender}</li>`;
    } else {
        pukpuks.innerHTML = `<li class="my-2 font-bold text-center">Puk puk dari ${data.sender}</li>` + pukpuks.innerHTML;
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));
