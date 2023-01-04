const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン', 
      'プレイステーション2', 
      'ニンテンドー DS',
      'ニンテンドー Switch'
    ],
    correct: 'ニンテンドー DS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2', 
      'スーパーマリオブラザーズ3', 
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'    
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール', 
      'クラウド', 
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文・選択肢を定義する。
const SetupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
SetupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    SetupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解率は' + score + '/' + quizLength + 'です！');
  }
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}