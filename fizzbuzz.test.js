const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  describe('FizzBuzz (15の倍数)', () => {
    test('15を入力すると"FizzBuzz"を返す', () => {
      expect(fizzbuzz(15)).toBe('FizzBuzz');
    });
  });

  describe('Fizz (3の倍数)', () => {
    test('3を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(3)).toBe('Fizz');
    });

    test('6を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(6)).toBe('Fizz');
    });

    test('9を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(9)).toBe('Fizz');
    });

    test('12を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(12)).toBe('Fizz');
    });

    test('18を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(18)).toBe('Fizz');
    });
  });

  describe('Buzz (5の倍数)', () => {
    test('5を入力すると"Buzz"を返す', () => {
      expect(fizzbuzz(5)).toBe('Buzz');
    });

    test('10を入力すると"Buzz"を返す', () => {
      expect(fizzbuzz(10)).toBe('Buzz');
    });

    test('20を入力すると"Buzz"を返す', () => {
      expect(fizzbuzz(20)).toBe('Buzz');
    });
  });

  describe('その他 (数字をそのまま返す)', () => {
    test('1を入力すると1を返す', () => {
      expect(fizzbuzz(1)).toBe(1);
    });

    test('2を入力すると2を返す', () => {
      expect(fizzbuzz(2)).toBe(2);
    });

    test('4を入力すると4を返す', () => {
      expect(fizzbuzz(4)).toBe(4);
    });

    test('7を入力すると7を返す', () => {
      expect(fizzbuzz(7)).toBe(7);
    });

    test('8を入力すると8を返す', () => {
      expect(fizzbuzz(8)).toBe(8);
    });

    test('11を入力すると11を返す', () => {
      expect(fizzbuzz(11)).toBe(11);
    });

    test('13を入力すると13を返す', () => {
      expect(fizzbuzz(13)).toBe(13);
    });

    test('14を入力すると14を返す', () => {
      expect(fizzbuzz(14)).toBe(14);
    });

    test('16を入力すると16を返す', () => {
      expect(fizzbuzz(16)).toBe(16);
    });

    test('17を入力すると17を返す', () => {
      expect(fizzbuzz(17)).toBe(17);
    });

    test('19を入力すると19を返す', () => {
      expect(fizzbuzz(19)).toBe(19);
    });
  });

  describe('失敗例', () => {
    test('(失敗ケース) 15を入力すると"Fizz"を返す', () => {
      expect(fizzbuzz(15)).toBe('Fizz'); // これは失敗する（正しくは"FizzBuzz"）
    });
  });

  describe('エラーハンドリング', () => {
    describe('引数が未定義またはnull', () => {
      test('引数なしで呼び出すとエラーをスローする', () => {
        expect(() => fizzbuzz()).toThrow('引数が指定されていません');
      });

      test('nullを渡すとエラーをスローする', () => {
        expect(() => fizzbuzz(null)).toThrow('引数が指定されていません');
      });

      test('undefinedを渡すとエラーをスローする', () => {
        expect(() => fizzbuzz(undefined)).toThrow('引数が指定されていません');
      });
    });

    describe('数値以外の入力', () => {
      test('文字列を渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz('abc')).toThrow(TypeError);
        expect(() => fizzbuzz('abc')).toThrow('引数は数値である必要があります');
      });

      test('文字列の数字を渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz('123')).toThrow(TypeError);
      });

      test('オブジェクトを渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz({})).toThrow(TypeError);
      });

      test('配列を渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz([1, 2, 3])).toThrow(TypeError);
      });

      test('booleanを渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz(true)).toThrow(TypeError);
      });

      test('NaNを渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz(NaN)).toThrow(TypeError);
      });
    });

    describe('整数以外の数値', () => {
      test('小数を渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz(3.14)).toThrow(TypeError);
        expect(() => fizzbuzz(3.14)).toThrow('引数は整数である必要があります');
      });

      test('負の小数を渡すとTypeErrorをスローする', () => {
        expect(() => fizzbuzz(-2.5)).toThrow(TypeError);
      });
    });

    describe('範囲外の値', () => {
      test('0を渡すとRangeErrorをスローする', () => {
        expect(() => fizzbuzz(0)).toThrow(RangeError);
        expect(() => fizzbuzz(0)).toThrow('引数は正の整数である必要があります');
      });

      test('負の整数を渡すとRangeErrorをスローする', () => {
        expect(() => fizzbuzz(-1)).toThrow(RangeError);
      });

      test('負の数を渡すとRangeErrorをスローする', () => {
        expect(() => fizzbuzz(-10)).toThrow(RangeError);
      });
    });
  });
});
