/*=========================================================================================
    File Name: ex-component-tour.js
    Description: Extra Components tour.
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
  displayTour();
  $(window).resize(displayTour)
  // tour initialize
  var tour = new Shepherd.Tour({
    defaultStepOptions: {
      classes: 'tour-container shadow-md bg-purple-dark',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });

  //  tour step added here - Step 1
  tour.addStep({
    title: 'Here is your Search Bar.',
    attachTo: {
        element: '#heatmap-basic-chart',
        on: 'top'
    },
    buttons: [{
        action: function () {
            return this.cancel();
        },
        text: "Sair",
        classes: 'btn',
        },
        {
        action: function () {
            return this.next();
        },
        text: 'Próximo',
        classes: 'btn',
        }
    ],
    id: 'welcome'
  });
  
  // function to remove tour on small screen
  function displayTour() {
    window.resizeEvt;
    if ($(window).width() > 770) {
      $('#tour').on("click", function () {
        clearTimeout(window.resizeEvt);
        tour.start();
      })
    } else {
      $('#tour').on("click", function () {
        clearTimeout(window.resizeEvt);
        tour.cancel()
        window.resizeEvt = setTimeout(function () {
          alert("Tour only works for large screens!");
        }, 250);;
      })
    }
  }
});
