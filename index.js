console.log("My Extension")

var links = document.getElementsByTagName("a");
var formatted_links = []
for (let i = 0; i < links.length; i++) {
    let title = links[i].text;
    let href = links[i].href;
    // console.log(title);
    if (title != "" && href != "") {
        formatted_links.push(title, href);
    }

}

chrome.runtime.sendMessage({
    "action": "print_msgs",
    "data": formatted_links
}, res => {
    console.log(res);
})