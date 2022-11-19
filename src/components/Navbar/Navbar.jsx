import { darklogo_h, help, user } from "../../shared/imageList";
import Button from "../Button/Button";
import { UploadStateHeader } from "../Header/Header";
import Image from "../Image/Image";
import { NavbarStyle } from "./Navbar.style";

const Navbar = ({ stateListTitle, activeIndex }) => {
    return (
        <NavbarStyle>
            <Button type="link" title="Home">
                <Image src={darklogo_h} alt="logo" h="4.5rem" />
            </Button>
            {activeIndex >= 0 ? (
                <UploadStateHeader
                    stateListTitle={stateListTitle}
                    activeIndex={activeIndex}
                />
            ) : (
                ""
            )}
            <Button h="3.2rem" title="Help">
                <img src={help} alt="help" />
            </Button>
            <Button h="5rem" type="link" title="User">
                <img src={user} alt="user" />
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;
