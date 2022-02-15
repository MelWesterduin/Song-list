const Selector = ({ selector, onChange }) => {
  return (
    <select className="select" name={selector.name} 
        onChange={(e) => {
        onChange(e.target.value)}}>
      <option value="" >{selector.placeholder}</option>
      {selector.items.map((item) => (
        <option
          key={item.id}
          value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
