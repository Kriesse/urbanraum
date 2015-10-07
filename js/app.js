$(function() {
  $(".js-language-switch").on("click", onClickSwitch);

  var language = localStorage.getItem("language");
  if (language) {
    changeLanguage(language);
  }

  function onClickSwitch(event) {
    event.preventDefault();
    var id = event.target.id;
    changeLanguage(id);
  }

  function changeLanguage(langId) {
    var selector = "[data-" + langId + "]";
    $(selector).each(function(i, el) {
      // get content
      var data = $(el).data(langId);
      // replace content
      $(el).html(data);
    });
    localStorage.setItem("language", langId);
  }

  $("body").addClass("lang-loaded");

});