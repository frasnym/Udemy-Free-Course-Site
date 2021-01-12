import React from "react";

export default function CoursesList(props) {
	return (
		<>
			{props.updatedCourses.map(
				({
					title,
					url,
					image,
					description,
					rating,
					students,
					language,
					caption,
				}) => (
					<div
						key={url}
						className="py-4 content-start max-w-4xl sm:flex"
					>
						<img
							src={image}
							className="rounded-lg sm:mr-4 sm:w-1/2"
						/>
						<div className="flex flex-col justify-between w-full">
							<div className="py-3 sm:py-0">
								<p className="font-bold text-xl">{title}</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">
									{description}
								</p>
							</div>
							<div className="py-3 sm:py-0 grid grid-cols-2">
								<div>
									<span className="font-bold">Rating: </span>
									<span>{rating}</span>
								</div>
								<div>
									<span className="font-bold">
										Students:{" "}
									</span>
									<span>{students}</span>
								</div>
								<div>
									<span className="font-bold">
										Language:{" "}
									</span>
									<span>{language}</span>
								</div>
								<div>
									<span className="font-bold">Caption: </span>
									<span>{caption}</span>
								</div>
							</div>
							<a
								href={url}
								target="_blank"
								className="bg-green-500 hover:bg-green-600 rounded-md py-2 text-center text-lg font-bold text-white block"
							>
								Claim
							</a>
						</div>
					</div>
				)
			)}
		</>
	);
}
