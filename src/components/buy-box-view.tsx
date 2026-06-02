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
				<div className="buybox:flex buybox:flex-col buybox:gap-sm">
					<label
						className="buybox:font-label-md buybox:text-on-surface buybox:uppercase buybox:tracking-wider"
						htmlFor="quantity"
					>
						Quantidade
					</label>
					<div
						className="buybox:flex buybox:items-center buybox:w-full buybox:max-w-[140px] buybox:border buybox:border-outline-variant buybox:rounded"
						id="quantity"
					>
						<button
							aria-label="Diminuir quantidade"
							className="buybox:p-2 buybox:hover:bg-surface-container buybox:transition-colors"
							onClick={onDecreaseQuantity}
							type="button"
						>
							<span aria-hidden="true" className="material-symbols-outlined">
								remove
							</span>
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
							<span aria-hidden="true" className="material-symbols-outlined">
								add
							</span>
						</button>
					</div>
				</div>
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
					<span
						aria-hidden="true"
						className="material-symbols-outlined buybox:text-surface-tint"
					>
						check_circle
					</span>
					Frete grátis e entrega expressa
				</div>
			</div>
			<div className="buybox:grid buybox:grid-cols-3 buybox:gap-sm">
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<span
						aria-hidden="true"
						className="material-symbols-outlined buybox:text-secondary buybox:text-[24px]"
					>
						local_shipping
					</span>
					<span className="buybox:text-[9px] buybox:font-bold buybox:uppercase buybox:text-secondary">
						Entrega rápida
					</span>
				</div>
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<span
						aria-hidden="true"
						className="material-symbols-outlined buybox:text-secondary buybox:text-[24px]"
					>
						verified_user
					</span>
					<span className="buybox:text-[9px] buybox:font-bold buybox:uppercase buybox:text-secondary">
						Garantia de 2 anos
					</span>
				</div>
				<div className="buybox:flex buybox:flex-col buybox:items-center buybox:text-center buybox:gap-xs">
					<span
						aria-hidden="true"
						className="material-symbols-outlined buybox:text-secondary buybox:text-[24px]"
					>
						sync
					</span>
					<span className="buybox:text-[9px] buybox:font-bold buybox:uppercase buybox:text-secondary">
						Devolução fácil
					</span>
				</div>
			</div>
		</div>
	);
}

export { BuyBoxView };
