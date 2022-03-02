import '../../../style/onOff.css';
import ContextCard from '../../ContextCard';
import notaccept from '../../../img/onOff_Icon/notaccept.svg';
import React, { useContext } from 'react';
const OnOff = ({ city }) => {
    const { card, setCard } = useContext(ContextCard);
    const handleCard = () => setCard(card.filter(e => e.name != city));
    return (
        <>
            <div className="onOff">
                <img src={notaccept} alt="" onClick={handleCard}></img>
            </div>
        </>
    );
};
export default OnOff;
