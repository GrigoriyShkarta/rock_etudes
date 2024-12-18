import { FC } from "react";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const Prices: FC = () => (
	<div className={s.section} id="6">
		<Section
			children={
				<>
					<h1>Ціни</h1>
					<div className={s.container}>
						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Підписникам</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									Усі підписники мого блогу, а також всі інші, можуть придбати
									цей збірник вправ за вигідною ціною. Підвищення ціни
									відбудеться 01.01.2025.
								</p>
							</div>
							<p className={s.priceText}>2 290 грн</p>
						</div>

						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Марафонцям</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									Учасникам 2 потоку марафону "Режими роботи голосових складок"
									я дарую знижку на придбання цієї збірки. Скористатися нею Ви
									можете за допомогою промокоду, який отримали в каналі
									марафону. Акція триває до 01.01.2025.
								</p>
							</div>
							<p className={s.priceText}>1 790 грн</p>
						</div>

						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Студентам</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									Усім своїм студентам я дарую знижку на придбання цієї збірки.
									Скористатися нею Ви можете за допомогою промокоду, який я
									надіслала Вам особисто. Акція триває до 01.01.2025.
								</p>
							</div>
							<p className={s.priceText}>1 490 грн</p>
						</div>
					</div>
					<p className={s.book}>
						* За бажанням Ви можете оформити передзамовлення друкованого
						збірника з доплатою 350 грн. Відправка першої партії відбудеться в
						січні, доставка Новою поштою оплачується Вами при отриманні.
					</p>
					<Button />
				</>
			}
		/>
	</div>
);

export default Prices;
