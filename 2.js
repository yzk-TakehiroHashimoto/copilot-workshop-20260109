// JavaScript で Student クラスを作成
// プロパティ: name, yearsOld, grade
// メソッド: getInfo() - 学生情報を文字列で返す
// メソッド: isAdult() - 18歳以上かどうかを返す
class Student {
    constructor(name, yearsOld, grade) {
        this.name = name;
        this.yearsOld = yearsOld;
        this.grade = grade;
    }
    getInfo() {
        return `Name: ${this.name}, Age: ${this.yearsOld}, Grade: ${this.grade}`;
    }
    isAdult() {
        return this.yearsOld >= 18;
    }
}

// Student クラスのインスタンスを作成
const student1 = new Student("Alice", 20, "A");
const student2 = new Student("Bob", 16, "B");
// 学生情報を表示
console.log(student1.getInfo()); // Name: Alice, Age: 20, Grade: A
console.log(student2.getInfo()); // Name: Bob, Age: 16, Grade: B
// 成人かどうかを表示
console.log(student1.isAdult()); // true
console.log(student2.isAdult()); // false
