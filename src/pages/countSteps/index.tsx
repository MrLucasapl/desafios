import { useState } from "react";
import Button from "../../component/buttons";
import { CountStepsStyle } from "./style";

const countSteps = (n: number) => {
  let passos = 0;
  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
    }
    passos++;
  }
  return passos;
};

const CountSteps = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>();

  const handleClick = () => {
    setResult(countSteps(number));
  };

  return (
    <CountStepsStyle>
      <div className="box-challenges">
        <p>
          7- Escreva uma função que receba um número inteiro e retorne quantos
          passos são necessários para reduzi-lo a 0, onde um passo é dividir o
          número por dois quando o número for par e subtrair 1 quando o número
          for ímpar.
        </p>
        <label className="box-input">
          Numero:
          <input
            type="text"
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
        <div className="box-buttons">
          <button className="button-check" onClick={handleClick}>
            Verificar
          </button>
        </div>
        <div className="box-result">{result}</div>
      </div>

      <Button toGoBackProps="/maiorPrefixo" nextProps="/verificaPalindromo" />
    </CountStepsStyle>
  );
};

export default CountSteps;
