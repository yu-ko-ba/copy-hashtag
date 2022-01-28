const hashtag = document.getElementById("hashtag");
const output = document.getElementById("output");
const copyButton = document.getElementById("copyButton");


function sleep(msec) {
    return new Promise(function(resolve) {
        setTimeout(function() {resolve()}, msec);
    });
}

async function autoReset() {
    await sleep(1800);
    output.textContent = "";
}


copyButton.addEventListener("click", () => {
    console.log("ボタンが押されました");
    if (navigator.clipboard) {
        navigator.clipboard.writeText(hashtag.textContent)
        output.textContent = "コピーしました！";
        autoReset();
    }
});
