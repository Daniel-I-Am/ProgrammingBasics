// This is isn't declared as `async` because it already returns a promise
function delay() {
    // `delay` returns a promise
    return new Promise(function(resolve, reject) {
        // Only `delay` is able to resolve or reject the promise
        setTimeout(function() {
            resolve(42); // After 3 seconds, resolve the promise with value 42
        }, 2000);
    });
}

async function giveMeSomeNiceName(gender) {
    let name = 'no name defined';
    promise = fetch("https://uinames.com/api/?gender=" + gender)
    .then((response) => {
      if(response.ok) {
          return response.json();
      } else {
          throw new Error('Server response wasn\'t OK');
      }
    })
    .then((json) => {
      console.log(json.name)
    });
}

function pig(n) {
    str = ""
    for (let i = n; n > 0; n--) str += "\u{1F437}"
    return str;
}

function fac(n) {
    if (n == 1) return 1;
    return n * fac(n-1);
}