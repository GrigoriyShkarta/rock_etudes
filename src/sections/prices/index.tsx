import { FC } from "react";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const Prices: FC = () => (
	<div className={s.section} id="7">
		<Section
			children={
				<>
					<h1>Ціни</h1>
					<div className={s.container}>
						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Light</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📖 Електронна версія збірки: доступна для читання на будь-яких
									пристроях.
								</p>
								<p>🎵 MP3-файли: тренуйтеся де завгодно.</p>
								<p>
									📱 Доступ до Telegram-каналу: усі матеріали в одному місці,
									завжди під рукою!
								</p>
							</div>
							<div className={s.prices_block}>
								<p className={s.priceText_old}>2 500 грн</p>
								<p className={s.priceText}>1 490 грн</p>
								<p className={s.smallText}>
									Акційна ціна на зимові свята діє до 01.01.2025
								</p>
							</div>
						</div>

						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Premium</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📚 Друкована версія збірки: збірка, яку ви триматимете в руках
									та насолоджуватиметесь її оформленням.
								</p>
								<p>
									📖 Електронна версія збірки: доступна для читання на будь-яких
									пристроях.
								</p>
								<p>🎵 MP3-файли: тренуйтеся де завгодно.</p>
								<p>
									📱 Доступ до Telegram-каналу: усі матеріали в одному місці,
									завжди під рукою!
								</p>
							</div>
							<p className={s.priceText_old}>3 000 грн</p>
							<p className={s.priceText}>1 990 грн</p>
							<p className={s.smallText}>
								Акційна ціна на зимові свята діє до 01.01.2025
							</p>
						</div>
					</div>
					<p className={s.book}>
						* Доставка друкованої збірки здійснюється Новою поштою за Ваш
						рахунок. Перша партія буде надіслана в першій половині січня.
					</p>
					<Button />
				</>
			}
		/>
	</div>
);

export default Prices;
