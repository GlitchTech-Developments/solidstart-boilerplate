// @refresh reload
import { Suspense } from "solid-js";
import {
	useLocation,
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "./root.css";
import { useRouteStat } from "./utils/routeUtils";

export default function Root() {
	const active = (path: string) =>
		useRouteStat(path).isActive
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<Html lang="en">
			<Head>
				<Title>SolidStart - Boilerplate</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<nav class="bg-sky-800">
							<ul class="container flex items-center p-3 text-gray-200">
								<li
									class={`border-b-2 ${active(
										"/"
									)} mx-1.5 sm:mx-6`}
								>
									<A href="/">Home</A>
								</li>
								<li
									class={`border-b-2 ${active(
										"/about"
									)} mx-1.5 sm:mx-6`}
								>
									<A href="/about">About</A>
								</li>
							</ul>
						</nav>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
