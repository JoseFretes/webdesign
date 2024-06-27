var doc = new jsPDF();
var elementHTML = $('#content').html();
var specialElementHandlers = {
    '#content' : function(element, renderer){
        return true;
    }
};

doc.formHTML(elementHTML, 15,15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
});
doc.save('productos.pdf');