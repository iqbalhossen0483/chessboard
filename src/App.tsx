import { useState } from "react";
import Services from "./services/services";
import Button from "./utilitize/Button";

function App() {
  const [positions, setPosition] = useState<Positions | null>(null);
  const [knight, setKnight] = useState<number>(-1);

  //created an array for render 64 button;
  const spanArray: number[] = [];
  const services = new Services();
  for (let index = 1; index <= 64; index++) {
    spanArray.push(index);
  } //till;

  //handle Knight moves;
  function handleMove(positions: string, index: number): void {
    setKnight(index);
    setPosition(null);
    const target = parseInt(positions);
    const row = services.findRow(target);
    const col = services.findCol(target);
    const possiblePosition = services.getPossiblePosition(row, col);
    const possibleValues = services.getPossibleValues(possiblePosition);
    setPosition(possibleValues);
  }

  return (
    <div className='board'>
      {spanArray.map((item, index) => (
        <Button
          classes={`${knight === index && "active"}`}
          key={item}
          positions={positions}
          onClick={handleMove}
          text={item.toString()}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
