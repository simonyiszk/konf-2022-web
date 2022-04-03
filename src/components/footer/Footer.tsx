import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import {
	FaEnvelope,
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

import manifest from "@/../package.json";
import Schdesign from "@/assets/svg/schdesign.inline.svg";
import SimonyiColor from "@/assets/svg/simonyi_color.inline.svg";
import Vercel from "@/assets/svg/Vercel.inline.svg";
import VIK from "@/assets/svg/VIK.inline.svg";

export function Footer() {
	const data: { currentBuildDate: GatsbyTypes.CurrentBuildDate } =
		useStaticQuery(graphql`
			query {
				currentBuildDate {
					currentDate
				}
			}
		`);
	const buildDate = new Date(
		Date.parse(data.currentBuildDate.currentDate ?? ""),
	);
	const buildDateString = new Intl.DateTimeFormat("hu-HU", {
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	})
		.format(buildDate)
		.match(/\d+/g)
		?.join("");

	return (
		<footer className="z-20 p-8 w-full text-primary-200" id="footer">
			<div className="container flex flex-col justify-center items-center mx-auto space-y-6">
				<div className="flex justify-evenly items-center w-full text-primary-200 lg:w-1/3">
					<a href="mailto:konferencia@simonyi.bme.hu">
						<FaEnvelope className="w-10 h-auto hover:text-white" />
					</a>
					<a
						href="https://www.instagram.com/simonyikonf/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="w-10 h-auto hover:text-white" />
					</a>
					<a
						href="https://fb.me/e/myxPUe7JM"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookSquare className="w-10 h-auto hover:text-white" />
					</a>
					<a
						href="https://www.youtube.com/user/SimonyiSzakkoli/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube className="w-10 h-auto hover:text-white" />
					</a>
				</div>
				<div className="grid grid-cols-1 gap-4 justify-items-center items-center w-full lg:grid-cols-3 lg:w-auto">
					<a
						href="https://simonyi.bme.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SimonyiColor
							alt="Simonyi Károly Szakkollégium"
							className="w-auto h-16 hover:text-white"
						/>
					</a>
					<a
						href="https://vik.bme.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<VIK
							alt="Villamosmérnöki és Informatikai Kar"
							className="w-auto h-16 hover:text-white"
						/>
					</a>
					<a
						href="https://schdesign.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Schdesign
							alt="schdesign"
							className="w-auto h-12 hover:text-white"
						/>
					</a>
				</div>
				<a
					className="flex items-center mx-auto"
					href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Vercel />
				</a>
				<div className="flex flex-row justify-center w-full">
					<p className="text-xs">
						<a
							href="https://github.com/simonyiszk/konf-2022-web"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub repo link"
							className="hover:text-white"
						>
							{`v${manifest.version}.${buildDateString}`}
						</a>{" "}
						<a
							href="https://github.com/simonyiszk"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub link"
							className="hover:text-white"
						>
							©&nbsp;2022&nbsp;simonyiszk
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
