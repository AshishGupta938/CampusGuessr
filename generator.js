var points = 0;
var lastImage = "";
var choice1 = "";
var choice2 = "";
var choice3 = "";
var choice4 = "";
var interval;

function randomImageGenerator() {
    var imageArray = [
        {
            src: "https://nypost.com/wp-content/uploads/sites/2/2020/03/stanford.jpg?quality=90&strip=all&w=618&h=410&crop=1",
            n:"Stanford"
        },
        {
            src: "https://news.utexas.edu/wp-content/uploads/2020/01/iStock-155441000-1200x800-c-default.jpg",
            n: "UT Austin"
        },
        {
            src: "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_hero.jpg",
            n: "UCLA"
        },
        {
            src: "https://www.princeton.edu/sites/default/files/styles/half_1x/public/images/2020/06/20170816_CL_DJA_152%281%29.jpg?itok=tq8-85L1",
            n: "Princeton"
        },
        {
            src: "https://engineering.tamu.edu/biomedical/_files/_images/_content-images/tamu-aerial-21Sept2020.jpg",
            n: "Texas A&M "
        },
        {
            src: "https://admission.gatech.edu/sites/default/files/images/paralax-header-tower.jpg",
            n: "Georgia Tech"
        },
        {
            src: "https://cdn.the-scientist.com/assets/articleNo/65148/hImg/29725/rice-university-banner-l.png",
            n: "Rice"
        },
        {
            src: "https://www.commonapp.org/static/65c2a74f0d5e84a5b1da5bc090887a48/vanderbilt-university_277.jpg",
            n: "Vanderbilt"
        },
        {
            src: "https://campaign.unc.edu/wp-content/uploads/2017/09/010717_old_well_summer005-4-e1506714487574-1200x675.jpg",
            n: "UNC Chapel Hill"
        },
        {
            src: "https://www.honorsociety.org/sites/default/files/uni-campus-19237",
            n: "Michigan"
        },
        {
            src: "https://3l65e11ddfjd1jxuay1z41j8-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Upper-Quad-at-Virginia-Tech-02-1920x1280.jpg",
            n: "Virginia Tech"
        },
        {
            src: "https://www.worldcampus.psu.edu/sites/default/files/styles/title_banner_16_7_xl/public/2018-12/1920x840_about-us_L1_1.jpg?itok=uI7YMnxy",
            n: "Penn State"
        },
        {
            src: "https://admissions.yale.edu/sites/default/files/styles/main-carousel-image--1280x850/public/home-main-carousel-images/crosscampus2019.png?itok=QJDBkwgU",
            n: "Yale"
        },
        {
            src: "https://www.news.ucsb.edu/file/13923/download?token=_YTnQfjz",
            n: "UC Santa Barbara"
        },
        {
            src: "https://gs.columbia.edu/sites/default/files/styles/cu_crop/public/content/News/columbia-gs-news-campus-shot-alma-butler-library.png?itok=_pjYOX-8",
            n: "Columbia"
        },
        {
            src: "https://greatruns.com/wp-content/uploads/2017/09/Berkeley_glade_afternoon.jpg",
            n: "UC Berkeley"
        },
        {
            src: "https://news.northwestern.edu/assets/Stories/2019/01/winter640.jpg",
            n: "Northwestern"
        }
    ];

    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = 1000;
        newArray[i].height = 600;
        newArray[i].n = imageArray[i].n;
        newArray[i].style = "display: block; margin: 0 auto"
    }

    function getRandomNumber(min, max) {
        imgNumber = Math.floor(Math.random() * (max-min+1)) + min;
        return newArray[imgNumber];
    }

    var newImage = getRandomNumber(0, newArray.length-1);
    lastImage = newImage.n;

    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    document.body.appendChild(newImage);  

    var namesUsed = [];
    var correctChoice = Math.floor(Math.random() * 4) + 1;
    if (correctChoice === 1) {
        choice1 = lastImage;
        namesUsed.push(choice1)
        choice2 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice2)) {
            choice2 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice2);
        choice3 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice3)) {
            choice3 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice3);
        choice4 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice4)) {
            choice4 = getRandomNumber(0,imageArray.length-1).n;
        }
    }
    else if (correctChoice === 2) {
        choice2 = lastImage;
        namesUsed.push(choice2)
        choice1 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice1)) {
            choice1 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice1);
        choice3 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice3)) {
            choice3 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice3);
        choice4 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice4)) {
            choice4 = getRandomNumber(0,imageArray.length-1).n;
        }
    }
    else if (correctChoice === 3) {
        choice3 = lastImage;
        namesUsed.push(choice3)
        choice2 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice2)) {
            choice2 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice2);
        choice1 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice1)) {
            choice1 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice1);
        choice4 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice4)) {
            choice4 = getRandomNumber(0,imageArray.length-1).n;
        }
    }
    else {
        choice4 = lastImage;
        namesUsed.push(choice4)
        choice2 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice2)) {
            choice2 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice2);
        choice3 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice3)) {
            choice3 = getRandomNumber(0,imageArray.length-1).n;
        }
        namesUsed.push(choice3);
        choice1 = getRandomNumber(0,imageArray.length-1).n;
        while (namesUsed.includes(choice1)) {
            choice1 = getRandomNumber(0,imageArray.length-1).n;
        }
    }
    
    document.getElementById("option1").innerHTML=choice1;
    document.getElementById("option2").innerHTML=choice2;
    document.getElementById("option3").innerHTML=choice3;
    document.getElementById("option4").innerHTML=choice4;
}

function checkImage() {
    var radios = document.getElementsByName("choice");
    var val="";
    var valueToUse = "";
    for (var p = 0; p < radios.length; p++) {
        if(radios[p].checked){
            val = radios[p].value;
            break;
        }
    }

    if (val === "college-name-1") {
        val = choice1;
    } else if (val === "college-name-2") {
        val = choice2;
    } else if (val === "college-name-3") {
        val = choice3;
    } else {
        val = choice4;
    }
    
    if (val==""){
        alert("Please select an answer");
    } else if (val === lastImage) {
        randomImageGenerator();
        points = points + 1;
        changePointVal();
    } else {
        alert(`You guessed wrong!`);
        randomImageGenerator();
    }
}

function changePointVal() {
    var out = "";
    if (points === 1) {
        out = "1 Point";
    } else {
        out = `${points} Points`;
    }
    document.getElementById("points").innerHTML = out;
}

function countdown() {
    clearInterval(interval);
    interval = setInterval(function() {
        var timer = document.getElementById("js-timeout").innerHTML;
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) {
            return;
        } else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) {
            seconds = '0' + seconds;
        }
        document.getElementById("js-timeout").innerHTML = `${minutes}:${seconds}`
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
            if (points === 1) {
                alert(`Congrats! You finished with ${points} point!`);
            } else{
                alert(`Congrats! You finished with ${points} points!`);
            }
        }
    }, 1000);
}

function startTimer() {
    document.getElementById("js-timeout").innerHTML = "2:00";
    countdown();
}

function resetTimer2() {
    document.getElementById("js-timeout").innerHTML = "2:00";
    clearInterval(interval);
}

function stopTimer() {
    clearInterval(interval);
}