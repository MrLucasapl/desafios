import Button from "../../component/buttons";
import { FizzBuzzProps } from "../../global";
import { HomeStyle } from "./style";

const FizzBuzz = ({ number, fizz, buzz }: FizzBuzzProps): string => {
  if (number % 3 === 0 && number % 5 === 0) {
    return fizz + buzz;
  } else if (number % 3 === 0) {
    return fizz;
  } else if (number % 5 === 0) {
    return buzz;
  } else {
    return number.toString();
  }
};

const Home = () => {
  const tableData: string[] = [];
  for (let i = 1; i <= 100; i++) {
    tableData.push(FizzBuzz({ number: i, fizz: "Fizz", buzz: "Buzz" }));
  }

  return (
    <HomeStyle>
      <div className="box-challenges">
        <p>
          1- Escreva uma função que escreva os números de 1 a 100, mas trocando
          os múltiplos de 3 por “Fizz”, os múltiplos de 5 por “Buzz” e os
          múltiplos de 3 e 5 por “FizzBuzz”
        </p>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>FizzBuzz</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button toGoBackProps="/verificaPalindromo" nextProps="/anagrama" />
    </HomeStyle>
  );
};

export default Home;
