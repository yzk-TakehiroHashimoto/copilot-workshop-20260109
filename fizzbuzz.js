// FizzBuzz関数
function fizzbuzz(n) {
  // エラーハンドリング：引数が未定義またはnull
  if (n === undefined || n === null) {
    throw new Error('引数が指定されていません');
  }

  // エラーハンドリング：数値でない場合
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('引数は数値である必要があります');
  }

  // エラーハンドリング：整数でない場合
  if (!Number.isInteger(n)) {
    throw new TypeError('引数は整数である必要があります');
  }

  // エラーハンドリング：正の数でない場合
  if (n <= 0) {
    throw new RangeError('引数は正の整数である必要があります');
  }

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
