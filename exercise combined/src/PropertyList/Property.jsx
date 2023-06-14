export default function Property({ _id, name, rating, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>&#36;{price} a night</h3>
      <h4>{rating}&#11088;</h4>
    </div>
  );
}

// const properties = [
//   { _id: 129031, name: "Dessert Yurt", rating: 4.9, price: 150 },
//   { _id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { _id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { _id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { _id: 129051, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { _id: 123051, name: "Gold Miner Campground", rating: 4.69, price: 96 }
// ];
