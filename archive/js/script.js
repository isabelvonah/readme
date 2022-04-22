let zoomStatus = 0;

function zoom_in(clickedId) {
    zoomStatus += 1;
    document.getElementById(clickedId).classList.add("focused", "zoom" + zoomStatus.toString());
    document.getElementById(clickedId).classList.remove("zoom-target");
    document.getElementById(clickedId).removeAttribute("onclick");
}

function zoom_out() {
    console.log("Hallo")
    document.getElementsByClassName("zoom" + zoomStatus.toString())[0].classList.add("zoom-target");

    document.getElementsByClassName("zoom" + zoomStatus.toString())[0].classList.remove("focused", "zoom" + zoomStatus.toString());
    zoomStatus -= 1;
}