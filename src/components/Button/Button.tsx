type ButtonType = {
  title: string;
  buttonCallback: () => void;
  isDisabled?: boolean;
};

export const Button = ({ title, buttonCallback, isDisabled }: ButtonType) => {
  return (
    <button onClick={buttonCallback} disabled={isDisabled}>
      {title}
    </button>
  );
};
