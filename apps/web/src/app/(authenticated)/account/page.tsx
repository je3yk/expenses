import AccountForm from "./_components/account-form";
import Avatar from "./_components/avatar";

const AccountPage = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="md:w-1/2 xl:w-1/3 flex-col items-center justify-center p-5 gap-4">
                <div className="w-full flex items-center justify-center">
                    <Avatar />
                </div>
                <AccountForm />
            </div>
        </div>
    );
}
 
export default AccountPage;