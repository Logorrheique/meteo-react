import '../../style/header/header.css';
const Header = () => {
    return (
        <div className="header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#064663"
                    fill-opacity="1"
                    d="M0,224L24,213.3C48,203,96,181,144,170.7C192,160,240,160,288,165.3C336,171,384,181,432,170.7C480,160,528,128,576,122.7C624,117,672,139,720,149.3C768,160,816,160,864,160C912,160,960,160,1008,176C1056,192,1104,224,1152,229.3C1200,235,1248,213,1296,208C1344,203,1392,213,1416,218.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                ></path>
            </svg>

            <div className="tuto">
                <p>
                    Hello there! <br></br>Here is my weather application, to start using it you can
                    simply enter city names in the corresponding field. After that, an algorithm
                    will describe how you should dress taking into account the destinations you
                    entered.
                </p>
                <a>Meteo-React</a>
            </div>
        </div>
    );
};
export default Header;
