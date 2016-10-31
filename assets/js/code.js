/*Défilement de la homepage interactif avec le menu*/
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

/*barre de progression*/
/*photoshop*/
function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*illustrator*/
function move2() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}

/*indesign*/
function move3() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 65) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*html/css*/
function move4() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 85) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*angular*/
function move5() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*javascript*/
function move6() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 65) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*php*/
function move7() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*bootstrap*/
function move8() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*jquery*/
function move9() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=65) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*linux terminal*/
function move10() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=55) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*windows*/
function move11() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=75) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*sql*/
function move12() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=55) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}

/*atom*/
function move14() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=65) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
/*netbeans*/
function move15() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >=45) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
