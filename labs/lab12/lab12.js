var popup = window.open('https://microsoft.com', 'Microsoft', 'width=640, height=480, resizable=yes');

popup.moveTo(70, 50);

popup.resizeTo(500, 350);

function closeWindow() {
    popup.close();
}
setTimeout(closeWindow, 5000);