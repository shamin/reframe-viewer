export const executeScriptFiles = (tabId, ...fileNames) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: fileNames,
  });
};
