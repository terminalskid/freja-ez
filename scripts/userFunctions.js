

// button click
const buttons = document.querySelectorAll('.btn1');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Apply scaling effect when clicked
    this.style.transform = 'scale(0.95)';
    
    // Use setTimeout to reset the scale after a short delay (e.g., 300 milliseconds)
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

//calculate age
document.addEventListener("DOMContentLoaded", function () {
  const updateAgeElement = document.getElementById("updateAge");
  const birthdateInput = document.getElementById("updateBirthcode");

  birthdateInput.addEventListener("input", calculateAge);

  function calculateAge() {
    const birthdateValue = birthdateInput.value;

    if (birthdateValue.length === 8) {
      const birthYear = parseInt(birthdateValue.slice(0, 4));
      const birthMonth = parseInt(birthdateValue.slice(4, 6)) - 1;
      const birthDay = parseInt(birthdateValue.slice(6, 8));

      const birthdate = new Date(birthYear, birthMonth, birthDay);

      // Calculate age based on birthdate
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthdate.getFullYear() - (birthdate.getMonth() > new Date().getMonth() || (birthdate.getMonth() === new Date().getMonth() && birthdate.getDate() > new Date().getDate()) ? 1 : 0);

      // Display the calculated age
      updateAgeElement.textContent = age;
    } else {
      updateAgeElement.textContent = "Ingen ålder";
    }
  }

  calculateAge();
});


//count index.html
function startCountdown() {
  let count = 120;
  const countdownTimer = document.getElementById("countdownTimer");
  const sekSpan = document.getElementById("countdownSpan")

  countdownTimer.innerHTML = count;

  const intervalId = setInterval(function () {
    count--;

    countdownTimer.innerText = count;
    countdownTimer.appendChild(sekSpan.cloneNode(true));

    if (count === 0) {
      count = 120;
      countdownTimer.innerText = count;
      countdownTimer.appendChild(sekSpan.cloneNode(true));
    }
  }, 1000);

  return intervalId;
}

startCountdown();

  function updateCurrentTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  
    currentTimeElement.textContent = formattedTime;
  }
  
  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
  
  setInterval(updateCurrentTime, 1000);
  
  updateCurrentTime();

    var currentDate = new Date();

    var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var dayOfMonth = currentDate.getDate();
    var month = monthsOfYear[currentDate.getMonth()];

    var formattedDate = dayOfMonth + ' ' + month;
    document.getElementById('currentDate').innerText = formattedDate;


//touch move panelcontent
    var touchArea = document.getElementById('panelContent');
    var personalText = document.getElementById("personalText")
    var startY;
  
    // Add event listener for touch start
    touchArea.addEventListener('touchstart', function(event) {
      startY = event.touches[0].clientY;

    });
  
    // Add event listener for touch end
    touchArea.addEventListener('touchend', function(event) {
      var endY = event.changedTouches[0].clientY; // Get the vertical position when touch ends
      var deltaY = endY - startY; // Calculate the change in vertical position
  
      if (Math.abs(deltaY) > 10) { // Adjust this threshold as needed to ignore small movements
        if (deltaY > 0) {
          //down
          touchArea.style.transform = "translateY(20px)";
          personalText.style.transition = "opacity 0.5s"
          personalText.style.opacity = "0"

          setTimeout(function() {
            touchArea.style.transform = "translateY(0)";
            personalText.style.opacity = "1"
          }, 300);

        } else if (deltaY < 0) {
          //up
          touchArea.style.transform = "translateY(-20px)";
          personalText.style.transition = "opacity 0.5s"
          personalText.style.opacity = "0"

          setTimeout(function() {
            touchArea.style.transform = "translateY(0)";
            personalText.style.opacity = "1"

          }, 300);
          

        }
      }
    });
