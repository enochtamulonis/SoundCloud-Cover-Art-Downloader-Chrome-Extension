chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "downloadFile") {
    chrome.downloads.download({ url: message.url }, function (downloadId) {
      console.log("Succesfully downloaded the file");
      // Handle download initiation, if needed
    });
  }
});

chrome.webNavigation.onCompleted.addListener(function (details) {
  chrome.tabs.sendMessage(details.tabId, { action: "navigationCompleted" });
});
