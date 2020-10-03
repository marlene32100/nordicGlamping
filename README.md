# Nordic Glamping

![alt Nordic Glamping website mockup](assets/images/readme/landingMockup.png)

View the live project here. [Nordic Glamping](https://marlene32100.github.io/nordicGlamping/)

For the Second Milestone Project with the Code Institute, I have decided to design an interactive website for a fictional travel agency. The website, more specifically, is about the top locations for glamping in the Nordic countries.
The final user of the website is a wealthy person who is looking for a different kind of holiday, that combines the strengths of camping (being in contact with nature, outside urban areas) without giving up all the comforts of a 5 stars hotel. The fictional travel agency is specialized in luxury hospitality.
The website is a single page divided in five sections:

* Landing Page

The landing page is very simple. There is a full screen video in the background with a view from above of a Nordic forest. The colours in the video are the same colours used throughout the website. A general feel of silence, open space, calmness, take immediately the user inside the purpose of glamping.
A title and a subtitle welcome the user, inviting him/her to navigate through the website with the words “explore the silence”. The user can click on this sentence and can go directly to the following section, which is “Glam and camping”, or can scroll down the page and reach the same section.
A fade in effect drives to user down to the website, with a smooth effect that is in line with the general sense of relax that the user is supposed to experience.

* Glam and Camping

The second section is an introduction of what the purpose of this kind of holiday is.
There is a text and a image that briefly summarize both visually and with words what is a luxury camping experience, and for who it is for.

* Map

In this section I have used the Google Maps API to display a map with the locations that the travel agency suggests.
Next to the map a brief description to invite the user to click on the map, or contact directly the agency for a more tailored experience.
The map shows the locations with markers; when the user click on one location, a info window is displayed with a image of the place and its name. Clicking on the window the user is re-directed to the home page of the glamping site on another tab. 
Clicking a second marker makes the first info window close, and opens the relative info window. In this way, only one information at a time is displayed and the user doesn’t get too much confused.

![alt map](assets/images/readme/igloo.png)

* Recommended by

This section shows all the sponsors or the magazines that promoted this fictional travel agency and their glamping project.
The six logos are displayed inside six circles and a text explains who those sponsors are.
This should convey a sense of reliability and security, so that the user doesn’t feel afraid to book a holiday with them.

![alt logos of testimonials](assets/images/readme/logos.png)

* Contact    

The last section is the contact area. 
There is a contact form where the user can write his/her wishes for a perfect holiday, so the travel agency can contact them with a tailored offer.
Next to the contact form there is a card showing a picture of the people working in the office, and the contact details such as address, phone number and email.
The picture of the employees should add more sense of reliability and professionality.

* Footer 

A footer repeats the contact details, adding the links for the social media pages.

---

## User Experience (UX)

* Strategy Plane
* Scope Plane
* Structure Plane
* Skeleton Plane

## User stories

### First Time Visitor Goals
* As a First Time Visitor, I want to understand what glamping is and what the travel agency offers.
* As a First Time Visitor, I want to find the best locations for glamping in the Nordic countries.
* As a First Time Visitor, I want to ask for a tailored experience and get in touch with the travel agency.
### Returning Visitor Goals
* As a Returning Visitor, I want to find out if there are new locations for glamping.
* As a Returning Visitor, I want to contact the travel agency.
### Frequent User Goals
* As a Frequent User, I want to book my holidays.
* As a Frequent User, I want to phone or send a e-mail to the agency.                                    

---

## Design

For this project I decided to use a single page layout, playing with design.
The goal of the website is to show immediately the brand image of the travel agency and their glamping experience. 
It means that the user should feel from the very first second a sense of tranquillity, connection with the wild nordic nature and at the same time a sense of professionality and safety.
To achieve this, I used a minimal layout, but well planned in its details.

First of all, the landing page has a full screen video with a nordic forest shown from the above. The video divides the screen in two areas, a green one with the trees and a light gray one on the upper side.
Those colours give a sense of calmness, and have been used as leit-motiv for all the website.

Personality is shown also from the style of the menu navbar:
for smaller screens I decided to design three dots on the top-left of the screen, to suggest that in that place there is some extra features.
For bigger screens I designed a lateral menu on the left side, where the word "menu" is shown vertically.
Clicking on the menu, a full screen black opaque overlay is shown with the links to the different sections of the website.

![alt menu overlay](assets/images/readme/menuMockup.png)

I have used JQuery to achieve a deeper sense of calmness, using its fadeIn effect on scroll. The content of the website is shown smoothly appearing one after one.

## Colour Scheme

![alt palette](assets/images/readme/palette.png)

Colour scheme image designed with [Coolors.com](https://coolors.co/)

The colour palette that I choose reminds of nature and silence. 
Throughout the website the colours are repeated, so that the user feels comfortable.
Hovering over links or on the contact form, repeats as well the same colour palette.
Basically I took the colour scheme of the video in the landing page and I adapted it to the website.
The background of the website is not white, but it is a shade of light gray. I think that this solution helps to convey a idea of softness and nature.

To help me with the choice of colours I used the website [Color-Hex](https://www.color-hex.com/)


## Typography

The font that I used are "Montserrat" and "Nunito Sans". 
They are very modern and minimal and I think that they are perfect for a design that should remind of the Nordic countries.
I have played with different heights and letter spacing to add more character to the style.

## Imagery

For this project I used the full screen video and the final image of the employees from [Pexels](www.pexels.com).

The images of the locations in the info window have been taken from those websites:

[Ice Hotel](https://www.telegraph.co.uk/travel/destinations/europe/sweden/galleries/icehotel-winter-2019-2020-ice-hotel-in-swedish-lapland/);

[Tree Hotel](https://www.booking.com/hotel/se/treehotel.it.html?aid=356981;label=gog235jc-1DCAsoyAFCCXRyZWVob3RlbEgzWANoyAGIAQGYARS4ARfIAQzYAQPoAQGIAgGoAgO4AvqOqfsFwAIB0gIkNmY3YmUwYWYtNmIyNi00MDE0LTgyNDAtMzQzZjBjMGQ2MDBl2AIE4AIB;sid=5a82bd3c868caeb11a55846f2c8303a5;dist=0&keep_landing=1&sb_price_type=total&type=total&);

[Narvik](https://www.gites.fr/gites_narvik-adventures-as_narvik_h2411589_en.htm);

[Jeris Aurora Dome](https://www.booking.com/hotel/fi/jeris-aurora-dome.it.html?aid=356981;label=gog235jc-1DCAsoSEIRamVyaXMtYXVyb3JhLWRvbWVIM1gDaMgBiAEBmAEUuAEXyAEM2AED6AEBiAIBqAIDuALTkKn7BcACAdICJGYyNzhjMjc4LTZmN2ItNDEyYy04ZWNhLTUwNTQwMzhlY2Y1OdgCBOACAQ;sid=5a82bd3c868caeb11a55846f2c8303a5;dist=0&keep_landing=1&sb_price_type=total&type=total&);

[Torassieppi](https://www.pitchup.com/sv/campsites/finland/lapland/northern_lapland/saariselkae/torassieppi_jerisjaervi/);

[Levin]([https://www.designstack.co/2018/11/glass-igloos-hotel-resort-in-finland.html);

[Kakslauttanen](https://www.alux.com/wp-content/uploads/2014/03/hotel_kakslauttanen_finlandia_5589_1200x800.jpg);

[Reykjavik Domes](http://reykjavik-domes.hotels-reykjavik-is.com/it/#sunset-main-gallery-2);

[Buubbles Iceland](https://www.facebook.com/bubblesiceland/);



To avoid the website being too heavy to load, I used the website [Resize Image](https://resizeimage.net/) to crop and resize images.
Pictures used for info windows are 400x400px, and logos are 200x200px.

Logos have been taken from the web.

## Wireframes

I used Balsamiq to design the layout.

## Features

The website has a clean layout with all the essential informations displayed both on smaller and larger screen.
There is a navigation bar, a footer with all the links to connect with the travel agency, a contact form, testimonials.
I have checked the responsiveness on all devices so that everything looks nice and clear.

The website is also fast to navigate; people usually don't want to spend too much time on a website looking for informations. 
Most of the time, also, people navigate from their mobile phones when they are (for instance) travelling on a bus, train, or in other situations where they don't have too much time.
The target of users that the website aims to, moreover, is usually wealthy people who rather prefers to pay money to have someone fixing problems for them, instead of wasting time trying to find the best solutions on their own.
That is the reason why the website is minimal, but at the same time gives all the infos needed.

I have used Javascript to validate the contact form; in this way mistakes are reduced and the user is guided throughout the filling.
Fields such as name/surname and phone number cannot be validate perfectly, since not everyone in the world uses the Latin alphabet or the same way yo write a phone number.
To reduce mistakes, I decided to validate name/surname accepting alphabet and special characters: in this way, also letters such as Å, Ä, Ö, just to name a few, can be validated.
Phone numbers accepts obviously only digits, with a minimum of 9. According to [O'reilly website] (https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html), the shortest phone number in the world has 7 digits.
Considering that the travel agency is supposed to be located in Sweden, someone who lives in another country and has a phone number of 7 digits is forced to enter also the country prefix (which is usually 2 digits).

Other features are an interactive map that displays the best locations for glamping, and that shows in a clean and nice way the image of the location.
I used Bootstrap cards to customize the info windows, so it looks more consistent with the rest of the website and is also more pleasant to look at.

## Features to implement

In the future I would like to add a page for each location. This idea was in my original project, but it takes too much time: I will implement it in a second moment.
I will show for each locations a carousel of images, more details about the place and its facilities, reviews of other customers.
It would be nice to add the Booking.com API so that users can book their holidays from the Nordic Glamping website.

I would like also to change the style of the contact form, so that it looks more unique. I will place the label instead of the placeholder, then I will add icons that shows if a field is correctly validated, or not.

---

## Technologies Used

### Languages Used
* HTML5
* CSS3
* Javascript

### Frameworks, Libraries & Programs Used

* Bootstrap 4.5.0.
* Google Fonts
* Font Awesome 4.7.0.
* jQuery
* Git
* GitHub
* GitPod
* Chrome DevTools
* Techsini mockup generator
* Autoprefixer CSS
* Google Maps API
* EmailJS API

---

## Testing

### Functionality Testing 

All the links have been checked and they all are working.

The form fields have also been checked by me and some testers. The fields are correctly validated and the message is sent properly.
However, the message I get on my email doesn’t show if the user selected "Mr", "Mrs", or none of them.
Another problem I found is that the form is submitted also if the message texarea does not fulfill the requirements I wrote on my code (at least 70 char).
The alert immediately tells the user that he/she should add more details if the text is too short, but the form is submitted anyway.
This will not affect the user experience, but it will affect the owner's side because too many emails can be sent with a text that might be too short.

Html and Css have been validated with [HTML Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/).

### Usability Testing

According to people who tested the website, it is easy to navigate and the typography is legible.
All the images have the "alt" text.

I tested the website with [Wave](https://wave.webaim.org/) to check if something can be improved in terms of accessibility.
I used in the website some icons as links (the "scroll down" icons and the social media icons) and this can be a problem for people who use a screen reader.
Also, I skipped some heading levels: for instance, on the landing page I used "h1" for "Nordic Glamping", and "h3" for "-explore the silence-". Users with screen readers can get confused.
This is something that I should fix.

### Compatibility Testing

I tested the website on multiple browsers:
* Chrome
* Edge 
* Firefox
* Internet Explorer
* Safari
* Opera

I tested also on multiple devices with Google DevTools.










