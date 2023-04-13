var num = prompt("Eded daxil edin:");
if (!isNaN(num)) {
    if (num > 9 && num < 100) {
        var teklik = num % 10;
        var onluq = (num - teklik) / 10;
        var c = teklik * 10 + onluq;
        alert(c);
    }
    else {
        alert("2 reqemli eded daxil edin");
    }
}
else {
    alert("eded deyil")
}
