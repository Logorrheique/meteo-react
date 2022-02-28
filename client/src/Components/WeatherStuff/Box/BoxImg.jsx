import '../../../style/weatherStuff/weatherStuff.css';
const BoxImg = ({ img }) => {
    return (
        <>
            <div className="boxImg">{<img src={img} alt=""></img>}</div>
        </>
    );
};
export default BoxImg;
