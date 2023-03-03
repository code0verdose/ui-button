import { Button } from "./ui/Button/Button";

function App() {
  return (
    <>
      <div className='box'>
          <Button text="Label" small background="gray" />
          <Button text="Label" small background="red" />
          <Button text="Label" small background="green" />
          <Button text="Label" small background="orange" />
          <Button text="Label" small border='green' />
          <Button text="Label" small border='red' />
          <Button text="Label" small border='gray' />
          <Button text="Label" small border='orange' />
      </div>

      <div className='box'>
          <Button text="Label" medium background="gray" />
          <Button text="Label" medium background="red" />
          <Button text="Label" medium background="green" />
          <Button text="Label" medium background="orange" />
          <Button text="Label" medium border='green' />
          <Button text="Label" medium border='red' />
          <Button text="Label" medium border='gray' />
          <Button text="Label" medium border='orange' />
      </div>

      <div className='box'>
          <Button text="Label" large background="gray" />
          <Button text="Label" large background="red" />
          <Button text="Label" large background="green" />
          <Button text="Label" large background="orange" />
          <Button text="Label" large border='green' />
          <Button text="Label" large border='red' />
          <Button text="Label" large border='gray' />
          <Button text="Label" large border='orange' />
      </div>

    </>
  );
}

export default App;
