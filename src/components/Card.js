function Card(props) {
  const { item, id, handleClick } = props;
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'card' + itemClass} onClick={() => handleClick(id)}>
      {/* <img src={item.img} alt="" /> */}
      <span
        style={{
          color: item.color,
        }}
        className="material-icons"
      >
        {item.icon}
      </span>
    </div>
  );
}

export default Card;
