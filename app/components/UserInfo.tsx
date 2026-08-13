import Image from "next/image";

const UserInfo = () => {
    return (
        <div className="user-info">
            <Image src='/avatar.gif' alt="avatar" width={32} height={32} className='user-info'/>
            <span>Andrian</span>
        </div>
    );
};

export default UserInfo;