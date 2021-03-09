function game() {
  const display = document.querySelector('[data-display]');
  const rock = document.querySelector('[data-button=rock]');
  const paper = document.querySelector('[data-button=paper]');
  const scissors = document.querySelector('[data-button=scissors]');
  const computerScore = document.querySelector('[data-display-score=computer]');
  const playerScore = document.querySelector('[data-display-score=player]');

  rock.addEventListener('click', play);
  paper.addEventListener('click', play);
  scissors.addEventListener('click', play);

  function play(event) {
    const computersOptions = ['rock', 'paper', 'scissors'];
    const generateRandom = Math.floor(Math.random() * computersOptions.length);
    const computerPick = computersOptions[generateRandom];

    const buttonCliked = event.target;
    const value = buttonCliked.dataset.button;

    console.log(computerPick);
    console.log(value);

    switch (value) {
      case 'scissors':
        if (computerPick === 'rock') {
          display.innerText = `Player picked: Scissors
                                Computer picked: Rock
                                Result: Computer wins!`;
          computerScore.innerText++;
        } else if (computerPick === 'paper') {
          display.innerText = `Player picked: Scissors
                                Computer picked: Paper
                                Result: User wins!`;
          playerScore.innerText++;
        } else {
          display.innerText = `Player picked: Scissors
                                Computer picked: Scissors
                                Result: It's a draw!`;
        }
        break;
      case 'rock':
        if (computerPick === 'scissors') {
          display.innerText = `Player picked: Rock
                                Computer picked: Scissors    
                                Result: User wins!`;
          playerScore.innerText++;
        } else if (computerPick === 'paper') {
          display.innerText = `Player picked: Rock
                                Computer picked: Paper
                                Result: Computer wins!`;
          computerScore.innerText++;
        } else {
          display.innerText = `Player picked: Rock
                                Computer picked: Rock
                                Result: It's a draw!`;
        }
        break;
      case 'paper':
        if (computerPick === 'scissors') {
          display.innerText = `Player picked: Paper
                                Computer picked: Scissors
                                Result: Computer wins!`;
          computerScore.innerText++;
        } else if (computerPick === 'rock') {
          display.innerText = `Player picked: Paper
                                Computer picked: Rock
                                Result: User wins!`;
          playerScore.innerText++;
        } else {
          display.innerText = `Player picked: Paper
                                Computer picked: Paper
                                Result: It's a draw!`;
        }
        break;
    }
  }
}
game();
const input = document.querySelector('input');
input.addEventListener('input', (a) => {
  console.log(a.target.value);
});
