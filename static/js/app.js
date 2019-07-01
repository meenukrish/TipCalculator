
// ################## READ THE VALUES FROM THE FORM

var includepeople;

function showpeople(target)
{
  var peoplerow = d3.select("#peoplerow").attr("class", "");
  var tippersonrow = d3.select("#tippersonrow").attr("class", "");
  peoplerow.classed("showpeople", true)
  tippersonrow.classed("showpeople", true)

  includepeople = target.value;

  console.log(target.value);

}

function hidepeople(target)
{
  var peoplerow = d3.select("#peoplerow").attr("class", "");
  var tippersonrow = d3.select("#tippersonrow").attr("class", "");

  peoplerow.classed("hidepeople", true)
  tippersonrow.classed("hidepeople", true)

  includepeople = target.value;
  console.log(target.value);
}


function submitted()
{
  
var billamount = d3.select("#billtotal").node().value;
var tippercent = d3.select("#tippercent").node().value;

tippercentval = tippercent.split("%");

var tipvalue = ((billamount * tippercentval[0])/100).toFixed(2)

d3.select("#totaltip").text(`$${tipvalue}`)


if (includepeople =="yes")
{
  nofpeople = d3.select("#nofpeople").node().value; 
  var tipperson= (tipvalue/nofpeople).toFixed(2); 
  d3.select("#tipperperson").text(`$${tipperson}`)

}


};