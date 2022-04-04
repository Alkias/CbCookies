export const RootDialogHTML = (localize) => {
    return `<div class="fc-dialog fc-choice-dialog" role="dialog" aria-label="" tabindex="0">
    <div class="fc-dialog-content">
        <div class="fc-dialog-scrollable-content">
            <div class="fc-header fc-dialog-restricted-content">
                <h2
                    class="fc-site-macro-logo fc-header-image-container">
                    <div class="fc-header-image-container">
                        <img class="fc-header-image" alt="Welcome to BBC.com" src="logo.png"></div>
                </h2>
                <h1>${localize.root.title}</h1>
            </div>
            <div class="fc-stacks fc-dialog-restricted-content">
                <ul>
                    <li>
                        <div class="fc-stack-icon">
                            <i class="material-icons">perm_identity</i>
                        </div>
                        <span class="fc-stack-name">${localize.root.infoAds}</span>
                    </li>
                    <li>
                        <div class="fc-stack-icon">
                            <i class="material-icons">devices</i>
                        </div>
                        <span class="fc-stack-name">${localize.root.infoStore}</span>
                    </li>
                </ul>
            </div>
            <button class="fc-faq-header fc-dialog-restricted-content" role="button" aria-label="" tabindex="0">
                <div class="fc-faq-icon">
                    <i class="material-icons faq-section-closed">expand_more</i><i class="material-icons faq-section-open" style="display: none !important;">remove</i>
                </div><span class="fc-faq-label">Learn more</span>
            </button>
            <div class="fc-faq-contents" style="display: none !important;">
                <ul class="fc-dialog-restricted-content">
                    <li>
                        <a class="fc-faq-item" role="button" aria-label="" tabindex="0" href="#" data-faq-item-index="0"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">How can I change my choice?</span></a>
                    </li>
                    <li>
                        <a class="fc-faq-item" role="button" aria-label="" tabindex="0" href="#" data-faq-item-index="1"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">What if I don't consent?</span></a>
                    </li>
                    <li>
                        <a class="fc-faq-item" role="button" aria-label="" tabindex="0" href="#" data-faq-item-index="2"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">How does legitimate interest work?</span></a>
                    </li>
                    <li>
                        <a class="fc-faq-item" role="button" aria-label="" tabindex="0" href="#" data-faq-item-index="3"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">Do I have to consent to everything?</span></a>
                    </li>
                </ul>
            </div>
            <div class="fc-footer fc-dialog-restricted-content">
                <p>${localize.root.infoDetailsStore}</p>
                <p>${localize.root.infoDetailsVentors}</p>
            </div>
        </div>
    </div>

    <div class="fc-footer-buttons-container">
        <div class="fc-footer-buttons-divider"></div>

        <div class="fc-footer-buttons">
            <button class="fc-button fc-cta-consent fc-primary-button" role="button" aria-label="" tabindex="0">
                <div class="fc-button-background"></div>
                <p class="fc-button-label">${localize.root.buttons.consent}</p>
            </button>
            <button class="fc-button fc-cta-do-not-consent fc-secondary-button" role="button" aria-label="" tabindex="0">
                <div class="fc-button-background"></div>
                <p class="fc-button-label">${localize.root.buttons.donotconsent}</p>
            </button>
        </div>

        <button class="fc-button fc-cta-manage-options" role="button" aria-label="" tabindex="0">
            <p class="fc-manage-options-third-button-label">${localize.root.buttons.manageoptions}</p>
        </button>

    </div>
</div>`;
}