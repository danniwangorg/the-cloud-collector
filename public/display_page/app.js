window.addEventListener("load", () => {

    fetch('/latest_data')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let cloudData = data[0];

            let InputDisplay = document.getElementById('input-display');
            InputDisplay.append(cloudData.cloud);
            let DateDisplay = document.getElementById('date-display');
            DateDisplay.append(cloudData.date);
            let LocDisplay = document.getElementById('loc-display');
            LocDisplay.append(cloudData.location);
            let ImageDisplay = document.getElementById('cloud-display');
            ImageDisplay.src = cloudData.image;
        })
});