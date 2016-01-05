var pubSub = (function() {
  var keysHolder = {};
  return {
    subscribe: function(key, func) {
      if (!keysHolder[key]) {
        keysHolder[key] = [];
      }
      keysHolder[key].push(func);
    },
    publish: function(key, obj) {
      if (keysHolder[key]) {
        for (var i = 0; i < keysHolder[key].length; i++) {
          keysHolder[key][i](obj);
        }
      }
    }
  };
})();




pubSub.subscribe('test1', function(obj) {
  console.log('1 subscriber runned with name ' + obj.name);
});
pubSub.subscribe('test1', function(obj) {
  console.log('2 subscriber runned with name ' + obj.name);
});
pubSub.subscribe('test2', function(obj) {
  console.log('3 subscriber runned with name ' + obj.name);
});
pubSub.subscribe('test1', function(obj) {
  console.log('4 subscriber runned with name ' + obj.name);
});
pubSub.subscribe('test1', function(obj) {
  console.log('5 subscriber runned with name ' + obj.name);
});


pubSub.publish('test1', {
  name: 'John'
});