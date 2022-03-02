import BoxImg from './BoxImg';
import plus from './../../../img/plus.svg';
import Title from '../../Title';
import './../../../style/weatherStuff/weatherStuff.css';
const BoxBonus = ({ imgB1, imgB2, imgB3, imgB4 }) => {
    return (
        <>
            <div className="boxBonus animateBorder">
                <Title content={'Items Bonus'}></Title>

                <div className="bonusBackground">
                    <div className="lightBackground">
                        <BoxImg img={imgB1}></BoxImg>
                        <BoxImg img={imgB2}></BoxImg>
                        <BoxImg img={imgB3}></BoxImg>
                        <BoxImg img={imgB4}></BoxImg>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BoxBonus;
