import * as React from "react";
import {
	FaEnvelope,
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

import Schdesign from "@/assets/svg/schdesign.inline.svg";
import SimonyiColor from "@/assets/svg/simonyi_color.inline.svg";
import VIK from "@/assets/svg/VIK.inline.svg";

export function Footer() {
	return (
		<footer className="z-20 p-8 w-full text-primary-200" id="footer">
			<div className="container flex flex-col justify-center items-center mx-auto space-y-6">
				<div className="flex justify-evenly items-center w-full text-primary-200 lg:w-1/3">
					<a href="mailto:konferencia@simonyi.bme.hu">
						<FaEnvelope className="w-10 h-auto hover:opacity-75" />
					</a>
					<a
						href="https://www.instagram.com/simonyikonf/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="w-10 h-auto hover:opacity-75" />
					</a>
					<a
						href="https://fb.me/e/myxPUe7JM"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookSquare className="w-10 h-auto hover:opacity-75" />
					</a>
					<a
						href="https://www.youtube.com/user/SimonyiSzakkoli/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube className="w-10 h-auto hover:opacity-75" />
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
							className="w-auto h-16 hover:opacity-75"
						/>
					</a>
					<a
						href="https://vik.bme.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<VIK
							alt="Villamosmérnöki és Informatikai Kar"
							className="w-auto h-16 hover:opacity-75"
						/>
					</a>
					<a
						href="https://schdesign.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Schdesign
							alt="schdesign"
							className="w-auto h-12 hover:opacity-75"
						/>
					</a>
				</div>
				<a
					className="flex items-center mx-auto"
					href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						width="168"
						height="32"
						viewBox="0 0 168 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0)">
							<path
								d="M0 4C0 1.79086 1.79086 0 4 0H163.2C165.409 0 167.2 1.79086 167.2 4V28C167.2 30.2091 165.409 32 163.2 32H4C1.79086 32 0 30.2091 0 28V4Z"
								fill="#1E2833"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M15.9996 10.4L22.3996 21.6H9.59961L15.9996 10.4Z"
								fill="white"
							/>
							<path d="M32.4004 0V32" stroke="#333333" />
							<path
								d="M42.623 20.8H44.0276V17.5273H45.9367C48.0958 17.5273 49.1639 16.2227 49.1639 14.5046C49.1639 12.7909 48.1049 11.4909 45.9412 11.4909H42.623V20.8ZM44.0276 16.3364V12.6954H45.7912C47.1822 12.6954 47.7503 13.45 47.7503 14.5046C47.7503 15.5591 47.1822 16.3364 45.8094 16.3364H44.0276ZM53.5549 20.9409C55.523 20.9409 56.8094 19.5 56.8094 17.3409C56.8094 15.1682 55.523 13.7273 53.5549 13.7273C51.5867 13.7273 50.3003 15.1682 50.3003 17.3409C50.3003 19.5 51.5867 20.9409 53.5549 20.9409ZM53.5594 19.8C52.273 19.8 51.673 18.6773 51.673 17.3364C51.673 16 52.273 14.8636 53.5594 14.8636C54.8367 14.8636 55.4367 16 55.4367 17.3364C55.4367 18.6773 54.8367 19.8 53.5594 19.8ZM59.6276 20.8H61.0094L62.4276 15.7591H62.5322L63.9503 20.8H65.3367L67.3867 13.8182H65.9822L64.623 18.9227H64.5549L63.1912 13.8182H61.7867L60.4139 18.9454H60.3458L58.9776 13.8182H57.573L59.6276 20.8ZM71.473 20.9409C72.9958 20.9409 74.073 20.1909 74.3822 19.0546L73.0958 18.8227C72.8503 19.4818 72.2594 19.8182 71.4867 19.8182C70.323 19.8182 69.5412 19.0636 69.5049 17.7182H74.4685V17.2364C74.4685 14.7136 72.9594 13.7273 71.3776 13.7273C69.4322 13.7273 68.1503 15.2091 68.1503 17.3546C68.1503 19.5227 69.4139 20.9409 71.473 20.9409ZM69.5094 16.7C69.5639 15.7091 70.2822 14.85 71.3867 14.85C72.4412 14.85 73.1322 15.6318 73.1367 16.7H69.5094ZM75.9765 20.8H77.3355V16.5364C77.3355 15.6227 78.0401 14.9636 79.0038 14.9636C79.2855 14.9636 79.6038 15.0136 79.7128 15.0454V13.7454C79.5765 13.7273 79.3082 13.7136 79.1355 13.7136C78.3174 13.7136 77.6174 14.1773 77.3628 14.9273H77.2901V13.8182H75.9765V20.8ZM83.6483 20.9409C85.1707 20.9409 86.2483 20.1909 86.5571 19.0546L85.2707 18.8227C85.0251 19.4818 84.4347 19.8182 83.6619 19.8182C82.4979 19.8182 81.7163 19.0636 81.6795 17.7182H86.6435V17.2364C86.6435 14.7136 85.1347 13.7273 83.5523 13.7273C81.6075 13.7273 80.3251 15.2091 80.3251 17.3546C80.3251 19.5227 81.5891 20.9409 83.6483 20.9409ZM81.6843 16.7C81.7387 15.7091 82.4571 14.85 83.5619 14.85C84.6163 14.85 85.3075 15.6318 85.3115 16.7H81.6843ZM90.7651 20.9364C92.0379 20.9364 92.5379 20.1591 92.7835 19.7136H92.8971V20.8H94.2243V11.4909H92.8651V14.95H92.7835C92.5379 14.5182 92.0739 13.7273 90.7739 13.7273C89.0875 13.7273 87.8467 15.0591 87.8467 17.3227C87.8467 19.5818 89.0699 20.9364 90.7651 20.9364ZM91.0651 19.7773C89.8515 19.7773 89.2195 18.7091 89.2195 17.3091C89.2195 15.9227 89.8379 14.8818 91.0651 14.8818C92.2515 14.8818 92.8875 15.85 92.8875 17.3091C92.8875 18.7773 92.2379 19.7773 91.0651 19.7773ZM99.6603 20.8H100.988V19.7136H101.101C101.347 20.1591 101.847 20.9364 103.12 20.9364C104.811 20.9364 106.038 19.5818 106.038 17.3227C106.038 15.0591 104.792 13.7273 103.106 13.7273C101.811 13.7273 101.343 14.5182 101.101 14.95H101.02V11.4909H99.6603V20.8ZM100.992 17.3091C100.992 15.85 101.629 14.8818 102.815 14.8818C104.047 14.8818 104.665 15.9227 104.665 17.3091C104.665 18.7091 104.029 19.7773 102.815 19.7773C101.647 19.7773 100.992 18.7773 100.992 17.3091ZM108.173 23.4C109.296 23.4 110.009 22.8136 110.409 21.7318L113.296 13.8318L111.828 13.8182L110.06 19.2364H109.987L108.219 13.8182H106.764L109.319 20.8909L109.151 21.3546C108.805 22.2591 108.319 22.3409 107.573 22.1364L107.246 23.25C107.409 23.3273 107.764 23.4 108.173 23.4ZM119.541 11.4909H117.355L120.568 20.8H123.105L126.314 11.4909H124.132L121.878 18.5636H121.792L119.541 11.4909ZM129.78 20.9364C131.508 20.9364 132.671 20.0954 132.944 18.8L131.152 18.6818C130.957 19.2136 130.457 19.4909 129.812 19.4909C128.844 19.4909 128.23 18.85 128.23 17.8091V17.8046H132.984V17.2727C132.984 14.9 131.548 13.7273 129.703 13.7273C127.648 13.7273 126.316 15.1864 126.316 17.3409C126.316 19.5546 127.63 20.9364 129.78 20.9364ZM128.23 16.6046C128.271 15.8091 128.876 15.1727 129.735 15.1727C130.576 15.1727 131.157 15.7727 131.162 16.6046H128.23ZM134.248 20.8H136.184V16.85C136.184 15.9909 136.812 15.4 137.666 15.4C137.935 15.4 138.303 15.4454 138.484 15.5046V13.7864C138.312 13.7454 138.071 13.7182 137.876 13.7182C137.093 13.7182 136.452 14.1727 136.198 15.0364H136.125V13.8182H134.248V20.8ZM142.315 20.9364C144.174 20.9364 145.343 19.8454 145.433 18.2409H143.606C143.492 18.9864 143.001 19.4046 142.338 19.4046C141.433 19.4046 140.847 18.6454 140.847 17.3091C140.847 15.9909 141.438 15.2364 142.338 15.2364C143.047 15.2364 143.501 15.7046 143.606 16.4H145.433C145.352 14.7864 144.129 13.7273 142.306 13.7273C140.188 13.7273 138.879 15.1954 138.879 17.3364C138.879 19.4591 140.165 20.9364 142.315 20.9364ZM149.855 20.9364C151.582 20.9364 152.746 20.0954 153.019 18.8L151.228 18.6818C151.032 19.2136 150.532 19.4909 149.887 19.4909C148.919 19.4909 148.305 18.85 148.305 17.8091V17.8046H153.06V17.2727C153.06 14.9 151.623 13.7273 149.778 13.7273C147.723 13.7273 146.392 15.1864 146.392 17.3409C146.392 19.5546 147.705 20.9364 149.855 20.9364ZM148.305 16.6046C148.346 15.8091 148.951 15.1727 149.809 15.1727C150.65 15.1727 151.232 15.7727 151.236 16.6046H148.305ZM156.26 11.4909H154.323V20.8H156.26V11.4909Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="167.2" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</a>
			</div>
		</footer>
	);
}
