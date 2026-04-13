// ================= ROOM IMAGES =================

// Room 101
import Deluxe_Double_Bedroom_101_1 from "../asserts/rooms_pic/deluxe-double-bedroom-101/deluxe-double-bedroom-101-1.webp";

import Deluxe_Double_Bedroom_102_1 from "../asserts/rooms_pic/deluxe-double-bedroom-102/deluxe-double-bedroom-102-1.compressed.jpg";

import Deluxe_Double_Bedroom_103_1 from "../asserts/rooms_pic/deluxe-double-bedroom-103/deluxe-double-bedroom-103-1.compressed.jpg";

import Premium_Quadruple_Room_104_1 from "../asserts/rooms_pic/premium-quadruple-room-104/premium-quadruple-room-104-1.compressed.jpg";

import Deluxe_Double_Room_105_1 from "../asserts/rooms_pic/deluxe-double-bedroom-105/deluxe-double-room-105-1.compressed.jpg";

import Twin_Single_Room_106_1 from "../asserts/rooms_pic/twin-single-room-106/twin-single-room-106-1.compressed.jpg";

import Family_Suite_Room_108_1 from "../asserts/rooms_pic/family-suite-room-108/family-suite-room-108-1.compressed.jpg";
// ================= ROOMS DATA =================

export const rooms = [

/* ---------------- ROOM 101 ---------------- */

{
slug:"deluxe-double-bedroom-101",
id:"room-deluxe-double-bedroom-101",
title:"Deluxe Double Bedroom 101",

price:7500,
originalPrice:11500,
capacity:2,
size:"320 sq ft",
bedType:"1 Queen Bed + Futon",

description:"A spacious deluxe room with Rakaposhi mountain views and modern comforts.",
overview:"Designed for couples and solo travelers seeking peaceful mountain living.",

videoId:"9jo51nJrO0k",

images:[Deluxe_Double_Bedroom_101_1],

quick:["Sleeps 2 guests","Mountain view","Private bathroom"],

amenities:{
Comfort:["Heating","Free WiFi"],
Bathroom:["Private bathroom","Hot shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"d1",text:"Breakfast included",extra:true},
{id:"d2",text:"Free parking",extra:false},
{id:"d3",text:"High-speed WiFi",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Mountain facing","Quiet floor","Near terrace"]
},

/* ---------------- ROOM 102 ---------------- */

{
slug:"deluxe-double-bedroom-102",
id:"room-deluxe-double-bedroom-102",
title:"Deluxe Double Bedroom 102",

price:8500,
originalPrice:12500,
capacity:4,
size:"520 sq ft",
bedType:"1 King + 2 Singles",

description:"Comfortable family-friendly room with spacious seating.",
overview:"Ideal for families visiting Hunza Valley.",

videoId:"9jo51nJrO0k",

images:[Deluxe_Double_Bedroom_102_1],

quick:["Family friendly","Sleeps 4 guests","Mountain view"],

amenities:{
Comfort:["Heating","Free WiFi"],
Bathroom:["Private bathroom","Hot shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"f1",text:"Breakfast included",extra:true},
{id:"f2",text:"Free parking",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Family floor","Easy terrace access"]
},

/* ---------------- ROOM 103 ---------------- */

{
slug:"deluxe-double-bedroom-103",
id:"room-deluxe-double-bedroom-103",
title:"Deluxe Double Bedroom 103",

price:8500,
originalPrice:12500,
capacity:2,
size:"480 sq ft",
bedType:"1 King Bed",

description:"Elegant romantic suite with panoramic valley view.",
overview:"Perfect for couples and honeymoon stays.",

videoId:"9jo51nJrO0k",

images:[Deluxe_Double_Bedroom_103_1],

quick:["Romantic setup","Panoramic windows","Couple stay"],

amenities:{
Comfort:["Heating","Free WiFi"],
Bathroom:["Private bathroom","Hot shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"h1",text:"Breakfast included",extra:true}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Corner suite"]
},

/* ---------------- ROOM 104 ---------------- */

{
slug:"premium-quadruple-room-104",
id:"room-premium-quadruple-room-104",
title:"Premium Quadruple Room 104",

price:14500,
originalPrice:18000,
capacity:4,
size:"420 sq ft",
bedType:"2 Twin Beds + 1 Full Bed",

description:"Spacious premium room ideal for groups and families.",
overview:"Comfortable group stay with mountain surroundings.",

videoId:"9jo51nJrO0k",

images:[ Premium_Quadruple_Room_104_1],

quick:["Sleeps 4 guests","Mountain view","Family stay"],

amenities:{
Comfort:["Heating","Free WiFi","Seating area"],
Bathroom:["Private bathroom","Bathtub","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"s1",text:"Free WiFi",extra:false},
{id:"s2",text:"Parking",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Quiet floor"]
},

/* ---------------- ROOM 105 ---------------- */

{
slug:"deluxe-double-room-105",
id:"room-deluxe-double-room-105",
title:"Deluxe Double Room 105",

price:17000,
originalPrice:20000,
capacity:2,
size:"300 sq ft",
bedType:"2 Twin Beds",

description:"Ideal for friends and business travelers.",
overview:"Balanced layout with workspace comfort.",

videoId:"9jo51nJrO0k",

images:[ Deluxe_Double_Room_105_1 ],

quick:["Twin beds","Workspace","Mountain view"],

amenities:{
Comfort:["Heating","Free WiFi","Workspace"],
Bathroom:["Private bathroom","Shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"t1",text:"Breakfast included",extra:true},
{id:"t2",text:"Free WiFi",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Mountain side"]
},

/* ---------------- ROOM 106 ---------------- */

{
slug:"twin-single-room-106",
id:"room-twin-single-room-106",
title:"Twin Single Room 106",

price:5000,
originalPrice:5000,
capacity:2,
size:"300 sq ft",
bedType:"2 Twin Beds",

description:"Budget friendly twin room perfect for travelers.",
overview:"Simple comfortable stay option.",

videoId:"9jo51nJrO0k",

images:[ Twin_Single_Room_106_1 ],

quick:["Twin beds","Budget stay","Mountain view"],

amenities:{
Comfort:["Heating","Free WiFi"],
Bathroom:["Private bathroom","Shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"b1",text:"Free WiFi",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Quiet corridor"]
},

/* ---------------- ROOM 108 ---------------- */

{
slug:"family-suite-room-108",
id:"room-family-suite-room-108",
title:"Family Suite Room 108",

price:7500,
originalPrice:9500,
capacity:5,
size:"480 sq ft",
bedType:"1 Master Bed + 1 Twin Bed + Extra Mattress",

description:"Spacious family suite featuring Rakaposhi mountain views and terrace access.",
overview:"Best choice for large families and group travelers.",

videoId:"9jo51nJrO0k",

images:[ Family_Suite_Room_108_1 ],

quick:["Sleeps 5 guests","Family suite","Mountain view"],

amenities:{
Comfort:["Heating","Free WiFi","Seating area"],
Bathroom:["Private bathroom","Hot shower","Towels"],
Views:["Mountain view"],
Services:["Room service","Daily housekeeping"]
},

included:[
{id:"fs1",text:"Breakfast included",extra:true},
{id:"fs2",text:"Free WiFi",extra:false}
],

rules:[
"Check-in: From 12:00 PM",
"Check-out: Until 11:00 AM",
"Pets allowed free"
],

location:["Mountain side","Terrace access"]
}

];