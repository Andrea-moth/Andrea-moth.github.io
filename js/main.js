const BOOKMARKS = {
    "Code":{
        "github": "https://github.com",
        "stackoverflow": "https://stackoverflow.com/",
        "readthedocs":"https://readthedocs.org/"
    }, 
    "Fun":{
        "youtube":"https://www.youtube.com/",
        "reddit":"https://www.reddit.com/",
        "netflix":"https://www.netflix.com/my-en/"
    }, 
    "Editing":{
        "photopea": "https://www.photopea.com/",
        "pixilart": "https://www.pixilart.com"
    }};

const HOURSTOSTRING = [
    "Twelve", 
    "One", 
    "Two", 
    "Three", 
    "Four", 
    "Five", 
    "Six", 
    "Seven", 
    "Eight", 
    "Nine", 
    "Ten", 
    "Eleven",
]

function dateTime() {
	const DATE = new Date();

	let time = DATE.toDateString();

	let hours = DATE.getHours();
	let minutes = DATE.getMinutes();
    if (hours >= 12){
        hours -= 12
    }
    hours = HOURSTOSTRING[hours];

    if (minutes < 5){hours = `${hours} O'Clock`;}
    else if (minutes < 10 && minutes >= 5){hours = `Five past ${hours}`} 
    else if (minutes < 15 && minutes >= 10){hours = `Ten past ${hours}`} 
    else if (minutes < 20 && minutes >= 15){hours = `Fifteen past ${hours}`}
    else if (minutes < 25 && minutes >= 20){hours = `Twenty past ${hours}`}
    else if (minutes < 30 && minutes >= 25){hours = `Twenty-five past ${hours}`}
    else if (minutes < 35 && minutes >= 30){hours = `Half past ${hours}`}
    else if (minutes < 40 && minutes >= 35){hours = `Thirty-five past ${hours}`}
    else if (minutes < 45 && minutes >= 40){hours = `Fourty past ${hours}`}
    else if (minutes < 50 && minutes >= 45){hours = `Fourty-five past ${hours}`}
    else if (minutes < 55 && minutes >= 50){hours = `Fifty past ${hours}`}
    else {hours = `Fifty-five past ${hours}`}

	document.getElementById('date-time').innerHTML = `<p id="date">${hours}</p><hr><p id="time">${time}</p>`;
	setTimeout(dateTime, 1000);
}

function set_quick_sites(){
    var coloumns = `<h2 class="sr-only">Bookmarks</h2>`;
    for (var topic in BOOKMARKS){
        
        var coloumn = `<ul><p id="sections">${topic}</p>`;

        for (var site_name in BOOKMARKS[topic]){

            var site_url = BOOKMARKS[topic][site_name];
            var link = `<a href=${site_url}>`;
            var site_icon = `<img src=https://icons.duckduckgo.com/ip3/${site_name}.com.ico class="favicon" alt=${site_name} favicon>`;

            coloumn += `<li>${link}${site_icon}${site_name}</a></li>`;
        }
        coloumns += `${coloumn}</ul>`;
    }
    document.getElementById("bookmarks").innerHTML = coloumns
}

function traichu() {
	dateTime();
    set_quick_sites();
}
