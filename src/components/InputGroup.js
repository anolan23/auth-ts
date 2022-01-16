function InputGroup({ htmlFor, labelText, children }) {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor} className="input-group__label">
        {labelText}
      </label>
      {children}
    </div>
  );
}

export default InputGroup;
