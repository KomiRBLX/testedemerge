const imageUpload = document.getElementById('imageUpload');
const mergeButton = document.getElementById('mergeButton');
const molde = document.getElementById('molde');
const resultCanvas = document.getElementById('resultCanvas');
const ctx = resultCanvas.getContext('2d');

let uploadedImage = null;

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = new Image();
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

mergeButton.addEventListener('click', function() {
    if (uploadedImage) {
        resultCanvas.width = molde.width;
        resultCanvas.height = molde.height;
        ctx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);
        
        ctx.drawImage(uploadedImage, 0, 0, uploadedImage.width, uploadedImage.height);
        ctx.drawImage(molde, 0, 0);
    }
});

