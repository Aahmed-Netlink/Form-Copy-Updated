import { forwardRef, useRef, useState } from "react";
import Modal from "./DialogModal/Modal";
import { PiArrowRightBold } from "react-icons/pi";

const InputLabel = () => {

    const userLabel = useRef();
    const userPlaceHolder = useRef();
    const modal = useRef();

    const [valuestate, setvaluestate] = useState([
        {
            placeholder: [],
            label: [],
        }
    ])

    {/* //! making a fuction to save the value of the user input in an object*/ }
    const handleSave = () => {
        const enteredLabel = userLabel.current.value
        const enteredPlaceHolder = userPlaceHolder.current.value

        // document.getElementsByClassName("inputFieldClass")

        setvaluestate(
            () => {
                return {
                    label: [enteredLabel],
                    placeholder: [enteredPlaceHolder]
                }
            }
        )
    }

    console.log(valuestate)
    // console.log(valuestate.label)

    const inputFieldClass = "border-[0.2rem] rounded-md border-sky-100 h-12 shadow-lg shadow-rose-200 px-2 w-[20rem] text-stone-600 focus:outline-none focus:border-yellow-400";
    const classes = "text-stone-600 mb-4";
    return (
        <>
            <Modal ref={modal} btnCaption="Close">
                <h2 className="text-xl font-bold text-red-700 my-4">Invalid Input</h2>
                <p className={classes}>Please enter valid input</p>
            </Modal>
            <p className="flex m-4 flex-col w-2/3 gap-4">
                {/* //! Taking the user input with input filed and passing it with refrence */}

                <input
                    ref={userLabel}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter The Label"
                />

                <input
                    ref={userPlaceHolder}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter The Place Holder"
                />
                <button className="bg-blue-400 rounded-md shadow-lg shadow-rose-200 flex justify-between p-4 w-4/12" onClick={handleSave}> SAVE <PiArrowRightBold />
                </button>

            </p>
        </>
    );
}

export default InputLabel