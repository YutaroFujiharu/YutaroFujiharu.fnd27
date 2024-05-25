const quiz = [
  {
    question: 'Q1. 次のうち再代入することができない変数はどれ？',
    choices: ['ret', 'const', 'var', 'let'],
    correct: ['const'],
  },
  {
    question: 'Q2. 関数名の書き方として相応しいものは？',
    choices: ['AddTen', 'add_ten', 'Addten', 'addTen'],
    correct: ['addTen'],
  },
  {
    question: 'Q3. typeofで表示されるデータ型がnumber型ではないものは？',
    choices: ['30', "'30'", 'NaN', '12.55'],
    correct: ["'30'"],
  },
  {
    question: 'Q4. 四択クイズ、特に苦労したところは？',
    choices: [
      'HTMLの配置',
      'CSSのセレクタ',
      '正誤判定の処理',
      'イベントリスナーの追加',
    ],
    correct: [
      'HTMLの配置',
      'CSSのセレクタ',
      '正誤判定の処理',
      'イベントリスナーの追加',
    ],
  },
  {
    question: 'Q5. 私の名前は？',
    choices: [
      'Yutaro Fujiharu',
      'ふじはる ゆうたろう',
      'ﾌｼﾞﾊﾙ ﾕｳﾀﾛｳ',
      '藤春 佑太朗',
    ],
    correct: [
      'Yutaro Fujiharu',
      'ふじはる ゆうたろう',
      'ﾌｼﾞﾊﾙ ﾕｳﾀﾛｳ',
      '藤春 佑太朗',
    ],
  },
  {
    question: 'Q6. 趣味は？',
    choices: [
      'バスケットボール',
      'アウトドア',
      '音楽（聴くのも 弾くのも）',
      'グルメ 旅行',
    ],
    correct: [
      'バスケットボール',
      'アウトドア',
      '音楽（聴くのも 弾くのも）',
      'グルメ 旅行',
    ],
  },
  {
    question: 'Q7. プログラミングをやってみて',
    choices: [
      'テストパスした時の達成感',
      'ペアプロめっちゃ楽しい♪',
      'リファクタリングめっちゃ大事！',
      '時間が経つのが早すぎる 笑',
    ],
    correct: [
      'テストパスした時の達成感',
      'ペアプロめっちゃ楽しい♪',
      'リファクタリングめっちゃ大事！',
      '時間が経つのが早すぎる 笑',
    ],
  },
  {
    question: 'Q8. 二十日間 基礎コースを受講して',
    choices: [
      '上司の方々へ',
      '職場の仲間へ',
      'インストラクターの皆さんへ',
      'FND27の皆さんへ',
    ],
    correct: [
      '上司の方々へ',
      '職場の仲間へ',
      'インストラクターの皆さんへ',
      'FND27の皆さんへ',
    ],
  },
];

const quizLength = quiz.length; // クイズの問題数
let quizIndex = 0; //現在のクイズのインデックス
let score = 0; // 正解数を初期化

const button = document.getElementsByTagName('button'); //全てのボタン要素を取得
const buttonLength = button.length; // ボタンの数を取得

const setupQuiz = () => {
  document.getElementById('question').textContent = quiz[quizIndex].question; // 現在の問題を表示
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex]; // ボタンに選択肢を設定
    buttonIndex++;
  }
};

setupQuiz(); // 最初の問題を呼び出す

const feedbackElement = document.getElementById('feedback'); // フィードバック表示用の要素を取得

const clickHandler = (e) => {
  const selectedChoice = e.target.textContent; // 選択された選択肢

  if (quiz[quizIndex].correct.includes(selectedChoice)) {
    // 選択肢が正解リストに含まれるか判定
    feedbackElement.textContent = '〇'; // 正解の表示
    feedbackElement.classList.add('correct'); // 正解用のスタイルを適用
    score++; // スコアを増やす
  } else {
    feedbackElement.textContent = '×'; // 不正解の表示
    feedbackElement.classList.add('incorrect'); // 不正解用のスタイルを適用
  }

  // 一定時間後にフィードバックを消す
  setTimeout(() => {
    feedbackElement.textContent = ''; // フィードバックを空にする
    feedbackElement.classList.remove('correct', 'incorrect'); // スタイルを削除
  }, 2000); // 2秒後にフィードバックを消す

  quizIndex++; // 次の問題へ

  if (quizIndex < quizLength) {
    setupQuiz(); // 次の問題を呼び出す
  } else {
    window.alert(
      '二十日間本当にありがとうございました。FND27最高!!!' // クイズ終了時のメッセージ
    );
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e); // クリック時にイベントハンドラを呼び出す
  });
  handlerIndex++;
}
