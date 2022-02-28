import BoxImg from './BoxImg';
import '../../../style/weatherStuff/weatherStuff.css';

const Box = ({ img }) => {
    return (
        <>
            <div className="boxBackground">
                <BoxImg img={img}></BoxImg>
            </div>
        </>
    );
};
export default Box;
