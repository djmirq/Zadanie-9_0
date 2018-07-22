// Look for .hamburger

Highcharts.chart("chart", {
  chart: {
    type: "column"
  },
  title: {
    text: " "
  },
  subtitle: {
    text: " "
  },
  xAxis: {
    categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: " "
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} p</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.1,
      borderWidth: 1
    }
  },
  series: [
    {
      name: "Signups",
      color: "#80BFCA",
      data: [350, 200, 230, 330, 430, 400, 290, 250, 300]
    },
    {
      name: "FTD",
      color: "#FF9A38",
      data: [400, 150, 300, 250, 450, 120, 200, 500, 300]
    }
  ]
});

var hamburger = document.querySelector(".hamburger");
var sidenav = document.querySelector(".sidenav");
var main = document.querySelector(".main");

var x = window.matchMedia("(max-width: 850px)");
myFunction(x, false);
x.addListener(myFunction);

function myFunction(x) {
  small(x.matches, false);
}

// On click
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  small(x.matches, true);
});

function small(small, _btnclick) {
  if (_btnclick == false) {
    hamburger.classList.toggle("is-active", small ? false : true);
  }

  if (small) {
    main.style.marginLeft = "0px";
    sidenav.style.height = "70px"; //domyslnie navbar schowany
    sidenav.style.overflow = "hidden";
    if (hamburger.classList.contains("is-active")) {
      main.style.marginLeft = "0px";
      sidenav.style.height = "100%";
      sidenav.style.overflow = "auto";
    } else {
      main.style.marginLeft = "0px";
      sidenav.style.height = "70px";
      sidenav.style.overflow = "hidden";
    }
  } else {
    main.style.marginLeft = "200px"; //domyslnie navbar otwarty
    sidenav.style.height = "100%";
    sidenav.style.overflow = "auto";
    if (hamburger.classList.contains("is-active")) {
      main.style.marginLeft = "200px";
      sidenav.style.height = "100%";
      main.style.marginLeft = "200px";
    } else {
      main.style.marginLeft = "0px";
      sidenav.style.height = "70px";
      sidenav.style.overflow = "hidden";
    }
  }
}

//Side Menu + Sub Menu Selector
var header = document.getElementById("menu1");
var btns = header.getElementsByClassName("glyphter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    subMenuToggle(this);
  });
}

function subMenuToggle(sender) {
  var main = document.querySelector(".main");
  var subMain = main.getElementsByClassName("main-container");
  for (var i = 0; i < subMain.length; i++) {
    subMain[i].classList.add("non-active");
    var subMenuWindow = main.getElementsByClassName(
      sender.textContent
        .toLowerCase()
        .trim()
        .replace(" ", "_")
    );
    if (subMenuWindow.length > 0) {
      subMenuWindow[0].classList.remove("non-active");
    }
  }
}

var bannermodal = document.getElementById("BannerModal");
console.log(bannermodal.className);
var btns = document.getElementsByClassName("addbanner");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    bannermodal.style.display = "block";
  });

  span.onclick = function() {
    bannermodal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == bannermodal) {
      bannermodal.style.display = "none";
    }
  };
}

var linksmodal = document.getElementById("LinksModal");
var linksbtns = document.getElementsByClassName("addnew");
var linksspan = document.getElementsByClassName("close_links")[0];
console.log(linksspan.length);
for (var i = 0; i < linksbtns.length; i++) {
  linksbtns[i].addEventListener("click", function() {
    linksmodal.style.display = "block";
  });

  linksspan.onclick = function() {
    linksmodal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == linksmodal) {
      linksmodal.style.display = "none";
    }
  };
}
