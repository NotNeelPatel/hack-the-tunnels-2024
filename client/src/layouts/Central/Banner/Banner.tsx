import "./Banner.style.scss";

function Banner() {
  return (
    <div className="Banner">
      <img src="/banner.png" alt="logo" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title"><strong>Carleton Central 2: Electric Boogaloo</strong></div>
    </div>
  );
}

export default Banner;
