import { useState } from "react";
import Button from "../../component/buttons";
import { FibonacciStyle } from "./style";

const fibonacciRecursive = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

const fibonacciIterative = (n: number) => {
  if (n <= 1) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

const Fibonacci = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const Recursive = () => {
    setResult(fibonacciRecursive(number));
  };

  const Iterative = () => {
    setResult(fibonacciIterative(number));
  };

  return (
    <FibonacciStyle>
      <div className="box-challenges">
        <p>
          3- Escreva uma implementação recursiva e uma iterativa da sequência de
          Fibonacci
        </p>
        <label className="box-input">
          Numero:
          <input
            type="text"
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
        <div className="box-buttons">
          <button className="button-check" onClick={Recursive}>
            Recursiva
          </button>
          <button className="button-check" onClick={Iterative}>
            Interativa
          </button>
        </div>
        <div className="box-result">{result}</div>
      </div>

      <Button toGoBackProps="/anagrama" nextProps="/menorPositivo" />
    </FibonacciStyle>
  );
};

export default Fibonacci;
