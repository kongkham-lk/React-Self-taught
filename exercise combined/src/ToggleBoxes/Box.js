export default function Box({ isActive = false, toggle }) {
  return (
    <button
      onClick={toggle}
      style={{
        margin: "10px",
        width: "50px",
        height: "50px",
        backgroundColor: isActive ? "red" : "black"
      }}
    ></button>
  );
}
