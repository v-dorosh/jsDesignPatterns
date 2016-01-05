var SingletonTester = (function() {
  var _instance;

  function Singleton(options) {
    this.name = options.name;
  }

  return {
    getInstance: function(options) {
      if(!_instance) {
        _instance = new Singleton(options)
      }

      return _instance;
    }
  }
})();

var a = SingletonTester.getInstance({
  name: 'Singleton1'
});

var b = SingletonTester.getInstance({
  name: 'Singleton2'
});

console.log(a);
console.log(b);