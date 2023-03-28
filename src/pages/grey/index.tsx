import { useState } from "react";
import Button from "../../component/buttons";
import { GrayStyle } from "./style";

const grayCode = (n: number): string[] => {
  if (n === 1) {
    return ["0", "1"];
  }

  const prevGrayCode = grayCode(n - 1);

  const grayCodeArr = [];
  for (let i = 0; i < prevGrayCode.length; i++) {
    grayCodeArr.push(`0${prevGrayCode[i]}`);
  }
  for (let i = prevGrayCode.length - 1; i >= 0; i--) {
    grayCodeArr.push(`1${prevGrayCode[i]}`);
  }
  return grayCodeArr;
};

const Gray = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<string[]>();

  function handleButtonClick() {
    setResult(grayCode(number));
  }

  return (
    <GrayStyle>
      <div className="box-challenges">
        <label className="box-input">
          Digite um Número:
          <input
            type="text"
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
        <button className="button-check" onClick={handleButtonClick}>
          verificar
        </button>
        <div className="box-result">
          {result?.map((res, index) => (
            <p key={index}>{res}</p>
          ))}
        </div>
      </div>

      <Button toGoBackProps="/menorPositivo" nextProps="/maiorPrefixo" />
    </GrayStyle>
  );
};

export default Gray;
