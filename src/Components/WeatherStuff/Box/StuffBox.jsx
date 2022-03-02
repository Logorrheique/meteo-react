import Box from './Box';
import Title from '../../Title';
const StuffBox = ({ img1, img2, img3, img4 }) => {
    return (
        <div className="stuffBox">
            <Title content={'Ideal Clothes'}></Title>
            <Box img={img1}></Box>
            <Box img={img2}></Box>
            <Box img={img3}></Box>
            <Box img={img4}></Box>
        </div>
    );
};
export default StuffBox;
