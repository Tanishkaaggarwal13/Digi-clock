function updateClock() {
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");
  const bear = document.querySelector(".bear");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;

  // Set greeting and bear emoji
  if (hours >= 5 && hours < 12) {
    greeting.textContent = "Good Morning Cutie";
    
    // Clear existing content
    bear.textContent = ""; 

    // Create an image element
    const img = document.createElement("img");
    img.src = "data:image/jpeg;base64,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";
    
    img.style.width = "150px"; // Set image size
    img.style.height = "auto";

    // Append the image to the 'bear' element
    bear.appendChild(img);

  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Bearly On Time!";
    
    // Clear existing content
    bear.textContent = ""; 

    // image element
    const img = document.createElement("img");
    img.src = "C:\\Users\\DELL\\OneDrive\\Desktop\\digi clock\\teddy img.png"; //image path
    
    img.style.width = "150px"; //Set image size
    img.style.height = "auto";

    // Append the image to the 'bear' element
    bear.appendChild(img);
  } else if (hours >= 18 && hours < 21) {
    greeting.textContent = "Amazingly Late!";
    
    // Clear existing content
    bear.textContent = ""; 

    // image element
    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAO9LLRKbcThGxbkpN4R5wqFhmmWh-AcMEbUVYLZpe3-UJlpLqpqCKLkgz3sWRzXIx8N0&usqp=CAU"; // Replace with your actual image path
    
    img.style.width = "150px"; // Set image size
    img.style.height = "auto";

    // Append the image to the 'bear' element
    bear.appendChild(img);


    


  // } else if (hours >= 18 && hours < 21) {
  //   greeting.textContent = "Good Evening!";
  //   bear.textContent = "🐰";
  } else {
    greeting.textContent = "Time To Rest GIRLBOSS!";
      
      // Clear existing content
      bear.textContent = ""; 
  
      // Create an image element
      const img = document.createElement("img");
      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFPG6zg2GJE7sJibC5qwyh1VHsNAqsBZhnA&s"; //image path
      
      img.style.width = "150px"; //Set image size
      img.style.height = "auto";
  
      
      bear.appendChild(img);
  }
  
}

setInterval(updateClock, 1000);
updateClock();
