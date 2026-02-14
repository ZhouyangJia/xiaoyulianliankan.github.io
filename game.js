const photoDir = 'photo/';
const audioDir = 'audio/';
const backgroundMusic = document.getElementById('background-music');
const startPrompt = document.getElementById('start-prompt');

// 初始游戏设置
function initGame() {
  startPrompt.addEventListener('click', () => {
    backgroundMusic.play();
    startLevel(currentLevel);
  });
}
const gameContainer = document.getElementById('game-container');

let currentLevel = 1;
let selectedCards = [];
let lockBoard = false;
let matchedCount = 0;
let totalPairs = 0;
let stepCount = 0; // Step counter variable

// 初始游戏设置
function initGame() {
  // 等待用户点击后开始播放音乐
  document.getElementById('start-prompt').addEventListener('click', () => {
    backgroundMusic.play();
    startLevel(currentLevel);
  });
}

// 开始指定关卡
function startLevel(level) {
  // Hide start prompt when game starts
  document.getElementById('start-prompt').style.display = 'none';
  
  gameContainer.innerHTML = '';
  selectedCards = [];
  matchedCount = 0;
  lockBoard = false;
  
  let gridSize;
  switch(level) {
    case 1: gridSize = 12; break;
    case 2: gridSize = 16; break;
    case 3: gridSize = 20; break;
  }
  
  const photoFiles = [
  "photo/IMG_1460571872_20260213_205137980.jpg",
  "photo/IMG_1460582814_20260213_205148354.jpg",
  "photo/IMG_1460598394_20260213_205204710.jpg",
  "photo/IMG_1460608606_20260213_205214914.jpg",
  "photo/IMG_1460619919_20260213_205226003.jpg",
  "photo/IMG_1460630037_20260213_205236361.jpg",
  "photo/IMG_1460636738_20260213_205243102.jpg",
  "photo/IMG_1460640343_20260213_205246667.jpg",
  "photo/IMG_1460652915_20260213_205258735.jpg",
  "photo/IMG_1460670236_20260213_205316032.jpg",
  "photo/IMG_1460678816_20260213_205324924.jpg",
  "photo/IMG_1460685331_20260213_205331663.jpg",
  "photo/IMG_1460696568_20260213_205342116.jpg",
  "photo/IMG_1460701077_20260213_205346633.jpg",
  "photo/IMG_1460712403_20260213_205357967.jpg",
  "photo/IMG_1460722344_20260213_205408436.jpg",
  "photo/IMG_1460731823_20260213_205417395.jpg",
  "photo/IMG_1460742242_20260213_205428606.jpg",
  "photo/IMG_1460747277_20260213_205433617.jpg",
  "photo/IMG_1460752190_20260213_205437986.jpg",
  "photo/IMG_1460765300_20260213_205451624.jpg",
  "photo/IMG_1460772501_20260213_205458569.jpg",
  "photo/IMG_1460782871_20260213_205508683.jpg",
  "photo/IMG_1460791812_20260213_205518168.jpg",
  "photo/IMG_1460798179_20260213_205524287.jpg",
  "photo/IMG_1460808895_20260213_205534947.jpg",
  "photo/IMG_1460813617_20260213_205539437.jpg",
  "photo/IMG_1460823414_20260213_205549226.jpg",
  "photo/IMG_1460827681_20260213_205554045.jpg",
  "photo/IMG_1460833043_20260213_205558863.jpg",
  "photo/IMG_1460840528_20260213_205606860.jpg",
  "photo/IMG_1460844814_20260213_205610642.jpg",
  "photo/IMG_1460853361_20260213_205619693.jpg",
  "photo/IMG_1460869567_20260213_205635107.jpg",
  "photo/IMG_1460876858_20260213_205643174.jpg",
  "photo/IMG_1460882952_20260213_205649300.jpg",
  "photo/IMG_1460889200_20260213_205655532.jpg",
  "photo/IMG_1460896011_20260213_205701847.jpg",
  "photo/IMG_1460899892_20260213_205706216.jpg",
  "photo/IMG_1460909656_20260213_205715972.jpg",
  "photo/IMG_1460914607_20260213_205720179.jpg",
  "photo/IMG_1460925044_20260213_205731368.jpg",
  "photo/IMG_1460930917_20260213_205736761.jpg",
  "photo/IMG_1460935728_20260213_205742060.jpg",
  "photo/IMG_1460945656_20260213_205751716.jpg",
  "photo/IMG_1460952791_20260213_205758859.jpg",
  "photo/IMG_1460961651_20260213_205807471.jpg",
  "photo/IMG_1460969353_20260213_205814933.jpg",
  "photo/IMG_1460974059_20260213_205819639.jpg",
  "photo/IMG_1460985631_20260213_205831427.jpg",
  "photo/IMG_1460993015_20260213_205838571.jpg",
  "photo/IMG_1460997927_20260213_205843771.jpg",
  "photo/IMG_1461007587_20260213_205853695.jpg",
  "photo/IMG_1461012535_20260213_205858859.jpg",
  "photo/IMG_1461069887_20260213_205956195.jpg",
  "photo/IMG_1461077956_20260213_210003544.jpg",
  "photo/IMG_1461084840_20260213_210010932.jpg",
  "photo/IMG_1461097108_20260213_210023176.jpg",
  "photo/IMG_1461117837_20260213_210043409.jpg",
  "photo/IMG_1461124920_20260213_210050724.jpg",
  "photo/IMG_1461131213_20260213_210056785.jpg",
  "photo/IMG_1461136057_20260213_210102117.jpg",
  "photo/IMG_1461143438_20260213_210109010.jpg",
  "photo/IMG_1461147810_20260213_210113918.jpg",
  "photo/IMG_1461172549_20260213_210138393.jpg",
  "photo/IMG_1461191936_20260213_210157788.jpg",
  "photo/IMG_1461201494_20260213_210207818.jpg",
  "photo/IMG_1461218269_20260213_210223809.jpg",
  "photo/IMG_1461225326_20260213_210231154.jpg",
  "photo/IMG_1461260918_20260213_210307242.jpg",
  "photo/IMG_1461297983_20260213_210343779.jpg",
  "photo/IMG_1461327450_20260213_210413766.jpg",
  "photo/IMG_1461353671_20260213_210439771.jpg",
  "photo/IMG_1461364880_20260213_210450956.jpg",
  "photo/IMG_1461370633_20260213_210456469.jpg",
  "photo/IMG_1461386749_20260213_210512289.jpg",
  "photo/IMG_1461401431_20260213_210527243.jpg",
  "photo/IMG_1461418641_20260213_210544717.jpg",
  "photo/IMG_1461435203_20260213_210601055.jpg",
  "photo/IMG_1461443688_20260213_210610036.jpg",
  "photo/IMG_1461449409_20260213_210615517.jpg",
  "photo/IMG_1461456693_20260213_210622505.jpg",
  "photo/IMG_1461465211_20260213_210631527.jpg",
  "photo/IMG_1461479559_20260213_210645659.jpg",
  "photo/IMG_1461484403_20260213_210650223.jpg",
  "photo/IMG_1461491194_20260213_210656742.jpg"
];
  const randomPhotos = shuffle(photoFiles).slice(0, gridSize/2);
  const cards = [...randomPhotos, ...randomPhotos];
  const shuffledCards = shuffle(cards);
  
  // 创建卡片元素
  shuffledCards.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.photo = photo;
    card.dataset.index = index;
card.innerHTML = `
      <div class="card-inner">
        <div class="card-front" style="background-image: url('background.jpg');"></div>
        <div class="card-back" style="background-image: url('${photo}');"></div>
      </div>
    `;
    card.addEventListener('click', flipCard);
    gameContainer.appendChild(card);
  });
  
  totalPairs = gridSize/2;
}

