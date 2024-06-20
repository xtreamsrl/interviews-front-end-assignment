import Button from "../../UI/Button/button";
import { useNavigate } from "react-router-dom";
export const GoBackButton = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onGoBack}>
      <i className="fa-solid fa-arrow-left"></i>
    </Button>
  );
};
