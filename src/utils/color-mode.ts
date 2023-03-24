window.parent.postMessage({ action: "getColorMode" }, "*");
window.addEventListener("message", function (event) {
  if (event.data.colorMode) {
    switch (event.data.colorMode) {
      case "light":
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        break;

      case "dark":
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        break;

      default:
        break;
    }
  }
});

export {};
