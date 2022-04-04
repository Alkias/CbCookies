export const template = (cookies_data)=>{        

        $.each( cookies_data, function ( index, obj ) {
            var cookiesDetails = "<dl>";
            for ( let i = 0; i < obj.cookiesDetails.length; i++ ){
                cookiesDetails += `<dt>${ obj.cookiesDetails[ i ].name}</dt>`
                cookiesDetails += `<dd>${ obj.cookiesDetails[ i ].description}</dd>`
            }
            cookiesDetails += "</dl>";
    
            $( '#cookies-content-wrapper' ).append(
                ` <div class="fc-preference-container">
                    <div class="fc-preference-title">
                        <h2>${obj.name}</h2>
                    </div>
                    <div class="fc-preference-description">${obj.description}
                        <!-- More Details Info -->
                        <a class="fc-purpose-feature-more-info" role="button" aria-label="" tabindex="0" data-name="${obj.dataName }" data-legal-description="${ cookiesDetails}" href="#">View details</a>
                    </div>
                    <label
                        class="fc-preference-slider-container fc-consent-preference-container">
                        <span class="fc-preference-slider-label">Consent</span>
                        <span class="fc-preference-slider">
                                <input type="checkbox" role="button" aria-label="" aria-pressed="false" tabindex="0" class="fc-preference-consent purpose ${obj.systemName}" id="${obj.systemName}">
                                <span class="fc-slider-el"></span>
                        </span>
                    </label>
                </div>`
            );
        } );
   
}
