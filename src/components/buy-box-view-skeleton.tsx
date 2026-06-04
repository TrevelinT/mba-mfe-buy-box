function BuyBoxViewSkeleton() {
	return (
		<article
			aria-busy="true"
			aria-label="Loading buy box offer"
			className="buybox:lg:col-span-3 buybox:flex buybox:flex-col buybox:gap-lg buybox:animate-pulse"
			role="status"
		>
			<div className="buybox:bg-surface-container-low buybox:p-lg buybox:border buybox:border-outline-variant buybox:rounded-xl buybox:flex buybox:flex-col buybox:gap-lg">
				<div className="buybox:flex buybox:flex-col buybox:gap-xs">
					<div className="buybox:h-4 buybox:w-24 buybox:rounded buybox:bg-outline-variant" />
					<div className="buybox:h-8 buybox:w-40 buybox:rounded buybox:bg-outline-variant" />
					<div className="buybox:h-4 buybox:w-48 buybox:rounded buybox:bg-outline-variant buybox:mt-1" />
				</div>
				<div className="buybox:flex buybox:flex-col buybox:gap-sm">
					<div className="buybox:h-4 buybox:w-20 buybox:rounded buybox:bg-outline-variant" />
					<div className="buybox:h-10 buybox:w-full buybox:max-w-[140px] buybox:rounded buybox:border buybox:border-outline-variant buybox:bg-surface-container-low" />
				</div>
				<div className="buybox:h-14 buybox:w-full buybox:rounded buybox:bg-outline-variant" />
				<div className="buybox:h-4 buybox:w-56 buybox:rounded buybox:bg-outline-variant" />
			</div>
			<div className="buybox:grid buybox:grid-cols-3 buybox:gap-sm">
				{[1, 2, 3].map(function renderTrustBadgePlaceholder(key) {
					return (
						<div
							className="buybox:flex buybox:flex-col buybox:items-center buybox:gap-xs"
							key={key}
						>
							<div className="buybox:h-6 buybox:w-6 buybox:rounded buybox:bg-outline-variant" />
							<div className="buybox:h-3 buybox:w-16 buybox:rounded buybox:bg-outline-variant" />
						</div>
					);
				})}
			</div>
		</article>
	);
}

export { BuyBoxViewSkeleton };
