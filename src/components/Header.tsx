import Image from "next/image";
import Menu from "@/src/menu/Menu";
import UserInfo from "@/src/components/UserInfo";
import Form from "next/form";

const Header = () => {
    return (
        <header className="base-header">
            <div className="logo">
                <Image src="/film.gif" alt="film" width={30} height={20} className="film" unoptimized />
                <span>MovieApp</span>
            </div>
            <Menu />
            <div className="right-group">
                <Form action={'/movies'}  className="search">
                    <input
                        type="text"
                        name="q"
                        placeholder="Search movies..."
                        aria-label="Search movies"
                        className="search-input"
                    />
                    <button type="submit" className="button">
                        Search
                    </button>
                </Form>
                <UserInfo />
            </div>
        </header>
    );
};

export default Header;