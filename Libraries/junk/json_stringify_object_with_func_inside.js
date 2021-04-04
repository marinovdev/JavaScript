// stringifying object with func inside wiill throw error:

let obj = {
    f: () => {
        return 1;
    }
}
let objString = JSON.stringify(obj);
console.log(objString); //{}

let obj2 = {
    v: 1
}

let obj2Strig = JSON.stringify(obj2); //{"v":1}
console.log(obj2Strig);

// How to JSON.stringify an object while keeping the function

var obj3 = {
    foo: function() {
      return "I'm a function!";
    }
  };
  
  var json = JSON.stringify(obj3, function(key, value) {
    if (typeof value === 'function') {
      return value.toString();
    } else {
      return value;
    }
  });
  
  console.log(json);

  obj3 = JSON.parse(json);
  console.log(obj3);

  // eval evaluates arrow functions but not func declarations
    let f = eval(`() => { return 1}`);
  
    console.log(f()) // 1
///