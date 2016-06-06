<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Login.ascx.cs" Inherits="Warspace.Login" %>

<link href="Styles/bootstrap.min.css" rel="stylesheet" />

<script src="Scripts/jquery-2.2.3.js" type="text/javascript"></script>
<script src="Scripts/bootstrap.min.js" type="text/javascript"></script>
<script src="Scripts/jquery.cookie.js" type="text/javascript"></script>


<%--Extra for the background stuff--%>
<script src="Scripts/particles.min.js" type="text/javascript"></script>
<script src="Scripts/jquery.parallax.js" type="text/javascript"></script>



<style>
@import url(http://fonts.googleapis.com/css?family=Lato:400,300,100);
body {
  font-family: Ubuntu;
  background: #2980b9;
  overflow: hidden;
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

#particles-js, #parallax, .layer, .some-space, .some-more-space {
  height: 100%;
  position: absolute;
  width: 100%;
}

#particles-js {
  opacity: 0.6;
}

h1 {
  color: white;
  font-size: 5em;
  font-weight: 100;
  letter-spacing: 0.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
}

a {
  color: white;
  border: 1px solid white;
  display: table;
  position: absolute;
  top: 60%;
  left: 50%;
  letter-spacing: 0.05em;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
  text-decoration: none;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  padding: 10px 15px;
}
a:hover {
  background: white;
  color: black;
}

.some-space {
  -webkit-animation: rotate 18s 0.5s infinite linear reverse;
          animation: rotate 18s 0.5s infinite linear reverse;
}

.some-more-space {
  -webkit-animation: rotate 15s 0.1s infinite linear;
          animation: rotate 15s 0.1s infinite linear;
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0, 1.5%, 0) rotateZ(0deg);
            transform: rotateZ(0deg) translate3d(0, 1.5%, 0) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0, 1.5%, 0) rotateZ(-360deg);
            transform: rotateZ(360deg) translate3d(0, 1.5%, 0) rotateZ(-360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0, 1.5%, 0) rotateZ(0deg);
            transform: rotateZ(0deg) translate3d(0, 1.5%, 0) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0, 1.5%, 0) rotateZ(-360deg);
            transform: rotateZ(360deg) translate3d(0, 1.5%, 0) rotateZ(-360deg);
  }
}
</style>



<div id="parallax">
  <div data-depth="0.6" class="layer">
    <div class="some-space">
      <h1>WARSPACE</h1>
    </div>
  </div>
  <div data-depth="0.4" class="layer">
    <div id="particles-js"></div>
  </div>
  <div data-depth="0.3" class="layer">
    <div class="some-more-space"><a class="btn btn-success btn-large" href="#" id="LoginButton">ENTER THE VOID</a></div>
  </div>
</div>




<script type="text/javascript">
    $("#LoginButton").click(function () {
        //var stateCookie = {
        //    DisplayName: "",
        //    Identity: "Guest",
        //    Photo: "",
        //    RegistrationID: ""
        //};

        var stateCookie = {
            DisplayName: "<%= ComputerName %>",
            Identity: "Unknown",
            Photo: "",
            RegistrationID: ""
        };

        $.cookie('Warspace.UserProfile', JSON.stringify(stateCookie), { path: '/', expires: 1 });
        $("form").submit();
    });

    

    $('#parallax').parallax({
        invertX: true,
        invertY: true,
        scalarX: 10,
        frictionY: .1
    });


    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
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
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
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
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
</script>