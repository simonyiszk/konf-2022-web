import * as React from "react";

import { SponsorLogo } from "./SponsorLogo";
import * as styles from "./SponsorSection.module.scss";

type SponsorProps = {
	gold?: GatsbyTypes.ContentfulSponsorLogo;
	silver: GatsbyTypes.ContentfulSponsorLogoConnection;
	bronze: GatsbyTypes.ContentfulSponsorLogoConnection;
};

export function SponsorSection({ gold, silver, bronze }: SponsorProps) {
	return (
		<section className={styles.section}>
			<h3>Szponzoraink</h3>
			<div /* className={styles.wrap} */>
				<h4>Főtámogatónk</h4>
				<div className={styles.containerOne}>
					{gold && (
						<SponsorLogo
							key={gold.name}
							{...gold}
							className="w-[232px] h-auto"
						/>
					)}
				</div>
			</div>
			<div /* className={styles.wrap} */>
				<h4>Kiemelt támogatóink</h4>
				<div className={styles.containerMany}>
					{silver.nodes.map((sponsor) => {
						return (
							<SponsorLogo
								key={sponsor.name}
								{...sponsor}
								className="w-[202px] h-auto"
							/>
						);
					})}
				</div>
			</div>
			<div /* className={styles.wrap} */>
				<h4>További támogatóink</h4>
				<div className={styles.containerMany}>
					{bronze.nodes.map((sponsor) => {
						return (
							<SponsorLogo
								key={sponsor.name}
								{...sponsor}
								className="w-[172px] h-auto"
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
