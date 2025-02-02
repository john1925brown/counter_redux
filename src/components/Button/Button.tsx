type ButtonType = {
  title: string;
  buttonCallback: () => void;
};

export const Button = ({ title, buttonCallback }: ButtonType) => {
  return <button onClick={buttonCallback}>{title}</button>;
};
