var xhr = new XMLHttpRequest;
 var xhr1= new XMLHttpRequest;
 var xhr2= new XMLHttpRequest;
 var xhr3= new XMLHttpRequest;

var parsedrecord;
 var parsedrecord1;
 var parsedrecord2;
 var parsedrecord3;
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
    //event listener
    document.getElementById("quadrant").addEventListener("keyup", function (){ searchByQuadrant(this.value);},false);
    document.getElementById("des").addEventListener("keyup", function (){ searchByDes(this.value);},false);
    document.getElementById("date").addEventListener("keyup", function (){ searchByDate(this.value);},false);


    document.getElementById("efn").addEventListener("keyup", function (){ searchByFileNo(this.value);},false);
    document.getElementById("itype").addEventListener("keyup", function (){ searchByInType(this.value);},false);
    document.getElementById("des2").addEventListener("keyup", function (){ searchByInJopD(this.value);},false);

    document.getElementById("cd").addEventListener("keyup", function (){ searchByCd(this.value);},false);
    document.getElementById("mby").addEventListener("keyup", function (){ searchByInMby(this.value);},false);
    document.getElementById("td").addEventListener("keyup", function (){ searchByInTyD(this.value);},false);

    document.getElementById("sc").addEventListener("keyup", function (){ searchByArtist(this.value);},false);
    document.getElementById("ti").addEventListener("keyup", function (){ searchByInTitle(this.value);},false);
    document.getElementById("tn").addEventListener("keyup", function (){ searchBytname(this.value);},false);
   
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200 && xhr1.readyState == 4 && xhr1.status == 200 && xhr2.readyState == 4 && xhr2.status == 200 && xhr3.readyState == 4 && xhr3.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
     parsedrecord1 = JSON.parse(xhr1.responseText);
     parsedrecord2 = JSON.parse(xhr2.responseText);
     parsedrecord3 = JSON.parse(xhr3.responseText);
      
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
  xhr.send();
	
   xhr1.open("GET", "https://data.calgary.ca/resource/8ced-xbvn.json", true);
   xhr1.send();

  xhr2.open("GET", "https://data.calgary.ca/resource/da6k-wpxb.json", true);
  xhr2.send();

  xhr3.open("GET", "https://data.calgary.ca/resource/2kp2-hsy7.json", true);
  xhr3.send();
}
function searchByQuadrant(quadrant)
{
    //set up table
    var output="<tr><th>Incident Info</th><th>Description</th><th>Latitude</th><th>Longitude</th><th>Quadrant</th><th>Date</th><th>Map</th></tr>";
    var quadrant1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            quadrant1=record.quadrant;//assign
            if(quadrant1.startsWith(quadrant))//partial match on string
            {
                output+="<tr><td>";
                output+=record.incident_info;
                output+="</td><td>"
                output+=record.description;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                output+=record.quadrant;
                output+="</td><td>";
                output+=record.start_dt;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByDes(description)
{
    //set up table
    var output="<tr><th>Incident Info</th><th>Description</th><th>Latitude</th><th>Longitude</th><th>Quadrant</th><th>Date</th><th>Map</th></tr>";
    var acctype; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            acctype=record.description;//assign
            if(acctype.toUpperCase().startsWith(description.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.incident_info;
                output+="</td><td>"
                output+=record.description;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                output+=record.quadrant;
                output+="</td><td>";
                output+=record.start_dt;
                output+="</td><td>";
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByDate(start_dt)
{
    //set up table
    var output="<tr><th>Incident Info</th><th>Description</th><th>Latitude</th><th>Longitude</th><th>Quadrant</th><th>Date</th><th>Map</th></tr>";
    var acctype1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            acctype1=record.start_dt;//assign
            if(acctype1.startsWith(start_dt))//partial match on string
            {
                output+="<tr><td>";
                output+=record.incident_info;
                output+="</td><td>"
                output+=record.description;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                output+=record.quadrant;
                output+="</td><td>";
                output+=record.start_dt;
                output+="</td><td>";
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}
 function searchByFileNo(externalfilenum)
 {
   //set up table
    var output="<tr><th>Permit Number</th><th>Job Type Description</th><th>Address</th><th>Inspection Type</th><th>OutCome</th><th>Y_Coord</th><th>X_Coord</th><th>Map</th></tr>";
     var externalfilenum1; 
    var gmap;//creates hyperlink
     //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
     //begin search
     for(var i=0;i<parsedrecord1.length;i++)
     {
         var record=parsedrecord1[i];
             //check
             externalfilenum1=record.externalfilenum;//assign
             if(externalfilenum1.startsWith(externalfilenum))//partial match on string
             {
                 output+="<tr><td>";
                 output+=record.externalfilenum;
                 output+="</td><td>"
                 output+=record.jobtypedescription;
                 output+="</td><td>"
                 output+=record.address;
                 output+="</td><td>"
                 output+=record.inspectiontype;
                 output+="</td><td>";
                 output+=record.outcome;
                 output+="</td><td>";
                 output+=record.y_coord;
                 //add latitude to postition
                 position=record.y_coord;
                 position+=","
                 output+="</td><td>";
                 output+=record.x_coord;
                 //add longitude to position
                 position+=record.x_coord;
                output+="</td><td>";
                
                 //create hyperlink gmap
                 gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                 output+=gmap;
                
                 output+="</td></tr>";
             }
     }
     document.getElementById("searchresults").innerHTML=output;

 }

 function searchByInType(inspectiontype)
{
    //set up table
    var output="<tr><th>Permit Number</th><th>Job Type Description</th><th>Address</th><th>Inspection Type</th><th>OutCome</th><th>Y_Coord</th><th>X_Coord</th><th>Map</th></tr>";
    var inspectiontype1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord1.length;i++)
    {
        var record=parsedrecord1[i];
            //check
            inspectiontype1=record.inspectiontype;//assign
            if(inspectiontype1.toUpperCase().startsWith(inspectiontype.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.externalfilenum;
                output+="</td><td>"
                output+=record.jobtypedescription;
                output+="</td><td>";
                output+=record.address;
                output+="</td><td>"
                output+=record.inspectiontype;
                output+="</td><td>";
                output+=record.outcome;
                output+="</td><td>";
                output+=record.y_coord;
                //add latitude to postition
                position=record.y_coord;
                position+=","
                output+="</td><td>";
                output+=record.x_coord;
                //add longitude to position
                position+=record.x_coord;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByInJopD(jobtypedescription)
{
    //set up table
    var output="<tr><th>Permit Number</th><th>Job Type Description</th><th>Address</th><th>Inspection Type</th><th>OutCome</th><th>Y_Coord</th><th>X_Coord</th><th>Map</th></tr>";
    var jobtypedescription1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord1.length;i++)
    {
        var record=parsedrecord1[i];
            //check
            jobtypedescription1=record.jobtypedescription;//assign
            if(jobtypedescription1.toUpperCase().startsWith(jobtypedescription.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.externalfilenum;
                output+="</td><td>"
                output+=record.jobtypedescription;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>"
                
                output+=record.inspectiontype;
                output+="</td><td>";
                output+=record.outcome;
                output+="</td><td>";
                output+=record.y_coord;
                //add latitude to postition
                position=record.y_coord;
                position+=","
                output+="</td><td>";
                output+=record.x_coord;
                //add longitude to position
                position+=record.x_coord;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByCd(asset_cd)
{
    //set up table
    var output="<tr><th>Asset CD</th><th>Steward</th><th>Maintained By</th><th>Life Cycle Status</th><th>Type</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var asset_cd1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord2.length;i++)
    {
        var record=parsedrecord2[i];
            //check
            asset_cd1=record.asset_cd;//assign
            if(asset_cd1.startsWith(asset_cd))//partial match on string
            {
                output+="<tr><td>";
                output+=record.asset_cd;
                output+="</td><td>"
                output+=record.steward;
                output+="</td><td>"
                output+=record.maintained_by;
                output+="</td><td>"
                output+=record.life_cycle_status;
                output+="</td><td>";
                output+=record.type_description;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByInMby(maintained_by)
{
    //set up table
    var output="<tr><th>Asset CD</th><th>Steward</th><th>Maintained By</th><th>Life Cycle Status</th><th>Type</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var maintained_by1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord2.length;i++)
    {
        var record=parsedrecord2[i];
            //check
            maintained_by1=record.maintained_by;//assign
            if(maintained_by1.startsWith(maintained_by))//partial match on string
            {
                output+="<tr><td>";
                output+=record.asset_cd;
                output+="</td><td>"
                output+=record.steward;
                output+="</td><td>"
                output+=record.maintained_by;
                output+="</td><td>"
                output+=record.life_cycle_status;
                output+="</td><td>";
                output+=record.type_description;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}
function searchByInTyD(type_description)
{
    //set up table
    var output="<tr><th>Asset CD</th><th>Steward</th><th>Maintained By</th><th>Life Cycle Status</th><th>Type</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var type_description1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord2.length;i++)
    {
        var record=parsedrecord2[i];
            //check
            type_description1=record.type_description;//assign
            if(type_description1.startsWith(type_description))//partial match on string
            {
                output+="<tr><td>";
                output+=record.asset_cd;
                output+="</td><td>"
                output+=record.steward;
                output+="</td><td>"
                output+=record.maintained_by;
                output+="</td><td>"
                output+=record.life_cycle_status;
                output+="</td><td>";
                output+=record.type_description;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByArtist(artist)
{
    //set up table
    var output="<tr><th>Artist</th><th>Address</th><th>Title</th><th>Tab Name</th><th>Art-Id</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var artist1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord3.length;i++)
    {
        var record=parsedrecord3[i];
            //check
            artist1=record.artist;//assign
            if(artist1.toUpperCase().startsWith(artist.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.artist;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>"
                output+=record.title;
                output+="</td><td>"
                output+=record.tab_name;
                output+="</td><td>";
                output+=record.art_id;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByInTitle(title)
{
    //set up table
    var output="<tr><th>Artist</th><th>Address</th><th>Title</th><th>Tab Name</th><th>Art-Id</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var title1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord3.length;i++)
    {
        var record=parsedrecord3[i];
            //check
            title1=record.title;//assign
            if(title1.toUpperCase().startsWith(title.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.artist;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>"
                output+=record.title;
                output+="</td><td>"
                output+=record.tab_name;
                output+="</td><td>";
                output+=record.art_id;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchBytname(tab_name)
{
    //set up table
    var output="<tr><th>Artist</th><th>Address</th><th>Title</th><th>Tab Name</th><th>Art-Id</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var tab_name1; 
    var gmap;//creates hyperlink
    //modify bp to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord3.length;i++)
    {
        var record=parsedrecord3[i];
            //check
            tab_name1=record.tab_name;//assign
            if(tab_name1.toUpperCase().startsWith(tab_name.toUpperCase()))//partial match on string
            {
                output+="<tr><td>";
                output+=record.artist;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>"
                output+=record.title;
                output+="</td><td>"
                output+=record.tab_name;
                output+="</td><td>";
                output+=record.art_id;
                
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";
                
                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
               
              
                output+=gmap;
                
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function changeFunction() {
    let q = document.getElementById("quadrant");
    q.value = q.value.toUpperCase();
    let des = document.getElementById("des");
    des.value = des.value.toUpperCase();
    let d = document.getElementById("date");
    d.value = d.value.toUpperCase();
    let fn = document.getElementById("efn");
    fn.value = fn.value.toUpperCase();
    let ins = document.getElementById("itype");
    ins.value = ins.value.toUpperCase();
    let des2= document.getElementById("des2");
    des2.value = des2.value.toUpperCase();
    let acd= document.getElementById("cd");
    acd.value = acd.value.toUpperCase();
    let m= document.getElementById("mby");
    m.value = m.value.toUpperCase();
    let type= document.getElementById("td");
    type.value = type.value.toUpperCase();
    let aname= document.getElementById("sc");
    aname.value = aname.value.toUpperCase();
    let tit= document.getElementById("ti");
    tit.value = tit.value.toUpperCase();
    let tname= document.getElementById("tn");
    tname.value = tname.value.toUpperCase();
}






 