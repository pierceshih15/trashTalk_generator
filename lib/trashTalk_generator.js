// Define the variables that function needed
const jobs = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
};

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
};

const phrase = ['很簡單', '很容易', '很快', '很正常'];

// 隨機取出元素
function getRandomElement(array) {
  // Math.floor() & Math.random() 語法隨機取出 array 的 index
  let ranNum = Math.floor(Math.random() * array.length);
  return array[ranNum];
}

// 隨機產出幹話
function generateTrashTalk(job) {
  return job ?
    `身為一位${jobs[job]}，${getRandomElement(task[job])}，${getRandomElement(phrase)}吧` :
    `請至少選擇一個職業呦 !!!`
}

module.exports = generateTrashTalk;