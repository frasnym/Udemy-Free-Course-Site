import React from "react";
import Heart from "../../ui/icons/heart/Heart";

export default function Footer() {
	return (
		<footer className="font-bold text-center h-10 flex justify-center items-center bg-gray-200 rounded-xl mt-5">
			<span>Made with </span> <Heart />
			<span>
				by{" "}
				<a
					className="underline"
					href="https://twitter.com/frasnym"
					target="_blank"
				>
					FrasNym
				</a>
			</span>
		</footer>
	);
}
