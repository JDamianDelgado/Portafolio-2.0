export function Carrusel({ list }) {
  return (
    <div className="carrousel">
      {list.map((list, index) => (
        <div className="carrousel-item" key={index + list.name}>
          <img src={list.image} alt={list.name} />
          <div className="carrousel-name">{list.name}</div>
        </div>
      ))}
    </div>
  );
}
