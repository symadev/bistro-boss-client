import UseAuth from "../../../Components/UseAuth/UseAuth";


const UserHome = () => {
    const {user} = UseAuth()
    return (
        <div>
            hi! i am User Home
            <div>
{
    user?. displayName ? user.displayName:'back'
}
            </div>
        </div>
    );
};

export default UserHome;