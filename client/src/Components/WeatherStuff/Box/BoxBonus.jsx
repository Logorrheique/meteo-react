import BoxImg from './BoxImg';
import plus from './../../../img/plus.svg';
const BoxBonus = ({ img1, img2, img3, img4 }) => {
    return (
        <div className="boxBonus">
            <img src={plus}></img>
            <div className="bonusBackground">
                <div className="lightBackground">
                    <BoxImg></BoxImg>
                    <BoxImg></BoxImg>
                    <BoxImg></BoxImg>
                    <BoxImg></BoxImg>
                </div>
            </div>
        </div>
    );
};
export default BoxBonus;
