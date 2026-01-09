// FizzBuzz関数
function fizzbuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
}

// FizzBuzz（1～20）
if (require.main === module) {
  for (let i = 1; i <= 20; i++) {
    console.log(fizzbuzz(i));
  }
}

module.exports = fizzbuzz;
