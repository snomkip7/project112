var images = ["beach.jpg", "car2.jpg", "forest.jpg", "pencil.jpg", "hat.jpg"];
var results_micro = ["'name': 'water', 'confidence': 0.999684", "'object': 'Wheel', 'confidence': 0.534 AND 'name': 'land vehicle', 'confidence': 0.957034", "'name': 'tree', 'confidence': 0.9999896", "'name': 'writing implement', 'confidence': 0.806576133", "'name': 'hat', 'confidence': 0.9801668"];
var results_mobile = ["seashore, coast, seacoast, sea-coast", "beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon", "fountain", "ballpoint, ballpoint pen, ballpen, biro", "swimming cap AND abaya AND crash helmet"];
var results_acc = ["answer:beach, azure said:water, mobilenet said:seashore. Mobile net is more accurate", "answer:car, azure said:wheel and land vehicle, mobilenet said:beach wagon. Azure is more accurate", "answer:forest, azure said:tree, mobilenet said:fountain. Azure is more accurate", "answer:pencil, azure said:writing implement, mobilenet said:ballpoint pen. Azure is more accurate", "answer:hat, azure said:hat, mobilenet said:swimming cap and abaya and crash helmet. Azure is more accurate"];
var i = 0;
var j = 0;
var m = 0;
var a = 0;
function different(){
    document.getElementById("test").src = images[i];
    document.getElementById("micro").innerHTML = results_micro[j];
    document.getElementById("mobile").innerHTML = results_mobile[m];
    document.getElementById("result").innerHTML = results_acc[a];
    i++;
    j++;
    m++;
    a++;
    if(i>4){
        i=0;
        j=0;
        m=0;
        a=0;
    }
}