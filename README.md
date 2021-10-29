# Reframe Viewer

Chrome extension to visualize and debug reframe db and events.

## Setup

### Adding reframe viewer cljs package
1. Add `reframe-viewer` to lein or shadowcljs config.

```
[org.clojars.shamin616/reframe-viewer "0.1.1-SNAPSHOT"]
``` 

2. Call `init` funtion in `reframe-viewer.main` in your apps initialize function.

```cljs
(ns app.main
  (:require ...
            [reframe-viewer.main :as rv]))

(defn ^:export main
  []
  ...
  (rv/init))
```

### Installing chrome extention
Latest version of the chrome extension will be available in the releases tab. You can download the `.crx` file and load it to your chromium browser.