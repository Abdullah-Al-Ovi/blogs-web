import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between bg-[#FFF] my-7 border-b-2">
            <h1 className="text-3xl">Knowledge Cafe</h1>
            <img src={profile} />
        </div>
    );
};

export default Header;