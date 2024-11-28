# Tic Tac Toe Game

A simple and interactive Tic Tac Toe game built using **HTML**, **CSS**, and **JavaScript**. This game supports two players and includes a theme-switching feature, a reset option, and a winner announcement screen.

## Features
- **Two-Player Game**: Play alternately with "X" and "O".
- **Winner Detection**: Automatically detects and announces the winner.
- **Theme Switcher**: Change between different background themes.
- **Reset and New Game Options**: Restart the game at any point.
- **Responsive Design**: Works seamlessly on all screen sizes.

## Demo
![image](https://github.com/user-attachments/assets/bdafcd79-0c5e-4ddb-8163-10a22b9609aa)

## How to Play
1. Players take turns to mark a square with either "X" or "O".
2. The first player to align three marks in a row, column, or diagonal wins.
3. If all squares are filled and no player has won, the game ends in a draw.
4. Use the **RESET** button to restart the game.

## Technologies Used
- **HTML**: For structuring the game layout.
- **CSS**: For styling and themes.
- **JavaScript**: For game logic, interactivity, and theme toggling.

## Code Overview

### Key Components
1. **HTML**: 
   - A 3x3 grid layout for the game board.
   - Buttons for resetting the game and switching themes.
2. **CSS**:
   - Predefined themes (dark, light, blue, rose, etc.).
   - Styling for buttons, grid boxes, and winner announcements.
3. **JavaScript**:
   - Event listeners for box clicks and buttons.
   - Game logic to check winning patterns and handle turns.
   - Dynamic theme changes and game state management.

## Setup and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

## Winning Patterns
The game checks the following patterns for a win:
- Rows: [0, 1, 2], [3, 4, 5], [6, 7, 8]
- Columns: [0, 3, 6], [1, 4, 7], [2, 5, 8]
- Diagonals: [0, 4, 8], [2, 4, 6]

## Screenshots
### Default Theme
![image](https://github.com/user-attachments/assets/e468bb04-654d-4683-9091-2b87f89f3611)


### Dark Theme
![image](https://github.com/user-attachments/assets/681c97c8-e245-46df-b27a-405530497e4f)


### Winner Screen
![image](https://github.com/user-attachments/assets/8bd84a83-717c-44ad-a92e-c0684ba4d4d2)

## Contributing
Contributions are welcome! Feel free to:
- Open issues for bugs or feature requests.
- Fork the repository and submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For feedback or suggestions, please reach out to:
- **Name**: Saiyam Tuteja
- **Email**: saiyamtuteja@gmail.com
- **GitHub**: [github.com/yourusername](https://github.com/SaiyamTuteja)
