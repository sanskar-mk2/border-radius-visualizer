const root = document.querySelector(":root");

const setRD = (ob, where) => {
    root.style.setProperty(`--${where}`, ob.value + "%");
    getCSS();
};

const getCSS = () => {
    let tl = getComputedStyle(root).getPropertyValue("--TL");
    let tr = getComputedStyle(root).getPropertyValue("--TR");
    let br = getComputedStyle(root).getPropertyValue("--BR");
    let bl = getComputedStyle(root).getPropertyValue("--BL");
    let tl2 = getComputedStyle(root).getPropertyValue("--TL2");
    let tr2 = getComputedStyle(root).getPropertyValue("--TR2");
    let br2 = getComputedStyle(root).getPropertyValue("--BR2");
    let bl2 = getComputedStyle(root).getPropertyValue("--BL2");
    let out = `
#myDiv {
    border-top-left-radius: ${tl} ${tl2};
    border-top-right-radius: ${tr} ${tr2};
    border-bottom-right-radius: ${br} ${br2};
    border-bottom-left-radius: ${bl} ${bl2};
}
    `;
    document.getElementById("output").value = out;
};

const copyCSS = () => {
    let to_copy = document.getElementById("output").value;
    navigator.clipboard.writeText(to_copy);
};
