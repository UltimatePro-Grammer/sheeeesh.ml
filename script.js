const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get('d');
const playSheesh = urlParams.get("sheesh");
const enhance = ()=>{
    // URL Progressive enhancement from https://github.com/jonroig/emojiurlifier
    var emojiurlifier=function(emojiDomain,standardDomain){var wl=window.location;var useEmojiDomain=/^((?!chrome).)*safari/i.test(navigator.userAgent);if(navigator.userAgent.indexOf("CriOS")>-1){useEmojiDomain=false}var currentUrl=wl.protocol+"//"+wl.hostname;var outputUrl=useEmojiDomain?emojiDomain:standardDomain;if(currentUrl===outputUrl){return}outputUrl+=wl.pathname;outputUrl+=wl.search;window.location=outputUrl};
    emojiurlifier("https://xn--ps9haaa.ml", "https://sheeeesh.ml");
}

if (!destination) {
    enhance();

    document.title = "sheeesh link forwarder 🥶🥶🥶";
    const counter = document.getElementById("sh-counter")
    let sheeshes = 0;
    document.getElementById("sh-btn").onclick = ()=>{
        const sheesh = new Audio('sheesh.mp3');
        sheesh.play();
        sheeshes++;
        counter.textContent = `${sheeshes} sheesh${sheeshes == 1 ? "" : "es"}`;
    }

    document.getElementById("msg").style.display = "none";
    document.getElementById("welcome").style.display = "block";

    const url = document.getElementById("url");
    const copy = document.getElementById("copy-result");
    const play = document.getElementById("play");
    const emoji = document.getElementById("emoji");
    const result = document.getElementById("result");
    const preview = document.getElementById("preview");

    url.onclick = ()=>url.select();
    result.onclick = ()=>result.select();
    copy.onclick = ()=>{
        navigator.clipboard.writeText(result.value);
        copy.textContent = "Copied!";
        copy.style.backgroundColor = "#05f5b5";
        copy.style.color = "black";
        setTimeout(()=>{
            copy.textContent = "Copy Link";
            copy.style.backgroundColor = "";
            copy.style.color = "";
        }, 2000);
    }
    result.style.height = result.scrollHeight + "px";

    const setResult = ()=>{
        if(url.value === "") return;
        result.textContent = `https://${emoji.checked ? "🥶🥶🥶🥶" : "sheeeesh"}.ml/?d=${url.value}${play.checked ? "&sheesh=SHEEESH" : ""}`;
        try {
            new URL(url.value);
            preview.style.display = "inline-block";
            preview.href = result.textContent;
        } catch(_) {
            // invalid url, dont show preview
        }

        // resize the textarea automatically
        // this solution is from https://stackoverflow.com/a/25621277
        result.style.height = 'auto';
        result.style.height = (result.scrollHeight) + 'px';
    };

    url.oninput = setResult;
    play.oninput = setResult;
    emoji.oninput = setResult;
} else {
    if(playSheesh !== null) {
        enhance();
        const modal = document.getElementById("modal");
        modal.style.display = "flex";
        modal.onclick = ()=>{
            modal.style.display = "none";
            document.body.appendChild(modal);
            const sheesh = new Audio('sheesh.mp3');
            sheesh.play();
            sheesh.onended = ()=>{
                window.location.href = destination;
            }
        }
    } else {
        window.location.href = destination;
    }
}