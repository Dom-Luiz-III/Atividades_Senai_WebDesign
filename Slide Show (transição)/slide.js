var intervalo = 3000;

function slide1() {
    document.getElementById("banner").src = "banner1.jpg";
    setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById("banner").src = "banner2.jpg";
    setTimeout("slide3()",intervalo);

}

function slide3() {
    document.getElementById("banner").src = "banner3.jpg";
    setTimeout("slide4()",intervalo);

}

function slide4() {
    document.getElementById("banner").src = "banner4.jpg";
    setTimeout("slide5()",intervalo);

}

function slide5() {
    document.getElementById("banner").src = "banner5.jpg";
    setTimeout("slide6()",intervalo);

}

function slide6() {
    document.getElementById("banner").src = "banner6.jpg";
    setTimeout("slide7()",intervalo);

}

function slide7() {
    document.getElementById("banner").src = "banner7.jpg";
    setTimeout("slide1()",intervalo);

}