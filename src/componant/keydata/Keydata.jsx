import "./keydata.css";
import "../../style/index.css";

export default function Keydata({ img, value, init, text }) {
  return (
    <div className="keydata">
      <div className="flex card">
        <img src={img} alt={text} />
        <div className="text_card">
          <h2>
            {value}
            {init}
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
