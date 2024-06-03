function downloadImage(imageSrc) {
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = imageSrc.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
