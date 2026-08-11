import Image from "next/image";
import Menu from "@/app/menu/Menu";
import UserInfo from "@/app/components/UserInfo";

const Header = () => {
    return (
        <header className="base-header">
            <div className="logo">
                <Image src="/film.gif" alt="film" width={30} height={20} className="film" unoptimized />
                <span>MovieApp</span>
            </div>
            <Menu />
            <div className="right-group">
                <form action={'/movies'}  className="search">
                    <input
                        type="text"
                        name="q"
                        placeholder="Search movies..."
                        className="search-input"
                    />
                    <button type="submit" className="button">
                        Search
                    </button>
                </form>
                <UserInfo />
            </div>
        </header>
    );
};

export default Header;