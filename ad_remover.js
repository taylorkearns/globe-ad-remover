GlobeAdRemover = {
  adWrappers: $(".ad, .ad-wrapper"),

  run: function() {
    GlobeAdRemover.intervalID = setInterval(function() {
      adWrappers = $(".ad, .ad-wrapper");
      adWrappers.css("display", "none");
    }, 1000)
  },

  timeout: function() {
    setTimeout(function() {
      window.clearInterval(GlobeAdRemover.intervalID);
    }, 10000)
  }
}

GlobeAdRemover.run();
GlobeAdRemover.timeout();
