const images = [
    "CheerUp.jpeg", "Lady.jpeg", "Lady2.jpeg"];

    const chosenImage = images[Math.floor(Math.random() * images.length)];

    const bgImage = document.createElement("img");

    bgImage.src = `img/${chosenImage}`;

    document.body.appendChild(bgImage);