import BoxImg from './BoxImg';
import plus from './../../../img/plus.svg';
const BoxBonus = ({ imgB1, imgB2, imgB3, imgB4 }) => {
    return (
        <div className="boxBonus">
            <img src={plus}></img>
            <div className="bonusBackground">
                <div className="lightBackground">
                    <BoxImg img={imgB1}></BoxImg>
                    <BoxImg img={imgB2}></BoxImg>
                    <BoxImg img={imgB3}></BoxImg>
                    <BoxImg img={imgB4}></BoxImg>
                </div>
            </div>
        </div>
    );
};
export default BoxBonus;
