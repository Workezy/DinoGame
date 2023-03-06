let character = document.querySelector(".character");
let block = document.querySelector(".block_texture");
let start = document.querySelector('.start');
let lose = document.querySelector('.lose');

document.addEventListener("click", jump);
start.addEventListener('click', startGame)

function jump() {
  if (character.classList.contains("animate") == true) {
    return;
  } else {
    character.classList.add("animate");
    setTimeout(removeJump, 400); // 400ms = lenght animation
  }
}

function removeJump() {
  character.classList.remove("animate");
}

function checkDead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 515 && blockLeft > 500 && characterTop >= 130) {
    start.textContent = 'Start'
    block.classList.remove('block')
    lose.style.display = 'block'
  }
}

function startGame() {
    if (block.classList.contains('block') == false && start.textContent == 'Start') {
        start.textContent = 'Stop';
        block.classList.add('block');
        lose.style.display = 'none'
    } else {
        stopGame();
    }
}
function stopGame() {
    if (block.classList.contains('block') == true && start.textContent == 'Stop') {
        start.textContent = 'Start';
        block.classList.remove('block')
    } else {
        startGame();
    }
}
setInterval(checkDead, 10);
