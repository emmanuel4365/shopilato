const Button = ({ label, disabled, Icon, onClick, classValue }) => {
  return (
    <button className={classValue} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};
export default Button;
