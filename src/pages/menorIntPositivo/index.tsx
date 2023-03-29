import { useState } from "react";
import Button from "../../component/buttons";
import { AnagramCheckerStyle } from "./style";

const findMissingPositiveInteger = (numbers: number[]) => {
  const positiveNumbers = [...new Set(numbers.filter((num) => num > 0))];

  if (positiveNumbers.length === 0) {
    return 1;
  }

  positiveNumbers.sort((a, b) => a - b);

  let missingNumber = 1;
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] > missingNumber) {
      break;
    }
    missingNumber = positiveNumbers[i] + 1;
  }

  return missingNumber;
};

const MinorPositive = () => {
  const [inputNumbers, setInputNumbers] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputNumbers(event.target.value);
  }

  function handleButtonClick() {
    const numbers = inputNumbers
      .split(",")
      .map((numStr) => parseInt(numStr.trim(), 10))
      .filter((num) => !isNaN(num));

    setResult(findMissingPositiveInteger(numbers));
  }

  return (
    <AnagramCheckerStyle>
      <div className="box-challenges">
        <p>
          4- Escreva uma função que recebe como input um array de números
          inteiros (em qualquer ordem) e retorna o menor inteiro positivo que
          não está presente nesse array.
        </p>
        <label className="box-input">
          Valor do Arrey:
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
          />
        </label>
        <button className="button-check" onClick={handleButtonClick}>
          verificar
        </button>
        <div className="box-result">{result}</div>
      </div>

      <Button toGoBackProps="/fibonacci" nextProps="/gray" />
    </AnagramCheckerStyle>
  );
};

export default MinorPositive;
