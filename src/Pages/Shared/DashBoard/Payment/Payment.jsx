import Titles from "../../../../Components/Titles/Titles";


const Payment = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div>
                <Titles
                    heading="---Ready for Reservation?---" subHeading="PAYMENT" />
                <div>
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-8">PAYMENT</h2>

                        <form className="space-y-6">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <div className="flex items-center border rounded-md px-3 py-2 w-full">
                                    <span className="mr-2 text-gray-400 text-xl">💳</span>
                                    <input
                                        type="text"
                                        placeholder="Card number"
                                        className="w-full outline-none text-sm"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="MM/YY/CVC"
                                    className="border rounded-md px-3 py-2 w-full text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                            >
                                Pay
                            </button>
                        </form>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Payment;
