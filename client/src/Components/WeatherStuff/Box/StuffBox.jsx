import Box from './Box';
const StuffBox = ({ img1, img2, img3, img4 }) => {
    return (
        <div className="stuffBox">
            <Box img={img1}></Box>
            <Box img={img2}></Box>
            <Box img={img3}></Box>
            <Box img={img4}></Box>
        </div>
    );
};
export default StuffBox;
