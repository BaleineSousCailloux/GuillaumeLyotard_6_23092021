const mediaPortfolioFactory = (portfolio) => {
    getMediaCard = () => {
        const mediaCard = document.createElement("article");
        mediaCard.classList.add("portfolio__content__card");
        if (videoName) {
            mediaCard.innerHTML = `
            <video class="portfolio__content__card__video" poster>
                <source src="../public/images/Photos/${surname}/${portfolio.video}" type="video/mp4">
            </video>
            <span class="portfolio__content__card__video__icon fa-solid fa-video"></span>
            <div class="portfolio__content__card__legend">
                <p class="portfolio__content__card__legend__title">${portfolio.title}</p>
                <div class="portfolio__content__card__legend__like">
                    <span class="portfolio__content__card__legend___like__cunt">${portfolio.likes}</span>
                    <span class="portfolio__content__card__legend___like__empty far fa-heart"></span>
                    <span class="portfolio__content__card__legend___like__full fas fa-heart"></span>
                </div>
            </div>
            `;
        } else {
            mediaCard.innerHTML = `
        <img class="portfolio__content__card__img" src="../public/images/Photos/${surname}/${portfolio.image}" />
        <div class="portfolio__content__card__legend">
            <p class="portfolio__content__card__legend__title">${portfolio.title}</p>
            <div class="portfolio__content__card__legend__like">
                <span class="portfolio__content__card__legend___like__cunt">${portfolio.likes}</span>
                <span class="portfolio__content__card__legend___like__empty far fa-heart"></span>
                <span class="portfolio__content__card__legend___like__full fas fa-heart"></span>
            </div>
        </div>
        `;
        }
        return mediaCard
    }
    return this;
}