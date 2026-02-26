export function Carrusel({ list }) {
  return (
    <div className="carrousel">
      {list.map((item, index) => (
        <div className="carrousel-item" key={`${item.name}-${index}`}>
          <img src={item.image} alt={item.name} />
          <div className="carrousel-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
