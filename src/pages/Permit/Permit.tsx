import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

export interface IDate {
	lastRenewed: string | Date;
	expiry: string | Date;
}
const Permit = () => {
	const [title, setTitle] = useState<string>("");
	const [permitNumber, setPermitNumber] = useState("");
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const [value, setValue] = useState<DateValueType>({
		startDate: null,
		endDate: new Date(new Date().getFullYear(), 11, 31), // Set endDate to December 31 of the current year
	});
	const [expiryDate, setExpiryDate] = useState<DateValueType>({
		startDate: null,
		endDate: new Date(new Date().getFullYear(), 11, 31), // Set endDate to December 31 of the current year
	});

	const handleValueChange = (newValue: DateValueType) => {
		console.log("newValue:", newValue);
		setValue(newValue);
	};

	const handleChange = (value: DateValueType): void => {
		console.log("value is :", value);
		setExpiryDate(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitted(true)
		console.log(
			"details is :",
			{
				title,
				permitNumber,
			},
			{ lastRenewed: value?.startDate },
			{ expiry: expiryDate?.startDate }
		);
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-cover bg-center">
			<div
				className="flex flex-col justify-center items-center h-[80%] w-[50%] bg-[#fafafa] rounded-3xl"
				style={{ boxShadow: "2px 2px 15px #ec0000" }}
			>
				<h2 className="text-[24px] font-bold">Add New Permits</h2>
				<form className="w-[70%]" onSubmit={handleSubmit}>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="permit_title"
							id="permit_title"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<label
							htmlFor="permit_title"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Title
							<span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
								*
							</span>{" "}
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="permit_number"
							id="permit_number"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
							value={permitNumber}
							onChange={(e) => setPermitNumber(e.target.value)}
						/>
						<label
							htmlFor="permit_number"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Permit Number
							<span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
								*
							</span>{" "}
						</label>
					</div>

					<label htmlFor="last_renewed" className="flex">
						<p>Last Renewed</p>
						<span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
							*
						</span>{" "}
					</label>
					<div className="relative z-0 w-full mb-6 group">
						<Datepicker
							value={value}
							showShortcuts={true}
							asSingle={true}
							useRange={false}
							onChange={handleValueChange}
						/>
					</div>
					<label htmlFor="last_renewed" className="flex">
						<p>Expiry (Due) Date</p>
						<span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
							*
						</span>{" "}
					</label>
					<div className="relative z-0 w-full mb-6 group">
						<Datepicker
							value={expiryDate}
							showShortcuts={true}
							asSingle={true}
							useRange={false}
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						{isSubmitted ? "Processing..." : "Submit"}
					</button>
				</form>
			</div>

			<div>Developed by Ifiok Inyang @ 2023. HSE SB-East</div>
		</div>
	);
};

export default Permit;
