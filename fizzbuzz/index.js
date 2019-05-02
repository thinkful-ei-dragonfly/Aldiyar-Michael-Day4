function fizzBuzz(countTo) {
    let array = [];
    for (let i = 1 ;i < countTo + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        array.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      } else if (i % 5 === 0) {
        array.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      } else if (i % 3 === 0) {
        array.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
      } else {
        array.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }
    return array;
  }


function main() {
    $('#number-chooser').submit(e => {
        e.preventDefault();
        const countTo = ($('#number-choice').val());
        $(".js-results").html(fizzBuzz(countTo));
    })


}

$(main);