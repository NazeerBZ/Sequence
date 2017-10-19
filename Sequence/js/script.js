
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAVwWMQ6sKURcCdfFQ0OMVEpuDxyTTGaso",
    authDomain: "sequence-9937d.firebaseapp.com",
    databaseURL: "https://sequence-9937d.firebaseio.com",
    storageBucket: "sequence-9937d.appspot.com",
    messagingSenderId: "892776832243"
};
firebase.initializeApp(config);

//****** Button Color Hover...!

function Blue() {

    document.getElementById("B").style.backgroundColor = "#05199E";

    setTimeout(() => {
        document.getElementById("B").style.backgroundColor = "#8293FF";
    }, 1000)
}

function Red() {

    document.getElementById("R").style.backgroundColor = "#AD0000";

    setTimeout(() => {
        document.getElementById("R").style.backgroundColor = "#FF7575";
    }, 1000)
}

function Yellow() {

    document.getElementById("Y").style.backgroundColor = "#B3B302";

    setTimeout(() => {
        document.getElementById("Y").style.backgroundColor = "#FFFF57";
    }, 1000)
}

function Green() {

    document.getElementById("G").style.backgroundColor = "#059E00";

    setTimeout(() => {
        document.getElementById("G").style.backgroundColor = "#70FF6B";
    }, 1000)
}


//****** Button Sound...!

function playBlue() {

    var blue = new Audio('audio/blue.mp3')
    blue.play();
}

function playRed() {

    var red = new Audio('audio/red.mp3')
    red.play();
    // document.getElementById("B").style.backgroundColor = "Blue";
}

function playYellow() {

    var yellow = new Audio('audio/yellow.mp3')
    yellow.play();
}

function playGreen() {

    var green = new Audio('audio/green.mp3')
    green.play();
}

function playWrong() {

    var wrong = new Audio('audio/wrong.mp3')
    wrong.play();
}

//****** Let's Play...!

