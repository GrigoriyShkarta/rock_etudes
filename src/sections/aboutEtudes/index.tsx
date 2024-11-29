import { FC } from "react";
import { MdStars } from "react-icons/md";
import Button from "../../button";
import s from "./style.module.scss";

const AboutEtudes: FC = () => (
	<section className={s.section} id={"1"}>
		<h1 className={s.title}>ПРО ЗБІРНИК</h1>
		<div className={s.textBlock}>
			<div className={s.block}>
				<MdStars size={42} />
				<p className={s.text}>
					ROCK ETUDES — це авторська збірка вправ створена на основі моделі
					“Estill Voice”.
				</p>
			</div>
			<div className={s.block}>
				<MdStars size={42} />
				<p className={s.text}>
					Дані вправи допоможуть тобі легше, цікавіше опанувати та почати
					свідомо контролювати 13 анатомічних структур голосового апарату.
				</p>
			</div>
			<div className={s.block}>
				<MdStars size={42} />
				<p className={s.text}>
					Особливість збірки в тому, що всі вправи мають стилізоване аранжування
					у стилі рок.
				</p>
			</div>
			<div className={s.block}>
				<MdStars size={42} />
				<p className={s.text}>
					Також збірка містить базову теоретичну інформацію про кожну структуру
					та навідні вправи.
				</p>
			</div>
			<div className={s.block}>
				<MdStars size={42} />
				<p className={s.text}>
					А за QR-кодом ти знайдеш всі необхідні mp3-файли для свого ефективного
					тренування.
				</p>
			</div>
		</div>

		<Button />
	</section>
);

export default AboutEtudes;
