export const executeScriptFiles = (tabId, ...fileNames) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: fileNames,
  });
};

export const executeScriptFunc = (tabId, func, args) => {
  chrome.scripting.executeScript({
    target: { tabId },
    func,
    args,
  });
};
