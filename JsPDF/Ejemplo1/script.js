var content = document.getElementById('txtContent'),
button = document.getElementById('btnDownload');
 
function generatePDF(){
  var doc = new jsPDF();
 
  doc.setFontSize(12);
  doc.text(10, 10, content.value);
  doc.save('TextoEjemplo1.pdf');
}
 
button.addEventListener('click', generatePDF);