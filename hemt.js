var codesquaresize = 150; 
        
new QRCode(document.getElementById("qrcode1"), {
    text: "https://www.lownoisefactory.com/datasheets/LNF-LNC0.3_14A_sn2142Z.pdf",
    width: codesquaresize,
    height: codesquaresize,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

new QRCode(document.getElementById("qrcode2"), {
    text: "https://www.lownoisefactory.com/datasheets/LNF-LNC0.3_14A_sn2054Z.pdf",
    width: codesquaresize,
    height: codesquaresize,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

new QRCode(document.getElementById("qrcode_repo"), {
    text: "https://github.com/lafefspietz/hemt-media",
    width: codesquaresize,
    height: codesquaresize,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});