import { useState } from "react";

import { getWhyNextReasons } from "../lib/api";

import CoursesList from "../components/courses-list/CoursesList";
import Footer from "../components/layout/footer/Footer";
import XCircle from "../components/ui/icons/x-circle/XCircle";

export default function IndexPage({ courses }) {
	const [search, setSearch] = useState("");
	const [updatedCourses, setUpdatedCourses] = useState(courses);

	const searchHandler = (event) => {
		const searchedText = event.target.value.toLowerCase();
		setSearch(searchedText);

		const newCourse = courses.filter((c) =>
			c.title.toLowerCase().includes(searchedText)
		);
		setUpdatedCourses(newCourse);
	};

	const clearSearchInput = () => {
		setSearch("");
		setUpdatedCourses(courses);
	};

	return (
		<div className="w-screen h-screen flex content-center items-center">
			<div className="m-auto shadow-lg sm:rounded-3xl sm:p-20 p-3">
				<h1 className="text-5xl font-bold">Welcome Folks</h1>
				<h2 className="text-2xl text-gray-700">
					Here is some free courses for you!{" "}
					<span className="font-bold text-lg ">
						Without any weird redirect links of course!
					</span>
				</h2>
				<div className="pt-3 text-gray-500 md:flex justify-between items-center text-right">
					<div className="flex-grow">
						<div class="relative flex w-full flex-wrap items-stretch">
							<input
								type="text"
								value={search}
								onChange={searchHandler}
								placeholder="Search the course.."
								class="px-3 py-2 border-2 rounded-lg border-green-400 focus:outline-none flex-grow w-full sm:w-min"
							/>
							{search.length > 0 ? (
								<span
									onClick={clearSearchInput}
									class="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-2 py-3 cursor-pointer"
								>
									<XCircle />
								</span>
							) : null}
						</div>
					</div>
					<p className="mt-2 sm:mt-0 sm:ml-10">
						Last updated at:{" "}
						<span className="font-bold">
							{new Date(courses[0].updated).toDateString()}
						</span>
					</p>
				</div>
				<div className="text-gray-600 pt-2">
					<span className="font-bold">Have any suggestion?</span> Feel
					free contact me at{" "}
					<a
						className="font-bold underline"
						href="mailto:frastyawan.nym@gmail.com"
					>
						Here
					</a>{" "}
					or drop me a DM on my{" "}
					<a
						className="font-bold underline text-blue-500"
						href="https://twitter.com/frasnym"
						target="_blank"
					>
						Twitter
					</a>
				</div>
				<CoursesList updatedCourses={updatedCourses} />
				<Footer />
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const courses = await getWhyNextReasons();

	return {
		props: {
			courses: courses.slice(1, courses.length),
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 1, // In seconds
	};
}
