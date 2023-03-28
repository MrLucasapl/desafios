import { useState } from "react";
import Button from "../../component/buttons";
import { AnagramCheckerStyle } from "./style";

const isAnagram = (string1: string, string2: string): boolean => {
  const cleanstring1 = string1.replace(/\s/g, "").toLowerCase();
  const cleanstring2 = string2.replace(/\s/g, "").toLowerCase();

  if (cleanstring1.length !== cleanstring2.length) {
    return false;
  }

  const charCount1: Record<string, number> = {};
  const charCount2: Record<string, number> = {};

  for (const char of cleanstring1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of cleanstring2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

const AnagramChecker = () => {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState(false);

  const handleCheck = () => {
    setResult(isAnagram(string1, string2));
  };

  return (
    <AnagramCheckerStyle>
      <div className="box-challenges">
        <label className="box-input">
          String 1:
          <input
            type="text"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
          />
        </label>
        <label className="box-input">
          String 2:
          <input
            type="text"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
          />
        </label>
        <button className="button-check" onClick={handleCheck}>verificar</button>
        <div className="box-result">
          {result && <p>As duas strings são anagramas O(n)!</p>}
          {!result && <p>As duas strings não são anagramas.</p>}
        </div>
      </div>

      <Button toGoBackProps='/' nextProps='/fibonacci'/>
    </AnagramCheckerStyle>
  );
};

export default AnagramChecker;
