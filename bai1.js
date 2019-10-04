let math=parseFloat(prompt("Nhập vào điểm toán"));
let literature=parseFloat(prompt("Nhập vào điểm văn"));
let english=parseFloat(prompt("Nhập vào điểm tiếng anh"));
let ave=((math*2)+literature+(english*2))/5;

    while (math > 10 || math < 0) {
        alert("Hãy nhập lại điểm");
        math = parseFloat(prompt("Nhập vào điểm toán"));

    }
    while(literature>10 || literature<0 ){
        alert("Hãy nhập lại điểm");
       literature=parseFloat(prompt("Nhập vào điểm văn"));
    }
    while (english>10||english<0){
        alert("Hãy nhập lại điểm");
        english=parseFloat(prompt("Nhập vào điểm tiếng anh"));
    }

if(ave<5){
    document.write("Điểm trung bình = "+ave+"</br>");
    document.write("Không Đạt");
}else if(ave>=5 &&ave<7.5){
    document.write("Điểm trung bình = "+ave+"</br>");
    document.write("Đạt");
}else if(ave>=7.6&& ave<8.5){
    document.write("Điểm trung bình = "+ave+"</br>");
    document.write("Khá");
}else {
    document.write("Điểm trung bình = "+ave+"</br>");
    document.write("Tốt");
}
