chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.storage.sync.get({
    jiraURL: 'http://'
  }, function (items) {
    console.log(items.jiraURL);
    // let url = "http://sculpt0r.net/" + info.selectionText
    // var win = window.open(url, '_blank');
    // win.focus();

    // alert(info.selectionText)
    // alert(JSON.stringify(info))
    // alert(JSON.stringify(tab))
  })
});

chrome.contextMenus.create({
  id: 'open',
  title: 'Open JIRA ticket',
  contexts: ['selection'],
})