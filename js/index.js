document.getElementById("FetchButton").addEventListener("click", function(){
  var masterList = [
  {
    "ID": 6,
    "StateName": "Alaska",
    "ST": "AK",
    "ZipMin": 99501,
    "ZipMax": 99950
  },
  {
    "ID": 5,
    "StateName": "Alabama",
    "ST": "AL",
    "ZipMin": 35004,
    "ZipMax": 36925
  },
  {
    "ID": 69,
    "StateName": "Arkansas",
    "ST": "AR",
    "ZipMin": 71601,
    "ZipMax": 72959
  },
  {
    "ID": 8,
    "StateName": "Arkansas (Texarkana)",
    "ST": "AR",
    "ZipMin": 75502,
    "ZipMax": 75502
  },
  {
    "ID": 7,
    "StateName": "Arizona",
    "ST": "AZ",
    "ZipMin": 85001,
    "ZipMax": 86556
  },
  {
    "ID": 9,
    "StateName": "California",
    "ST": "CA",
    "ZipMin": 90001,
    "ZipMax": 96162
  },
  {
    "ID": 10,
    "StateName": "Colorado",
    "ST": "CO",
    "ZipMin": 80001,
    "ZipMax": 81658
  },
  {
    "ID": 11,
    "StateName": "Connecticut",
    "ST": "CT",
    "ZipMin": 6001,
    "ZipMax": 6389
  },
  {
    "ID": 73,
    "StateName": "Connecticut",
    "ST": "CT",
    "ZipMin": 6401,
    "ZipMax": 6928
  },
  {
    "ID": 13,
    "StateName": "Dist of Columbia",
    "ST": "DC",
    "ZipMin": 20001,
    "ZipMax": 20039
  },
  {
    "ID": 74,
    "StateName": "Dist of Columbia",
    "ST": "DC",
    "ZipMin": 20042,
    "ZipMax": 20599
  },
  {
    "ID": 63,
    "StateName": "Dist of Columbia",
    "ST": "DC",
    "ZipMin": 20799,
    "ZipMax": 20799
  },
  {
    "ID": 12,
    "StateName": "Delaware",
    "ST": "DE",
    "ZipMin": 19701,
    "ZipMax": 19980
  },
  {
    "ID": 14,
    "StateName": "Florida",
    "ST": "FL",
    "ZipMin": 32004,
    "ZipMax": 34997
  },
  {
    "ID": 15,
    "StateName": "Georgia",
    "ST": "GA",
    "ZipMin": 30001,
    "ZipMax": 31999
  },
  {
    "ID": 65,
    "StateName": "Georga (Atlanta)",
    "ST": "GA",
    "ZipMin": 39901,
    "ZipMax": 39901
  },
  {
    "ID": 16,
    "StateName": "Hawaii",
    "ST": "HI",
    "ZipMin": 96701,
    "ZipMax": 96898
  },
  {
    "ID": 20,
    "StateName": "Iowa",
    "ST": "IA",
    "ZipMin": 50001,
    "ZipMax": 52809
  },
  {
    "ID": 66,
    "StateName": "Iowa (OMAHA)",
    "ST": "IA",
    "ZipMin": 68119,
    "ZipMax": 68120
  },
  {
    "ID": 17,
    "StateName": "Idaho",
    "ST": "ID",
    "ZipMin": 83201,
    "ZipMax": 83876
  },
  {
    "ID": 18,
    "StateName": "Illinois",
    "ST": "IL",
    "ZipMin": 60001,
    "ZipMax": 62999
  },
  {
    "ID": 19,
    "StateName": "Indiana",
    "ST": "IN",
    "ZipMin": 46001,
    "ZipMax": 47997
  },
  {
    "ID": 21,
    "StateName": "Kansas",
    "ST": "KS",
    "ZipMin": 66002,
    "ZipMax": 67954
  },
  {
    "ID": 22,
    "StateName": "Kentucky",
    "ST": "KY",
    "ZipMin": 40003,
    "ZipMax": 42788
  },
  {
    "ID": 68,
    "StateName": "Louisiana",
    "ST": "LA",
    "ZipMin": 70001,
    "ZipMax": 71232
  },
  {
    "ID": 23,
    "StateName": "Louisiana",
    "ST": "LA",
    "ZipMin": 71234,
    "ZipMax": 71497
  },
  {
    "ID": 26,
    "StateName": "Massachusetts",
    "ST": "MA",
    "ZipMin": 1001,
    "ZipMax": 2791
  },
  {
    "ID": 58,
    "StateName": "Massachusetts (Andover)",
    "ST": "MA",
    "ZipMin": 5501,
    "ZipMax": 5544
  },
  {
    "ID": 77,
    "StateName": "Maryland",
    "ST": "MD",
    "ZipMin": 20331,
    "ZipMax": 20331
  },
  {
    "ID": 78,
    "StateName": "Maryland",
    "ST": "MD",
    "ZipMin": 20335,
    "ZipMax": 20797
  },
  {
    "ID": 25,
    "StateName": "Maryland",
    "ST": "MD",
    "ZipMin": 20812,
    "ZipMax": 21930
  },
  {
    "ID": 24,
    "StateName": "Maine",
    "ST": "ME",
    "ZipMin": 3901,
    "ZipMax": 4992
  },
  {
    "ID": 27,
    "StateName": "Michigan",
    "ST": "MI",
    "ZipMin": 48001,
    "ZipMax": 49971
  },
  {
    "ID": 28,
    "StateName": "Minnesota",
    "ST": "MN",
    "ZipMin": 55001,
    "ZipMax": 56763
  },
  {
    "ID": 57,
    "StateName": "Missouri",
    "ST": "MO",
    "ZipMin": 63001,
    "ZipMax": 65899
  },
  {
    "ID": 29,
    "StateName": "Mississippi",
    "ST": "MS",
    "ZipMin": 38601,
    "ZipMax": 39776
  },
  {
    "ID": 59,
    "StateName": "Mississippi(Warren)",
    "ST": "MS",
    "ZipMin": 71233,
    "ZipMax": 71233
  },
  {
    "ID": 31,
    "StateName": "Montana",
    "ST": "MT",
    "ZipMin": 59001,
    "ZipMax": 59937
  },
  {
    "ID": 38,
    "StateName": "North Carolina",
    "ST": "NC",
    "ZipMin": 27006,
    "ZipMax": 28909
  },
  {
    "ID": 39,
    "StateName": "North Dakota",
    "ST": "ND",
    "ZipMin": 58001,
    "ZipMax": 58856
  },
  {
    "ID": 67,
    "StateName": "Nebraska",
    "ST": "NE",
    "ZipMin": 68001,
    "ZipMax": 68118
  },
  {
    "ID": 32,
    "StateName": "Nebraska",
    "ST": "NE",
    "ZipMin": 68122,
    "ZipMax": 69367
  },
  {
    "ID": 34,
    "StateName": "New Hampshire",
    "ST": "NH",
    "ZipMin": 3031,
    "ZipMax": 3897
  },
  {
    "ID": 35,
    "StateName": "New Jersey",
    "ST": "NJ",
    "ZipMin": 7001,
    "ZipMax": 8989
  },
  {
    "ID": 36,
    "StateName": "New Mexico",
    "ST": "NM",
    "ZipMin": 87001,
    "ZipMax": 88441
  },
  {
    "ID": 33,
    "StateName": "Nevada",
    "ST": "NV",
    "ZipMin": 88901,
    "ZipMax": 89883
  },
  {
    "ID": 60,
    "StateName": "New York (Fishers Is)",
    "ST": "NY",
    "ZipMin": 6390,
    "ZipMax": 6390
  },
  {
    "ID": 37,
    "StateName": "New York",
    "ST": "NY",
    "ZipMin": 10001,
    "ZipMax": 14975
  },
  {
    "ID": 40,
    "StateName": "Ohio",
    "ST": "OH",
    "ZipMin": 43001,
    "ZipMax": 45999
  },
  {
    "ID": 70,
    "StateName": "Oklahoma",
    "ST": "OK",
    "ZipMin": 73001,
    "ZipMax": 73199
  },
  {
    "ID": 41,
    "StateName": "Oklahoma",
    "ST": "OK",
    "ZipMin": 73401,
    "ZipMax": 74966
  },
  {
    "ID": 42,
    "StateName": "Oregon",
    "ST": "OR",
    "ZipMin": 97001,
    "ZipMax": 97920
  },
  {
    "ID": 43,
    "StateName": "Pennsylvania",
    "ST": "PA",
    "ZipMin": 15001,
    "ZipMax": 19640
  },
  {
    "ID": 44,
    "StateName": "Puerto Rico",
    "ST": "PR",
    "ZipMin": 0,
    "ZipMax": 0
  },
  {
    "ID": 45,
    "StateName": "Rhode Island",
    "ST": "RI",
    "ZipMin": 2801,
    "ZipMax": 2940
  },
  {
    "ID": 46,
    "StateName": "South Carolina",
    "ST": "SC",
    "ZipMin": 29001,
    "ZipMax": 29948
  },
  {
    "ID": 47,
    "StateName": "South Dakota",
    "ST": "SD",
    "ZipMin": 57001,
    "ZipMax": 57799
  },
  {
    "ID": 48,
    "StateName": "Tennessee",
    "ST": "TN",
    "ZipMin": 37010,
    "ZipMax": 38589
  },
  {
    "ID": 49,
    "StateName": "Texas (Austin)",
    "ST": "TX",
    "ZipMin": 73301,
    "ZipMax": 73301
  },
  {
    "ID": 71,
    "StateName": "Texas",
    "ST": "TX",
    "ZipMin": 75001,
    "ZipMax": 75501
  },
  {
    "ID": 72,
    "StateName": "Texas",
    "ST": "TX",
    "ZipMin": 75503,
    "ZipMax": 79999
  },
  {
    "ID": 61,
    "StateName": "Texas (El Paso)",
    "ST": "TX",
    "ZipMin": 88510,
    "ZipMax": 88589
  },
  {
    "ID": 50,
    "StateName": "Utah",
    "ST": "UT",
    "ZipMin": 84001,
    "ZipMax": 84784
  },
  {
    "ID": 64,
    "StateName": "Virginia",
    "ST": "VA",
    "ZipMin": 20040,
    "ZipMax": 20041
  },
  {
    "ID": 75,
    "StateName": "Virginia",
    "ST": "VA",
    "ZipMin": 20040,
    "ZipMax": 20167
  },
  {
    "ID": 76,
    "StateName": "Virginia",
    "ST": "VA",
    "ZipMin": 20042,
    "ZipMax": 20042
  },
  {
    "ID": 52,
    "StateName": "Virginia",
    "ST": "VA",
    "ZipMin": 22001,
    "ZipMax": 24658
  },
  {
    "ID": 51,
    "StateName": "Vermont",
    "ST": "VT",
    "ZipMin": 5001,
    "ZipMax": 5495
  },
  {
    "ID": 62,
    "StateName": "Vermont",
    "ST": "VT",
    "ZipMin": 5601,
    "ZipMax": 5907
  },
  {
    "ID": 53,
    "StateName": "Washington",
    "ST": "WA",
    "ZipMin": 98001,
    "ZipMax": 99403
  },
  {
    "ID": 55,
    "StateName": "Wisconsin",
    "ST": "WI",
    "ZipMin": 53001,
    "ZipMax": 54990
  },
  {
    "ID": 54,
    "StateName": "West Virginia",
    "ST": "WV",
    "ZipMin": 24701,
    "ZipMax": 26886
  },
  {
    "ID": 56,
    "StateName": "Wyoming",
    "ST": "WY",
    "ZipMin": 82001,
    "ZipMax": 83128
  }
];
  
  var zipArray = [75025,38103,30269,77087,55976,98367,94610,77640,19401,64060,48237,82435,28659,90029,98277,19014,2446,48207,90302,19038,21222,7087,93313,85648,33332,56058,27107,61072,8876,30039,19127,19144,92024,43062,47325,21076,45342,32907,82240,46953,43082,41001,11554,37130,77076,48310,70094,82636,54915,61072,40475,14207,37184,50023,30044,25813,53140,2054,7840,53132,33543,7108,27217,63366,38019];
  var output = [];
  
  for(var x=0;x<zipArray.length;x++){
    var insertFlag = false;
    for(var y=0;y<masterList.length;y++){
      if((zipArray[x] < masterList[y].ZipMax && zipArray[x] > masterList[y].ZipMin)||(zipArray[x] === masterList[y].ZipMax)||( zipArray[x] === masterList[y].ZipMin)){
   output.push({"zipcode":zipArray[x],"state":masterList[y].StateName});
        insertFlag = true;
      }
    }
          if(!insertFlag){
     output.push({"zipcode":zipArray[x],"state":"Incorrect"});
      }
  }
  console.log(output);
  var json = JSON.stringify(output);
var blob = new Blob([json], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.download    = "backup.json";
a.href        = url;
a.textContent = "Download backup.json";

document.getElementById('content').appendChild(a);
    });