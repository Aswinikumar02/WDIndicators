/*creating a interface to read the file*/
module.exports= function(convert){
	if(!convert){
		throw Error("Not a number")
	}
	if(typeof convert != "number")
	{
		throw Error("Not a number");
	}
	var read=require('fs');              
	var lineReader = require('readline').createInterface({
		input: read.createReadStream('./inputdata/Indicators.csv'),
	});

	/*insializing variables*/
	var Array=[];           
	var heading= [];
	var row=0;
	var count=0;
	/*Reading the data from the csv file*/
	lineReader.on('line', function (line)  {
		if(row === 0){
			heading = line.split(',');
			row++;
		}
		else {
			var jsonObj = {};
			var currentLineData = line.split(',');
	       //console.log(currentLineData);
	       for (var j=0; j<heading.length; j++) {
	       	
	       	if(heading[j] == "Year"){
	       		if(currentLineData[j-3] == "IND" && (currentLineData[j-1] == "SP.URB.GROW")) {
	       			jsonObj[heading[j]] = currentLineData[j]; 
	       			count=1;
	       		}
	       		else
	       			count=0;
	       	} 
	       	if(heading[j] == "Value"){
	       		if(currentLineData[j-4] == "IND" && (currentLineData[j-2] == "SP.URB.GROW")) {
	       			jsonObj[heading[j]] = currentLineData[j]; 
	       			count=1;
	       		}
	       		else
	       			count=0;
	       	} 
	       	
	       }
	       if(count == 1)
	       	Array.push(jsonObj);

	       
	   }
	   

	});
	/*Appending the data into output file*/
	lineReader.on('close',function() {
		var jso=JSON.stringify(Array);
		read.writeFile('areachart.json',jso,function(err) {});
	});
return "JSON written successfully";
}
