import '../../style/footer.css';
import github from '../../img/github.svg';
const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/Logorrheique">My GitHub</a>
            <a href="https://github.com/Logorrheique">
                <img src={github} alt="" />
            </a>
        </div>
    );
};
export default Footer;
