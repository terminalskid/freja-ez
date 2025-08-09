
particlesJS('particlesClick',
  
  {
    "particles": {
      "number": {
        "value": 0,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable":false,
          "speed": 10,
          "size_min": 3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },

      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "destroy",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    "life": {
      "duration": {
        "value": 1 
      }
    },
    

    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push",


        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 20,
        },
        "remove": {
          "particles_nb": 20,
          "delay": 5000
        }
      }
    },
    "retina_detect": true,


    
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover",
    }

  });


  const audioFiles = [
     f1 = document.getElementById("f1").src,
     f2 = document.getElementById("f2").src,
     f3 = document.getElementById("f3").src
    ];
let currentIndex = 0;

  function playParticleSound() {
  const selectedAudio = audioFiles[currentIndex];
  const particleSound = new Audio(selectedAudio);
  particleSound.play();

  currentIndex++;

  if (currentIndex >= audioFiles.length) {
    currentIndex = 0;
}

var particlesClickedContainer = document.getElementById('particlesClick');

var startTime = new Date().getTime();

var duration = 1000; 

function updateOpacity() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    var opacity = 1 - (elapsedTime / duration);

    particlesClickedContainer.style.opacity = opacity;

    if (opacity <= 0) {
        while (particlesClickedContainer.firstChild) {
            particlesClickedContainer.removeChild(particlesClickedContainer.firstChild);
        }
    } else {
        requestAnimationFrame(updateOpacity);
    }
}

updateOpacity();
}
