import { useState } from "react";
import Button from "../../component/buttons";
import { MajorPrefixStyle } from "./style";

const getPrefix = (array: string[]) => {
  if (array.length === 0) {
    return "";
  }

  const menorString = array.reduce(
    (acc, str) => (str.length < acc.length ? str : acc),
    array[0]
  );

  for (let i = 0; i < menorString.length; i++) {
    const char = menorString.charAt(i);

    for (const str of array) {
      if (str.charAt(i) !== char) {
        return menorString.slice(0, i);
      }
    }
  }

  return menorString;
};

const MajorPrefix = () => {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputString(event.target.value);
  }

  function handleButtonClick() {
    let arrayString = inputString.split(",");
    arrayString = arrayString.map((str) => str.trim());

    setResult(getPrefix(arrayString));
  }

  return (
    <MajorPrefixStyle>
      <div className="box-challenges">
        <label className="box-input">
          Valor do Arrey:
          <input
            type="text"
            placeholder="prefixoamor, prefixocasa, prefixopapel, prefixopessoa"
            value={inputString}
            onChange={handleInputChange}
          />
        </label>
        <button className="button-check" onClick={handleButtonClick}>
          verificar
        </button>
        <div className="box-result">{result}</div>
      </div>

      <Button toGoBackProps="/gray" nextProps="/contaPassos" />
    </MajorPrefixStyle>
  );
};

export default MajorPrefix;
