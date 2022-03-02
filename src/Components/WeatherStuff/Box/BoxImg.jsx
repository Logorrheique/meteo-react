import '../../../style/weatherStuff/weatherStuff.css';

const BoxImg = ({ img }) => {
    return (
        <>
            <div className="boxImg">{img != undefined && <img src={img}></img>}</div>
        </>
    );
};
export default BoxImg;
