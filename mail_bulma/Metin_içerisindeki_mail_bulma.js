function desenebul() {
    var değer = document.getElementById("içerik").innerHTML;
    var desen =/[A-Z0-9a-z_.-]+@[A-Z0-9a-z\-]+\.[A-Za-z]{2,3}/
    var sonuc = değer.match(desen);
    document.getElementById("sonuç").innerHTML = "Sayfanın içerisindeki mail :"+ sonuc;
}




