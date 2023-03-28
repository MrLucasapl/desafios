import { useState } from "react";
import Button from "../../component/buttons";
import { CheckPalindromeStyle } from "./style";

class ListNode {
  val: number | string;
  next: ListNode | null;

  constructor(val: number | string = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const checkPalindrome = (root: ListNode | null): boolean => {
  if (!root) {
    return true;
  }

  const values: (number | string)[] = [];
  let current: ListNode | null = root;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < Math.floor(values.length / 2); i++) {
    if (values[i] !== values[values.length - i - 1]) {
      return false;
    }
  }

  return true;
};

const CheckPalindrome = () => {
  const [linkedlist, setLinkedList] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedList(event.target.value);
  };

  const handleButtonClick = () => {
    let valores = linkedlist.split(",");
    valores = valores.map((str) => str.trim());

    const nodes = valores.map(
      (valor) => new ListNode(parseInt(valor, 10) || valor)
    );
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    const root = nodes[0];

    const isPalindromo = checkPalindrome(root);
    setResult(isPalindromo);
  };

  return (
    <CheckPalindromeStyle>
      <div className="box-challenges">
        <label className="box-input">
          Lista ligada:
          <input
            type="text"
            placeholder="1,2,3,2,1    ou    a,b,b,a"
            onChange={handleInputChange}
          />
        </label>
        <div className="box-buttons">
          <button className="button-check" onClick={handleButtonClick}>
            Verificar
          </button>
        </div>
        <div className="box-result">
          {result !== null && (
            <p>{result ? "É palíndromo" : "Não é palíndromo"}</p>
          )}
        </div>
      </div>

      <Button toGoBackProps="/contaPassos" nextProps="/" />
    </CheckPalindromeStyle>
  );
};

export default CheckPalindrome;
