const quiz = [
    {
        question:"B'zのシングル曲のうち最も売り上げたのは次のうちどれ？",
        answers: [
            "愛のままにわがままに僕は君だけを傷つけない",
            "LOVE PHANTOM",
            "BLOWIN'",
            "裸足の女神"
        ],
        correct: "愛のままにわがままに僕は君だけを傷つけない",
    }, {
        question:"B'zのシングル曲のうち2005年に発売されたのは次のうちどれ？",
        answers: [
            "衝動",
            "ultra soul",
            "OCEAN",
            "イチブトゼンブ"
        ],
        correct: "OCEAN",
    }, {
        question:"2024年7月現在、B'z名義でCD音源化されている曲は次のうちどれ？",
        answers: [
            "Logic",
            "HINOTORI",
            "Dignity",
            "Get Wild"
        ],
        correct: "HINOTORI",
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

//1.何回も同じ記述が出てくるため、変数にぶっこむ
//HTMLのオブジェクトが入っているときは $ を変数名につける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 3.やりたいことをまとめておく
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    // $button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];

    // 2.上記の繰り返している内容をまとめる
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();


// 4.e: イベントのオブジェクト クリックされた要素に対して何かしたいときは、$button[0] と書かずとも以下で記述可能

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！')
    }
};

// 5.繰り返している内容をさらに書き換え
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    })
    handlerIndex++;
};
