var myModule = (function() {
  var privateValue = 1;

  var privateFunc = function() {
    console.log('hello from private');
  };

  return {
    getPrivateValue: function() {
      return privateValue;
    },
    callPrivateFunc: privateFunc
  }
})();


myModule.callPrivateFunc();