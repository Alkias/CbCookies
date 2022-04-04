export const VendorDialogHTML =
`<div class="fc-dialog fc-vendor-preferences-dialog" role="dialog" aria-label="" tabindex="0" style="display: none !important;">
    <div class="fc-dialog-header">
        <button class="fc-dialog-header-back-button fc-vendor-preferences-back" role="button" aria-label="" tabindex="0"><i class="material-icons">arrow_back</i></button>
        <p>Vendor preferences</p>
    </div>

    <!-- Loop Conainer  -->
    <div class="fc-dialog-content">
        <div class="fc-dialog-scrollable-content">
            <div class="fc-header fc-dialog-restricted-content">
                <h1>Confirm our vendors</h1>
            </div>
            <div class="fc-body fc-dialog-restricted-content">
                <p>Vendors can use your data to provide services.
                    Declining a vendor can stop them from using the
                    data that you shared.</p>
            </div>
            <div class="fc-preferences-container">
                <div class="fc-preference-divider">
                    <p>TCF vendors</p>
                    <button class="fc-help-tip" data-title="What does TCF mean?" data-full-info="" role="tooltip" aria-label="" tabindex="0"><i class="material-icons" data-title="What does TCF mean?" data-full-info="">help_outline</i></button>
                </div>

                <div class="fc-preference-container">
                    <div class="fc-preference-title">
                        <h2>Index Exchange, Inc. </h2>
                    </div>
                    <div class="fc-preference-description">
                        <div class="fc-iab-vendor-storage-info-container">
                            Cookie duration: 395 (days). Cookie
                            duration resets each session. Uses other
                            forms of storage.</div>
                        <div class="fc-preference-container-divider">
                        </div>
                        <a class="fc-vendor-purposes-features-list" role="button" aria-label="" tabindex="0" data-vendor-id="10" href="#">View details</a>
                        |
                        <a class="fc-vendor-policy-link" role="link" aria-label="" tabindex="0" data-policy-link="https://www.indexexchange.com/privacy" href="#">Privacy policy<i class="material-icons fc-launch-icon" data-policy-link="https://www.indexexchange.com/privacy">launch</i></a>
                    </div>
                    <label class="fc-preference-slider-container fc-consent-preference-container"><span class="fc-preference-slider-label">Consent</span><span class="fc-preference-slider">

                            <input type="checkbox" role="button" aria-label="" aria-pressed="false" tabindex="0" class="fc-preference-consent gvl-vendor" data-id="10">
                            <span class="fc-slider-el"></span></span></label><label class="fc-preference-slider-container fc-legitimate-interest-preference-container" for="fc-preference-slider-gvl-vendor-10"><span class="fc-preference-slider-label">Legitimate
                            interest<button class="fc-help-tip" data-title="How does legitimate interest work?" data-full-info="" role="tooltip" aria-label="" tabindex="0"><i class="material-icons" data-title="How does legitimate interest work?" data-full-info="">help_outline</i></button></span><span class="fc-preference-slider">

                            <input type="checkbox" role="button" aria-label="" aria-pressed="true" tabindex="0" class="fc-preference-legitimate-interest gvl-vendor" data-id="10" id="fc-preference-slider-gvl-vendor-10" checked="">
                            <span class="fc-slider-el"></span></span></label>
                </div>
                
            </div>
        </div>
    </div>

    <div class="fc-footer-buttons-container">
        <div class="fc-footer-buttons-divider"></div>
        <div class="fc-footer-buttons">
            <button class="fc-button fc-vendor-preferences-accept-all fc-secondary-button" role="button" aria-label="" tabindex="0">
                <div class="fc-button-background"></div>
                <p class="fc-button-label">Accept all</p>
            </button>
            <button class="fc-button fc-confirm-choices fc-primary-button" role="button" aria-label="" tabindex="0">
                <div class="fc-button-background"></div>
                <p class="fc-button-label">Confirm choices</p>
            </button>
        </div>
    </div>
</div>`