// 翻转卡片
function flipCard() {
  if (lockBoard || this.classList.contains('flipped')) return;
  
  // Increment step counter and update display
  stepCount++;
  document.getElementById('step-counter').textContent = `Steps: ${stepCount}`;
  
  this.classList.add('flipped');
  selectedCards.push(this);
  
  if (selectedCards.length === 2) {
    lockBoard = true;
    checkMatch();
  }
}

// 检查匹配
function checkMatch() {
  const [card1, card2] = selectedCards;
  
  if (card1.dataset.photo === card2.dataset.photo) {
    matchedCount++;
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
    playRandomAudio();
    animateMatchedCards();
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      selectedCards = [];
      lockBoard = false;
    }, 1000);
  }
}

// 播放随机音频
function playRandomAudio() {
  const audio = document.createElement('audio');
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  audio.src = `audio/${randomIndex}.m4a`;
  audio.play();
}

  // 动画效果
function animateMatchedCards() {
  selectedCards.forEach(card => {
    card.classList.add('match-animation');
  });
  
  setTimeout(() => {
    selectedCards.forEach(card => {
      card.style.visibility = 'hidden';
    });
    selectedCards = [];
    lockBoard = false;
    checkLevelComplete();
  }, 1000);
}

// 检查关卡是否完成
function checkLevelComplete() {
  if (matchedCount === totalPairs) {
    if (currentLevel < 1) {
      currentLevel++;
      setTimeout(() => {
        startLevel(currentLevel);
      }, 1500);
    } else {
      endGame();
    }
  }
}

// 结束游戏
function endGame() {
  // Show start prompt again when game ends
  document.getElementById('start-prompt').style.display = 'block';
  
  const reward = document.createElement('img');
  reward.src = 'reward.jpg';
  reward.style.position = 'fixed';
  reward.style.top = '0';
  reward.style.left = '0';
  reward.style.width = '100%';
  reward.style.height = '100%';
  reward.style.zIndex = '999';
  reward.style.objectFit = 'cover';
  document.body.appendChild(reward);
}

// 辅助函数：洗牌算法
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// 启动游戏
document.addEventListener('DOMContentLoaded', initGame);
