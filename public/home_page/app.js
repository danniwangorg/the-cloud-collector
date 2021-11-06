let imgdataUrl;

window.addEventListener("load", () => {

    let cloudButton = document.getElementById("collect-btn");
    cloudButton.addEventListener('click', () => {

        // store the description, date, location, image
        let cloudInput = document.getElementById("cloud-input").value;

        let cloudInputObj = { "cloud": cloudInput };
        cloudInputObj.date = document.getElementById("cloud-date").value;
        cloudInputObj.location = document.getElementById("cloud-loc").value;

        cloudInputObj.image = imgdataUrl;
        console.log(cloudInputObj.image);

        let cloudInputJSON = JSON.stringify(cloudInputObj);
        console.log(cloudInputJSON);

        fetch("/clouds", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: cloudInputJSON
            })
            .then(response => response.json())
            .then(data => {
                console.log("Did this work?");
                console.log(data);
            })
    });
});

let openFile = function(file) {
    let input = file.target;

    let reader = new FileReader();
    reader.onload = function() {
        let dataURL = reader.result;
        let output = document.getElementById('cloud-output');
        output.src = dataURL;
        imgdataUrl = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};