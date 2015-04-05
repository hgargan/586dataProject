<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<link href="StyleSheet.css" rel="stylesheet" type="text/css" />
<script>
$(document).ready(function(){
    loadXML("myData.xml");
});

function loadXML(dataFile) {
   //ajax call
    $.ajax({
		type: "GET",
		url: "myData.xml",
		dataType: "xml",
		success: parseXML});
   parseXML(xml);
}
  
function parseXML() {
    //loop through data
    buildHTML();
    buildCharts();
    buildTable();
    
}

function buildHTML() {
    //sore and write all the HTML code to the page
    
    
}

function buildCharts() {
    //do highcharts stuff
    
}

function buildTable() {
    //do dataTables.js stuff
    

</script>

