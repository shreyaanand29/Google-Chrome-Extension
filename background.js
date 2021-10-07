function myClick(info, tab) {
    console.log("Clicked on page: ", info, tab)
}

function myImage(info, tab) {
    console.log("Clicked an image: ", info, tab)
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
}

function myImage(info, tab) {
    console.log("Clicked an image: ", info, tab)
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
}

function myQuote(info, tab) {
    console.log("Clicked an image: ", info, tab)
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}

chrome.contextMenus.create({
    "title": "Share",
    "contexts": ["page"],
    "onclick": myClick
})

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": myImage
})

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"],
    "onclick": myQuote
})

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("Message : ", msg)
    sendResponse({ "text": "recieved the links" })
})