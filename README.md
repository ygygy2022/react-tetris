**Introduction**
React Tetris is a modern implementation of the classic Tetris game. Built with the power of React, it offers a smooth and responsive gaming experience right in your browser.

**Features**
    Classic Tetris gameplay
    Responsive design - play on desktop or mobile
    Score tracking
    Multiple difficulty levels
    Pause and resume game functionality
**Installation**
    **Clone the repository:**
        git clone https://github.com/your_username/react-tetris.git
    **Navigate to the project directory:**
        cd react-tetris
    **Install the dependencies:**
        npm install
**Start the development server:**
    npm start
**The game will be available at http://localhost:3000.**
**Usage**
**1. List of Source Code Files and Their Explanations:**

- 📄 `tetris/.gitignore`: Tell github what need to be igonre when doing commit
- 📄 `tetris/README.md`: Application introduction
- 📄 `tetris/package-lock.json`: necessary library and module
- 📄 `tetris/package.json`: necessary library and module
- 📂 public/
  - 📄 `tetris/public/favicon.ico`: Game icon
  - 📄 `tetris/public/index.html`: React component
  - 📄 `tetris/public/logo192.png`: React component
  - 📄 `tetris/public/logo512.png`: React component
  - 📄 `tetris/public/manifest.json`: React component
  - 📄 `tetris/public/robots.txt`: React component
- 📂 src/
  - 📄 `tetris/src/App.css`: React component
  - 📄 `tetris/src/App.js`: Main application component that imports and renders the GamePages component.
  - 📄 `tetris/src/GlobalContext.js`: Set for global variation
  - 📄 `tetris/src/GlobalProvider.js`: Provide couple of global variation for env
  - 📂 components/
    - 📄 `tetris/src/components/Cell.js`: Give each block style
    - 📄 `tetris/src/components/Configure.js`: User interface allow user doing game setting
    - 📄 `tetris/src/components/Display.js`: When Game Over will be show in the Tetris Page
    - 📄 `tetris/src/components/ExitButton.js`: A Button component for provide a styling exiting button
    - 📄 `tetris/src/components/GamePages.js`: Main component for carraying on four main game page - Score, Configure, Tetris, Welcome
    - 📄 `tetris/src/components/ScorePage.js`: User interface show top 10 scores of the game
    - 📄 `tetris/src/components/Stage.js`: A component which provide game field
    - 📄 `tetris/src/components/StartButton.js`: A Button component for provide a styling start button
    - 📄 `tetris/src/components/Tetris.js`: Main game function page, show game stage, UI, sidebar and allow user to do control
    - 📄 `tetris/src/components/WelcomePage.js`: User interface
    - 📂 styles/
      - 📄 `tetris/src/components/styles/StyledCell.js`: Provide css style for cell component
      - 📄 `tetris/src/components/styles/StyledConfigure.js`: Provide css style for Configure component
      - 📄 `tetris/src/components/styles/StyledDisplay.js`: Provide css style for Display component
      - 📄 `tetris/src/components/styles/StyledPages.js`: Provide css style for all component
      - 📄 `tetris/src/components/styles/StyledStage.js`: Provide css style for Stage component
      - 📄 `tetris/src/components/styles/StyledStartButton.js`: Provide css style for StartButton component
      - 📄 `tetris/src/components/styles/StyledTetris.js`: Provide css style for Tetris component
  - 📂 font/
    - 📄 `tetris/src/font/square_sans_serif_7.woff`: Font style
  - 📄 `tetris/src/gameHelpers.js`: Contains game-related constants and helper functions, such as the game board dimensions.
  - 📂 hooks/
    - 📄 `tetris/src/hooks/useGameStatus.js`: Hook for managing game status, including score, rows cleared, and level.
    - 📄 `tetris/src/hooks/useInterval.js`: Hook for managing intervals, used to control game tick speed and other time-dependent features.
    - 📄 `tetris/src/hooks/usePages.js`: Hook for managing game pages and navigation.
    - 📄 `tetris/src/hooks/usePlayer.js`: Hook for managing the player's tetromino, its position, and related functions.
    - 📄 `tetris/src/hooks/usePreviewStage.js`: Hook for managing a preview of the game stage.
    - 📄 `tetris/src/hooks/useStage.js`: Hook for managing the game stage, including collisions and row clearing.
  - 📂 img/
    - 📄 `tetris/src/img/bg.png`: Game background
  - 📄 `tetris/src/index.css`: React component
  - 📄 `tetris/src/index.js`: Entry point for the React application. Renders the main App component and includes web vitals reporting.
  - 📄 `tetris/src/logo.svg`: React component
  - 📄 `tetris/src/reportWebVitals.js`: React component
  - 📄 `tetris/src/setupTests.js`: React component
  - 📄 `tetris/src/tetrominos.js`: Defines the shapes and colors of tetrominos used in the game.

**2. Number of Lines:**

- `App.js`: 14 lines
- `gameHelpers.js`: 27 lines
- `GlobalContext.js`: 7 lines
- `GlobalProvider.js`: 25 lines
- `index.js`: 17 lines
- `reportWebVitals.js`: 13 lines
- `setupTests.js`: 5 lines
- `tetrominos.js`: 67 lines
- `Cell.js`: 10 lines
- `Configure.js`: 67 lines
- `Display.js`: 8 lines
- `ExitButton.js`: 7 lines
- `GamePages.js`: 67 lines
- `ScorePage.js`: 60 lines
- `Stage.js`: 14 lines
- `StartButton.js`: 8 lines
- `Tetris.js`: 174 lines
- `WelcomePage.js`: 48 lines
- `StyledCell.js`: 11 lines
- `StyledConfigure.js`: 46 lines
- `StyledDisplay.js`: 17 lines
- `StyledPages.js`: 112 lines
- `StyledStage.js`: 15 lines
- `StyledStartButton.js`: 17 lines
- `StyledTetris.js`: 31 lines
- `useGameStatus.js`: 46 lines
- `useInterval.js`: 22 lines
- `usePages.js`: 27 lines
- `usePlayer.js`: 88 lines
- `usePreviewStage.js`: 36 lines
- `useStage.js`: 58 lines

Total lines across all source code files: 1164 lines
**3. Naming Convention:**

- Classes: PascalCase (e.g., useGameStatus)
- Objects: camelCase starting with a noun (e.g., StartButton)
- Functions: camelCase starting with a verb (e.g., dropPlayer())
- Variables: camelCase (e.g., gameMode, dropTime)

**Contributing**
Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes.
Submit a pull request.
All contributions are welcome!

**License**
React Tetris is open-source software licensed under the MIT license.
