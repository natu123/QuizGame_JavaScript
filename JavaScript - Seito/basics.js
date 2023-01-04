// 変数
let hi = 'Hello World!';
hi = 'Hello World2!!';

// 定数
const bigHi = 'HELLO.'

// 配列
let countdown = ['Three', 'Two', 'One', 'Zero']

// ループ文
// let index = 0;
// while(index < countdown.length) {
//     // 繰り返したい命令
//     console.log(countdown[index]);
//     index++;
// }

// if / else
// if(countdown.length > 5){
//     console.log('Hi.');
// } else {
//     console.log('no Hi.');
// }

// 関数
const test = (arg) => {    // アロー関数
// const test = function() {}
    // ここに実行したい命令を書く。
    if(countdown.length > arg){
        console.log('Hi.');
    } else {
        console.log('no Hi.');
    }
};

// オブジェクト
const hi2 = {
    color: 'red',   // property, key
    size: 'large',
    length: 'long',
    sayHi: () => {
        console.log('Hello everyone!');
    }
}

// console.log(hi2);
// console.log(hi2.size);
// console.log(hi2.sayHi());

// console.log(window.innerHeight);
// window.alert('Hello!')

// console.log(document.getElementsByTagName('button')[1]);
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('Clicked!');
})

