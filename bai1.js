var math=parseFloat(prompt("Nhập vào điểm toán"));
do{
    math=parseFloat(prompt("Nhập lại điểm toán"));
}while(math>10||math<0);
var literature=parseFloat(prompt("Nhập vào điểm văn"));
do {
    literature=parseFloat(prompt("Nhập lại điểm văn"));
}while (literature>10||literature<0);
var english=parseFloat(prompt("Nhập vào điểm tiếng anh"));

do{
    english=parseFloat(prompt("Nhập lại điểm tiếng anh"));
}while (english>10||english<0);
var ave=((math*2)+literature+(english*2))/5;


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
