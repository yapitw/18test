function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}

function getPermission(cb) {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          alert("已開啟晃動感測");
          if (typeof cb === "function") cb();
        } else {
          alert("未開啟晃動感測");
          if (typeof cb === "function") cb();
        }
      })
      .catch(console.error);
  } else {
    if (typeof cb === "function") cb();
  }
}

$(document).ready(function () {
  ver = iOSversion();
  if (ver && ver[0] >= 5) {
    // 是 iOS
    var verDesc = "This is running iOS " + ver;
    $("#versionDisplay").text(verDesc);

    if (ver[0] === 12 && ver[1] === 1) {
      // 是 ios 12.1
    }

    if (ver[0] === 12 && ver[1] >= 2) {
      // 是 ios 12.2 ~ 12.x
    }
  } else {
    // 不是 iOS
    $("body").find("h1").text("Not iOS");
  }

  $("#getPermissionButton").click(function () {
    getPermission(function () {
      window.location = "https://google.com";
    });
  });
});