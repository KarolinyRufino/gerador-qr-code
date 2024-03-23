const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');
const button = document.querySelector('button');

document.addEventListener('click', () => {
    genQRCode();
});

document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") genQRCode();
});

function genQRCode(){
    if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}