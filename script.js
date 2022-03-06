const setTL = (ob) => {
    document.getElementById("test-sub").style.borderTopLeftRadius = ob.value+"px";
}

const setTR = (ob) => {
    document.getElementById("test-sub").style.borderTopRightRadius = ob.value+"px";
}

const setBR = (ob) => {
    document.getElementById("test-sub").style.borderBottomRightRadius = ob.value+"px";
}

const setBL = (ob) => {
    document.getElementById("test-sub").style.borderBottomLeftRadius = ob.value+"px";
}

const getCSS = () => {
    let ob = document.getElementById("test-sub");
    let tl = ob.style.borderTopLeftRadius;
    let tr = ob.style.borderTopRightRadius;
    let br = ob.style.borderBottomRightRadius;
    let bl = ob.style.borderBottomLeftRadius;
    let out = `
#myDiv {
    border-top-left-radius: ${tl.substring(0, tl.length-2)||0}%;
    border-top-right-radius: ${tr.substring(0, tr.length-2)||0}%;
    border-bottom-right-radius: ${br.substring(0, br.length-2)||0}%;
    border-bottom-left-radius: ${bl.substring(0, bl.length-2)||0}%;
}
    `
    document.getElementById("output").value = out;
}

const copyCSS = () => {
    let to_copy = document.getElementById("output").value;
    navigator.clipboard.writeText(to_copy);
    
}