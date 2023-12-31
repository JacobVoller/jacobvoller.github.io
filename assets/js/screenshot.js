
function zeroPad(num) {
    return (num >= 0 && num < 10)
        ? "0" + num
        : num + "";
}

function dateStamp(){
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    const h = now.getHours();
    const mm = now.getMinutes();
    const s = now.getSeconds();

    return `${y}${zeroPad(m)}${zeroPad(d)}${zeroPad(h)}${zeroPad(mm)}${zeroPad(s)}`;
}
   
function screenshot(canvas, imgPrefix){
    if (!canvas) throw "Invalid canvas.";
    if (!domtoimage) throw "Failed to load library: dom-to-image";

    const scale = 2;
    const now = dateStamp();
    const fileName = `${imgPrefix}-${now}.jpeg`;

    domtoimage
        .toJpeg(canvas, {
            height: (canvas.offsetHeight * scale),
            width: (canvas.offsetWidth * scale),
            quality: 1,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                width: `${canvas.offsetWidth}px`,
                height: `${canvas.offsetHeight}px`
            }
        })
        .then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = fileName;
            link.href = dataUrl;
            link.click();
        });
}