import * as React from "react";

export function Location() {
	return (
		<div className="container flex flex-col justify-evenly items-center px-3 mx-auto mt-8 mb-16 lg:flex-row">
			<div className="mb-8 text-center prose dark:prose-invert">
				<h3 className="text-3xl">Helyszín</h3>
				<p className="text-lg">
					BME I épület
					<br />
					Budapest, Magyar Tudósok körútja 2, 1117
				</p>
				<p className="">2022.04.27.</p>
			</div>
			<div className="aspect-2 w-full lg:w-1/2">
				<iframe
					title="Térkép"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1348.437074543208!2d19.060099308679057!3d47.47288184641483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2zQk1FIEkgw6lww7xsZXQ!5e0!3m2!1shu!2shu!4v1650888578884!5m2!1shu!2shu"
					className="w-full h-full"
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	);
}
