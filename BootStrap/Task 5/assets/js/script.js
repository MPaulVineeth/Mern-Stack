(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        var inputs = form.querySelectorAll("input");
        inputs.forEach(function (input) {
          var feedback = input.parentNode.querySelector(".invalid-feedback");
          if (input.value === "") {
            feedback.classList.add("show");
          } else {
            feedback.classList.remove("show");
          }
        });

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
