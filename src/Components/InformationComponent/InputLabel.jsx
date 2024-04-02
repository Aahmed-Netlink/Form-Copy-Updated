import { forwardRef, } from "react";

const InputLabel = forwardRef(({}, ref) => {

    const inputFieldClass = "border-[0.2rem] rounded-md border-sky-100 h-12 shadow-lg shadow-rose-200 px-2 w-[20rem] text-stone-600 focus:outline-none focus:border-yellow-400";

    return (
        <>
            <p className="flex m-4 flex-col w-2/3 gap-4">
                {/* //! Taking the user input with input filed and passing it with refrence */}

                <input
                    ref={ref}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter The Label"
                />

                {/* <input
                    ref={ref.UserPlaceHolder}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter The Place Holder"
                /> */}
                {/* <button className="bg-blue-400 rounded-md shadow-lg shadow-rose-200 flex justify-between p-4 w-4/12" onClick={handleSave}> SAVE <PiArrowRightBold />
                </button> */}

            </p>
        </>
    );
})

export default InputLabel