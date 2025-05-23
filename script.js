const container = document.getElementById('gameContainer'); 
const player = document.getElementById('player'); 
const gridSize = 12; // number of rows and columns 
const cellSize = 50; // size of each cell in px (since container is 600px) 
// Initialize player position (grid coordinates) 
let playerPos = { row: 0, col: 0 }; 
// Function to update player's pixel position 
function updatePlayerPosition() { 
const top = playerPos.row * cellSize; 
const left = playerPos.col * cellSize; 
player.style.top = `${top}px`; 
player.style.left = `${left}px`; 
} 
// Place the player initially 
updatePlayerPosition(); 
// Handle keyboard input for movement 
window.addEventListener('keydown', (e) => { 
switch (e.key) { 
    case 'ArrowUp': 
      if (playerPos.row > 0) { 
        playerPos.row--; 
      } 
      break; 
    case 'ArrowDown': 
      if (playerPos.row < gridSize - 1) { 
        playerPos.row++; 
      } 
      break; 
    case 'ArrowLeft': 
      if (playerPos.col > 0) { 
        playerPos.col--; 
      } 
      break; 
    case 'ArrowRight': 
      if (playerPos.col < gridSize - 1) { 
        playerPos.col++; 
      } 
      break; 
  } 
  updatePlayerPosition(); 
});