import { useEffect } from "react";
// This custom hook is used to add an event listener to the window object.
const usePages = (gamePage, setGamePage) => {
  // This useEffect is used to add an event listener to the window object
  useEffect(() => {
    // This function will be called when the user presses the escape key
    const esc = ({ keyCode }) => {
      // If the user presses the escape key and the game page is not 0 (Welcome Page)
      if (keyCode === 27 && gamePage !== 0) {
        const confirmReturn = window.confirm(
          "Do you want to return to the main page?"
        );
        if (confirmReturn) {
          setGamePage(0);
        }
      }
    };
    // This adds the event listener to the window object
    window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
    };
  }, [gamePage, setGamePage]);
};

export default usePages;
