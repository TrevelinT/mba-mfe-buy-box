import { formatPrice } from "../api/format-price";

export interface BuyBoxViewProps {
	salePrice: number;
	listPrice: number;
	installmentText: string;
	quantity: number;
	onDecreaseQuantity: () => void;
	onIncreaseQuantity: () => void;
	onPreOrder: () => void;
}

function MinusIcon() {
	return (
		<svg
			aria-hidden="true"
			className="buybox:size-6"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M19 13H5v-2h14v2z" />
		</svg>
	);
}

function PlusIcon() {
	return (
		<svg
			aria-hidden="true"
			className="buybox:size-6"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
		</svg>
	);
}

function CheckCircleIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className ?? "buybox:size-6"}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
		</svg>
	);
}

function LocalShippingIcon() {
	return (
		<svg
			aria-hidden="true"
			className="buybox:size-6 buybox:text-secondary"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
		</svg>
	);
}

function VerifiedUserIcon() {
	return (
		<svg
			aria-hidden="true"
			className="buybox:size-6 buybox:text-secondary"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
		</svg>
	);
}

function SyncIcon() {
	return (
		<svg
			aria-hidden="true"
			className="buybox:size-6 buybox:text-secondary"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
		</svg>
	);
}

function BuyBoxView({
	salePrice,
	listPrice,
	installmentText,
	quantity,
	onDecreaseQuantity,
	onIncreaseQuantity,
	onPreOrder,
}: BuyBoxViewProps) {
	return (
		<div className="buybox:lg:col-span-3 buybox:flex buybox:flex-col buybox:gap-lg">
			<div className="buybox:bg-surface-container-low buybox:p-lg buybox:border buybox:border-outline-variant buybox:rounded-xl buybox:flex buybox:flex-col buybox:gap-lg">
				<div className="buybox:flex buybox:flex-col buybox:gap-xs">
					<div className="buybox:flex buybox:flex-col buybox:gap-xs">
						<s className="buybox:text-body-md buybox:text-secondary">
							{formatPrice(listPrice)}
						</s>
						<span className="buybox:font-price-lg buybox:text-price-lg buybox:text-on-surface">
							{formatPrice(salePrice)}
						</span>
					</div>
					<p className="buybox:text-body-sm buybox:text-secondary buybox:font-medium buybox:mt-1">
						{installmentText}
					</p>
				</div>
				<fieldset className="buybox:flex buybox:flex-col buybox:gap-sm buybox:m-0 buybox:min-w-0 buybox:border-0 buybox:p-0">
					<legend className="buybox:font-label-md buybox:text-on-surface buybox:uppercase buybox:tracking-wider buybox:p-0">
						Quantidade
					</legend>
					<div className="buybox:flex buybox:items-center buybox:w-full buybox:max-w-[140px] buybox:border buybox:border-outline-variant buybox:rounded">
						<button
							aria-label="Diminuir quantidade"
							className="buybox:p-2 buybox:hover:bg-surface-container buybox:transition-colors"
							onClick={onDecreaseQuantity}
							type="button"
						>
							<MinusIcon />
						</button>
						<span
							aria-live="polite"
							className="buybox:flex-1 buybox:text-center buybox:font-bold"
							role="status"
						>
							{quantity}
						</span>
						<button
							aria-label="Aumentar quantidade"
							className="buybox:p-2 buybox:hover:bg-surface-container buybox:transition-colors"
							onClick={onIncreaseQuantity}
							type="button"
						>
							<PlusIcon />
						</button>
					</div>
				</fieldset>
				<div className="buybox:flex buybox:flex-col buybox:gap-md buybox:pt-base">
					<button
						className="buybox:w-full buybox:bg-primary-container buybox:hover:bg-primary buybox:py-lg buybox:rounded buybox:text-on-primary buybox:font-headline-md buybox:transition-all buybox:active:opacity-80"
						onClick={onPreOrder}
						type="button"
					>
						Adicionar ao carrinho
					</button>
				</div>
				<div className="buybox:flex buybox:items-center buybox:gap-sm buybox:text-body-sm buybox:font-medium buybox:text-on-surface buybox:pt-sm">
					<CheckCircleIcon className="buybox:size-6 buybox:text-surface-tint" />
					Frete grátis e entrega expressa
				</div>
			</div>
			<div className="buybox:grid buybox:grid-cols-3 buybox:gap-sm">
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<LocalShippingIcon />
					<span className="buybox:text-label-md buybox:font-bold buybox:uppercase buybox:text-secondary">
						Entrega rápida
					</span>
				</div>
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<VerifiedUserIcon />
					<span className="buybox:text-label-md buybox:font-bold buybox:uppercase buybox:text-secondary">
						Garantia de 2 anos
					</span>
				</div>
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<SyncIcon />
					<span className="buybox:text-label-md buybox:font-bold buybox:uppercase buybox:text-secondary">
						Devolução fácil
					</span>
				</div>
			</div>
		</div>
	);
}

export { BuyBoxView };
