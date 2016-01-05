function ObserverList() {
  this.observers = [];
}

ObserverList.prototype.add = function(obj) {
  this.observers.push(obj);
};
ObserverList.prototype.get = function(index) {
  return this.observers[index];
};
ObserverList.prototype.countOf = function() {
  return this.observers.length;
};


function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};
Subject.prototype.getObserver = function(index) {
  return this.observers.get(index);
};
Subject.prototype.notify = function(context) {
  for (var i = 0; i < this.observers.countOf(); i++) {
    this.observers.get(i).update(context);
  }
};






function Observer() {
  this.update = function() {};
};

// Extend an object with an extension
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

// References to our DOM elements

var controlCheckbox = document.getElementById( "mainCheckbox" ),
    addBtn = document.getElementById( "addNewObserver" ),
    container = document.getElementById( "observersContainer" );

extend(controlCheckbox, new Subject());

controlCheckbox.addEventListener('click', function() {
  controlCheckbox.notify(controlCheckbox.checked);
});

addBtn.addEventListener('click', function(e) {


  var checkBox = document.createElement('INPUT');
  checkBox.type = 'checkbox';

  extend(checkBox, new Observer());
  checkBox.update = function(isChecked) {
    checkBox.checked = isChecked;
  };
  controlCheckbox.addObserver(checkBox);

  container.appendChild(checkBox);
});
