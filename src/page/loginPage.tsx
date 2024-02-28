const LoginPage = () => {
    return (
        <div className="flex justify-center mt-10">
            <input
                type="text"
                placeholder="User ID"
                className="border rounded-lg py-2 px-3.5 pl-9 mr-4 bg-loginImage bg-no-repeat bg-sm bg-left"
            />
            <button className="bg-btnColor text-white font-bold px-3.5 py-1 rounded-lg ">
                Sign in
            </button>
        </div>
    );
};

export default LoginPage;
