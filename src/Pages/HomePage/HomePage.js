import HomeBanner from '../../Component/HomeBanner/HomeBanner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import HowToWinMoney from '../../Component/HowToWinMoney/HowToWinMoney';

function HomePage() {
  var settings = {
    dots: false,
    slidesToShow: 5,
    className: "center",
    autoplay: true,
    centerMode: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
        <HomeBanner />
        <Slider {...settings}>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-01.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>Ludo Classic <span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="live"></span> Live</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-02.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>Ludo Quick <span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="live"></span> Live</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-03.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>Ludo Popular <span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="live"></span> Live</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-02.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>RK Ludo Classic <span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="live"></span> Live</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-01.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>RK Ludo OneG (1G)<span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="red"></span> Coming Soon</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
            <div className="HproductCard">
              <div className="HproductCardImg">
                <Image src='/image/Game-01.png' />
              </div>
              <div className="HproductCardInfo">
                <h6>Ludo Classic <span><Image src="/image/BettleIcon.png" /></span></h6>
                <p><span className="live"></span> Live</p>
                <Link className="btn btn-green btn-icon" to="/login">
                    Play Now <span><Icon icon="material-symbols:arrow-right-alt-rounded" /></span>
                </Link>
              </div>
            </div>
        </Slider>
        <HowToWinMoney />
    </>
  );
}

export default HomePage;