function play() {

    document.getElementsByClassName("quart1")[0].setAttribute('id', 'B');
    document.getElementsByClassName("quart2")[0].setAttribute('id', 'R');
    document.getElementsByClassName("quart3")[0].setAttribute('id', 'Y');
    document.getElementsByClassName("quart4")[0].setAttribute('id', 'G');
    document.getElementsByClassName("center")[0].setAttribute('id', 'rounds');
    var alrt = document.getElementById("alertUser");

    seriesOfSound = [
        [playBlue],
        [playBlue, playRed],
        [playBlue, playRed, playYellow],
        [playBlue, playRed, playYellow, playGreen]
    ]

    var B = document.getElementById("B");
    var R = document.getElementById("R");
    var Y = document.getElementById("Y");
    var G = document.getElementById("G");

    var Bplus = "1";
    var Rplus = "2";
    var Yplus = "3";
    var Gplus = "4";

    //>>>>>>>> Round 1 <<<<<<<<//

    one();

    function one() {

        document.getElementById("rounds").innerHTML = "";
        document.getElementById("succesfull").style.display = "none";
        alrt.style.display = "none";
        document.getElementById("B").style.pointerEvents = "auto";
        document.getElementById("R").style.pointerEvents = "auto";
        document.getElementById("Y").style.pointerEvents = "auto";
        document.getElementById("G").style.pointerEvents = "auto";

        playBlue();
        Blue();

        B.onclick = function () {
            two();
            playBlue();
            document.getElementById("rounds").innerHTML = 1;
        }
        R.onclick = function () {
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            playRed();
            playWrong();
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(0);
        }
        Y.onclick = function () {
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            playYellow();
            playWrong();
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(0);
        }
        G.onclick = function () {
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            playGreen();
            playWrong();
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(0);
        }

    }

    //>>>>>>>> Round 2 <<<<<<<<//

    function two() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);


        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
        }
        R.onclick = function () {
            playRed();
            playWrong();
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
        }
        Y.onclick = function () {
            playYellow();
            playWrong();
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] == "014") {
                three();
                document.getElementById("rounds").innerHTML = 2;
            }
            if (clickAry[0] != "014") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }

    }

    //>>>>>>>> Round 3 <<<<<<<<//

    function three() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);


        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] == "0142") {
                four();
                document.getElementById("rounds").innerHTML = 3;
            }
            if (clickAry[0] != "0142") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        Y.onclick = function () {
            playYellow();
            playWrong();
            alrt.style.display = "block";
            document.getElementById("B").style.pointerEvents = "none";
            document.getElementById("R").style.pointerEvents = "none";
            document.getElementById("Y").style.pointerEvents = "none";
            document.getElementById("G").style.pointerEvents = "none";
            var gamerName = JSON.parse(localStorage.getItem("userName"));
            firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }

    }

    //>>>>>>>> Round 4 <<<<<<<<//

    function four() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 4000);


        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] != "0142") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        Y.onclick = function () {
            playYellow();
            clickAry[0] = clickAry[0] + Yplus;
            if (clickAry[0] != "01423") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
            if (clickAry[0] == "01423") {
                five();
                document.getElementById("rounds").innerHTML = 4;
            }
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }

    }

    //>>>>>>>> Round 5 <<<<<<<<//

    function five() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 4000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 5000);


        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] != "0142") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        Y.onclick = function () {
            playYellow();
            clickAry[0] = clickAry[0] + Yplus;
            if (clickAry[0] != "01423") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {

                if (clickAry[0] != "014234") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
                else {
                    six();
                    document.getElementById("rounds").innerHTML = 5;
                }
            }

        }

    }

    //>>>>>>>> Round 6 <<<<<<<<//

    function six() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 4000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 5000);

        setTimeout(() => {
            playBlue();
            Blue();
        }, 6000);


        //0142341        
        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
            if (clickAry[0] != "01") {

                if (clickAry[0] != "0142341") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
                else {
                    seven();
                    document.getElementById("rounds").innerHTML = 6;
                }
            }
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] != "0142") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        Y.onclick = function () {
            playYellow();
            clickAry[0] = clickAry[0] + Yplus;
            if (clickAry[0] != "01423") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {

                if (clickAry[0] != "014234") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }

        }

    }

    //>>>>>>>> Round 7 <<<<<<<<//

    function seven() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 4000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 5000);

        setTimeout(() => {
            playBlue();
            Blue();
        }, 6000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 7000);


        //01423412        
        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
            if (clickAry[0] != "01") {

                if (clickAry[0] != "0142341") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] != "0142") {

                if (clickAry[0] != "01423412") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
                else {
                    eight();
                    document.getElementById("rounds").innerHTML = 7;
                }
            }
        }
        Y.onclick = function () {
            playYellow();
            clickAry[0] = clickAry[0] + Yplus;
            if (clickAry[0] != "01423") {
                playWrong();
                alrt.style.display = "block";
                document.getElementById("B").style.pointerEvents = "none";
                document.getElementById("R").style.pointerEvents = "none";
                document.getElementById("Y").style.pointerEvents = "none";
                document.getElementById("G").style.pointerEvents = "none";
                var gamerName = JSON.parse(localStorage.getItem("userName"));
                firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
            }
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {

                if (clickAry[0] != "014234") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }
        }
    }


    //>>>>>>>> Round 8 <<<<<<<<//

    function eight() {

        var clickAry = [];
        clickAry[0] = "0";

        setTimeout(() => {
            playBlue();
            Blue();
        }, 1000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 2000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 3000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 4000);

        setTimeout(() => {
            var func = seriesOfSound[3][3];
            func();
            Green();
        }, 5000);

        setTimeout(() => {
            playBlue();
            Blue();
        }, 6000);

        setTimeout(() => {
            var func = seriesOfSound[1][1];
            Red();
            func();
        }, 7000);

        setTimeout(() => {
            var func = seriesOfSound[2][2];
            func();
            Yellow();
        }, 8000);


        //014234123        
        B.onclick = function () {
            playBlue();
            clickAry[0] = clickAry[0] + Bplus;
            if (clickAry[0] != "01") {

                if (clickAry[0] != "0142341") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }
        }
        R.onclick = function () {
            playRed();
            clickAry[0] = clickAry[0] + Rplus;
            if (clickAry[0] != "0142") {

                if (clickAry[0] != "01423412") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }
        }
        Y.onclick = function () {
            playYellow();
            clickAry[0] = clickAry[0] + Yplus;
            if (clickAry[0] != "01423") {

                if (clickAry[0] != "014234123") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
                else {
                    nine();
                    document.getElementById("rounds").innerHTML = 8;
                }
            }
        }
        G.onclick = function () {
            playGreen();
            clickAry[0] = clickAry[0] + Gplus;
            if (clickAry[0] != "014") {

                if (clickAry[0] != "014234") {
                    playWrong();
                    alrt.style.display = "block";
                    document.getElementById("B").style.pointerEvents = "none";
                    document.getElementById("R").style.pointerEvents = "none";
                    document.getElementById("Y").style.pointerEvents = "none";
                    document.getElementById("G").style.pointerEvents = "none";
                    var gamerName = JSON.parse(localStorage.getItem("userName"));
                    firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
                }
            }
        }
    }

    function nine() {

        document.getElementById("succesfull").style.display = "block";
        var gamerName = JSON.parse(localStorage.getItem("userName"));
        firebase.database().ref().child(gamerName).set(parseInt(document.getElementById("rounds").innerHTML));
    }

}

function start() {

    var inp = document.getElementById("gamer").value;
    if (inp == "") {
        document.getElementById("gamer").style.border = "1px solid Red";
    }
    else {
        localStorage.setItem('userName', JSON.stringify(inp));
        document.getElementById('white-background').style.display = 'none';
        document.getElementById('dlgbox').style.display = 'none';
    }
}




