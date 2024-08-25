console.log(tag("Event: Console Has Started"))
const startTime = Date.now();
const version = "The current version is alpha 1.0.0 (Github release) this program is currently in development.";
const dos = `


🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧

█████          █████    ██████   █████    █████  █████    █████ █████
░░███          ░░███    ░░██████ ░░███    ░░███  ░░███    ░░███ ░░███ 
 ░███           ░███     ░███░███ ░███     ░███   ░███     ░░███ ███  
 ░███           ░███     ░███░░███░███     ░███   ░███      ░░█████   
 ░███           ░███     ░███ ░░██████     ░███   ░███       ███░███  
 ░███      █    ░███     ░███  ░░█████     ░███   ░███      ███ ░░███ 
 ███████████ ██ █████ ██ █████  ░░█████ ██ ░░████████   ██ █████ █████
░░░░░░░░░░░ ░░ ░░░░░ ░░ ░░░░░    ░░░░░ ░░   ░░░░░░░░   ░░ ░░░░░ ░░░░░ 
                                                                      
🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧      

This is the Laboratories in Nevada, Using Xylophones coalition console program.

${version}

This program was developed by 9Nine_Tails (see more by typing 'Credits()')

Type in GetConsoleCmnds() to view a list of commands you can type into the console.
`;
const abcde = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [0],
["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"], ["m"], ["n"], ["o"], ["p"], ["q"], ["r"], ["s"], ["t"], ["u"], ["v"], ["w"], ["x"], ["y"], ["z"],
["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"], ["H"], ["I"], ["J"], ["K"], ["L"], ["M"], ["N"], ["O"], ["P"], ["Q"], ["R"], ["S"], ["T"], ["U"], ["V"], ["W"], ["X"], ["Y"], ["Z"]];
//load event
addEventListener("load", (event) => {
    console.log(tag("Event: Load Event Has Happened"))
    const loadTime = Date.now();
    console.log(tag("The load event happened " + (loadTime - startTime) + "ms after the console has started"))
    const clientInformation = `
Client timezone found: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
-
userAgent found: ${navigator.userAgent};
-
Client Platform found: ${navigator.userAgentData.platform}
-
Language found: ${navigator.language}
`
    console.log(tag(clientInformation))
    console.log(tag(dos))
    // localstorage
    let Visits = localStorage.getItem("Visits");
    let Name = localStorage.getItem("Name");
    let gamertag = localStorage.getItem("gamertag");
    if (Visits == null) {
        localStorage.setItem("Visits", 1);
        console.log(tag('Welcome new user user. Type in "Setname("<username>") to make your username'))
    } else {
        Visits++
        localStorage.setItem("Visits", Visits)
        if (Name == null) {
            Name = "unnamed" + getRandomInt(1000)
            localStorage.setItem("Name", Name)
        } console.log(tag("Welcome back, " + Name))
    }
    if (gamertag == null) { localStorage.setItem("gamertag", "unnamed" + getRandomInt(1000)) }
    //</localstorage>
});
//</load event>
function tag(string) { return "{#}[" + new Date().toISOString().split("Z")[0].split("T")[1] + "] | " + string }
function taggame(string) { return tag("Game | " + string) }
function getRandomInt(max) { return Math.floor(Math.random() * max); }
//63^6 = ~62bill
function generateRandomUUID() {
    let lol
    let lolcat = "U;";
    for (let i = 0; i < 6; i++) {
        lol = (abcde[getRandomInt(63)]);
        lolcat = (lolcat + lol)
    }
    return lolcat
}


function uh() {
    alert("Something whent wrong!")
    
}






function GetConsoleCmnds() {
    console.log(tag("Here is a list of console commands you can use:"))
    console.table([
        ["GetConsoleCmnds()", "Displays this table"],
        ["TimestampInfo()", "Displays information about the timestamp used"],
        ["Credits()", "Displays credits"],
        ["ChangeLog()", "Displays changelog"],
        ["GetVersion"], ["Displays the current version of the program"]
    ])
}
function GetVersion() { console.log(tag(version)) }
function TimestampInfo() { console.log(tag("The date format is HH:MM:SS.SSS (24 hour clock UTC+0)")) }
function Setname(username) {
    Name = username
    localStorage.setItem("Name", Name)
    console.log(tag("Set username to: " + username))
}
function Credits() {
    console.log(tag("Here are the credits:"))
    console.table([
        ["Head Devoloper:", "9Nine_Tails", "https://github.com/9NineTails"]
    ])
}
function ChangeLog() {
    console.log(tag("Here is the changelog:"))
    console.table([
        ["alpha 1.0.0", "(Github release)", "8/20/2024 (m/d/y)", "github release, favicon, changelog update, +pfp png"],
        ["Prerelease 0.2.0", "UUID 0"],
        ["Prerelease 0.1.2", "Changelog & Credits"],
        ["Prerelease 0.1.1", "Localstorage 1"],
        ["Prerelease 0.0.0", "Beginning"]
    ])
}
