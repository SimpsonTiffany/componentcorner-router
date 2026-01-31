import "./Hero.css";

export default function Hero({ title, subtitle, ctaText, image }) {
    return (
        <section className="hero">
            <div className="hero__content">
                <h2 className="hero__title">{title}</h2>
                <p className="hero__subtitle">{subtitle}</p>
                <button className="hero__button" type="button">{ctaText}</button>
            </div>

            <img className="hero__image" src={image} alt={title} />
        </section>
    );
}
