import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../global";
import { ButtonStyled } from "./styled";

const Button = ({ toGoBackProps, nextProps }: ButtonProps) => {
  const navigate = useNavigate();

  const next = () => {
    navigate(nextProps);
  };

  const toGoBack = () => {
    navigate(toGoBackProps);
  };

  return (
    <ButtonStyled>
      <div className="box-button">
        <button onClick={toGoBack}>Voltar</button>
        <button onClick={next}>Proximo</button>
      </div>
    </ButtonStyled>
  );
};

export default Button;
