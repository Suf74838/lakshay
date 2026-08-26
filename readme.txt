LAKSHAY ASSOCIATES AND CONSULTANTS - WEBSITE
=============================================
 
FILES
-----
index.html      Home
about.html      About
services.html   Services (all 13 standards)
contact.html    Contact + enquiry form
style.css       All styling
script.js       All behaviour + the service list
logo.jpg        Logo (replace with a transparent PNG when available)
 
To view it: double click index.html.
To publish it: upload all files, keeping them in the same folder.
 
 
BEFORE GOING LIVE - THINGS TO REPLACE
--------------------------------------
1. PHONE, WHATSAPP, EMAIL
   Open script.js, top of the file, edit these three lines:
     whatsapp: "910000000000"
     phone:    "+910000000000"
     email:    "info@lakshayassociates.in"
   Then search all 4 html files for "00000 00000" and
   "info@lakshayassociates.in" and update the visible text too.
 
2. OFFICE ADDRESS
   Search all 4 html files for "City, State, India".
 
3. GOOGLE MAP
   In contact.html, find the block marked "GOOGLE MAP".
   Google Maps > find the office > Share > Embed a map > copy the iframe
   and replace the placeholder block with it.
 
4. SOCIAL LINKS
   Search for aria-label="LinkedIn" and replace the "#" in href with the
   real profile links. Delete any platform not being used.
 
5. FAVICON
   Replace <link rel="icon" href="logo.jpg"> with a proper 32x32 icon.
 
6. LOGO
   A PNG with a transparent background will look cleaner than the JPG.
   Save it as logo.png and update the 8 places where logo.jpg is used.
 
 
MAKING THE FORM ACTUALLY SEND
------------------------------
Right now the form validates the fields and then opens the visitor's
mail app with everything filled in. It works, but the enquiry only
arrives if they press send.
 
To receive enquiries directly, sign up at formspree.io (free tier is
enough), then in contact.html change:
   <form id="enquiryForm" novalidate>
to:
   <form action="https://formspree.io/f/YOURCODE" method="POST">
and in script.js delete the block under section 6 that starts with
   form.addEventListener("submit", ...
 
 
EDITING CONTENT
---------------
Service names, descriptions and the dropdown all come from ONE place:
the SERVICES list in script.js, section 2. Edit it there and every page
updates. Do not maintain the list in the html files.
 
Home page currently shows 6 service cards. To show all 13, change
HOME_CARDS = 6 to HOME_CARDS = 13 in script.js.
 
 
DELIBERATELY NOT INCLUDED
--------------------------
No claims of government approval, accreditation, guaranteed
certification, years of experience or client counts appear anywhere.
No accreditation body logos are used. Add these only with evidence.
 
The home page has no testimonials section. Add real ones when they are
available rather than placeholder reviews.
 