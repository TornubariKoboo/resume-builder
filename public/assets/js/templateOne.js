$(document).ready(function(){

    var specialElementHandler = {
        '#editor': function(element, renderer){
            return true;
        }
    };

});
$('#cmd').click(function(){
    var doc = new jsPDF();
    doc.fromHTML($('#target').html(),15,15,{
        "width":170,
        "elementHandlers": specialElementHandlers

    });
    doc.save('sample-resume.pdf');
});