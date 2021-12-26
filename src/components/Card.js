function Card(props) {
  const { item, id, handleClick } = props;
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div
      className={
        'bg-white flex justify-center items-center rounded h-[55px] w-[55px] card' +
        itemClass
      }
      onClick={() => handleClick(id)}
    >
      {/* <img src={item.img} alt="" /> */}
      <span
        style={{
          color: item.color,
        }}
        className="material-icons max-w-[80%] max-h-[80%]"
      >
        {item.icon}
      </span>
    </div>
  );
}

export default Card;
