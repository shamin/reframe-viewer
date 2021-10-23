export const executeScriptFiles = (tabId, ...fileNames) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: fileNames,
  });
};

export const executeScriptFunc = (tabId, func) => {
  chrome.scripting.executeScript({
    target: { tabId },
    func,
  });
};
