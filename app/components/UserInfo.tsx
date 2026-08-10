import Image from "next/image";

type Props = {
    avatar: string;
};
const UserInfo = ({ avatar}: Props) => {
    return (
        <div className="user-info">
            <Image src={avatar} alt="avatar" width={32} height={32} className="avatar" />
            <span>Andrian</span>
        </div>
    );
};

export default UserInfo;