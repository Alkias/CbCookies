export const CookiesDialogHTML =
`<div class="fc-dialog fc-data-preferences-dialog" role="dialog" aria-label="" tabindex="0" style="display: none !important;">
    <div class="fc-dialog-header">
        <button class="fc-dialog-header-back-button fc-data-preferences-back" role="button" aria-label="" tabindex="0"><i class="material-icons">arrow_back</i></button>
        <p>Data preferences</p>
    </div>

    <div class="fc-dialog-content">
        <div class="fc-dialog-scrollable-content">
            <div class="fc-header fc-dialog-restricted-content">
                <h1>Manage your data</h1>
            </div>
            <div class="fc-body fc-dialog-restricted-content">
                <p>You can choose how your personal data is used. Vendors want your permission to do the following:</p>
            </div>
            <div id="cookies-content-wrapper" class="fc-preferences-container">

                <!-- Loop Conainer  -->
                <div class="fc-preference-container">
                    <div class="fc-preference-title">
                        <h2>Store and/or access information on a device</h2>
                    </div>
                    <div class="fc-preference-description">Cookies, device identifiers, or other information can be stored or accessed on your device for the
                        purposes presented to you.
                        <!-- More Details Info -->
                        <a class="fc-purpose-feature-more-info" role="button" aria-label="" tabindex="0" data-name="Store and/or access information on a device" data-legal-description="Αυτά τα Cookies είναι δικά μας" href="#">View details</a>
                    </div>
                    <label class="fc-preference-slider-container fc-consent-preference-container">
                        <span class="fc-preference-slider-label">Consent</span>
                        <span class="fc-preference-slider">
                            <input type="checkbox" role="button" checked="checked" disabled="disabled" aria-label="" aria-pressed="false" tabindex="0" class="fc-preference-consent purpose" data-id="1">
                            <span class="fc-slider-el"></span>
                        </span>
                    </label>
                </div>
                
            </div>

            <!-- Ventors Button -->
            <div class="fc-navigation fc-dialog-restricted-content" style="display: none;">
                <button class="fc-navigation-button fc-manage-vendors" role="button" aria-label="" tabindex="0">
                    <p class="fc-navigation-button-label">Vendor preferences</p>
                </button>
            </div>

        </div>
    </div>

    <div class="fc-footer-buttons-container">
        <div class="fc-footer-buttons-divider"></div>
        <div class="fc-footer-buttons">
            <button class="fc-button fc-data-preferences-accept-all fc-secondary-button" role="button" aria-label="" tabindex="0">
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