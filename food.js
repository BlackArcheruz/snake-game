import {onSnake,expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
    const UIfood = document.createElement('div');
    UIfood.style.gridRowStart = food.y;
    UIfood.style.gridColumnStart = food.x;
    UIfood.classList.add('food');
    gameBoard.appendChild(UIfood);
}

function getRandomFoodPosition(){
    let newFoodPosition;

    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    };
    return newFoodPosition;
}
