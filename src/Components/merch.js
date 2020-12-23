import OGTee from "../Reflex-tee.jpg";
import OGhoodie from "../Reflex-hoodie.jpg";

const Merch = () => {
  return (
    <>
      <h2>Checkout our merch! New merch coming soon! </h2>
      <div id="merchListDiv">
        <ul id="merchList">
          <li>
            <a href="https://teespring.com/stores/reflex-shop-2" target="_blank">
              {" "}
              <img className="merchPhoto" src={OGTee} alt="reflex billcam logo tee-shirt" />
            </a>
          </li>
          <li>
            <a href="https://teespring.com/stores/reflex-shop-2" target="_blank">
              <img className="merchPhoto" src={OGhoodie} alt="reflex billcam logo hooded sweatshirt" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Merch;
