import { RootDialogHTML } from "./app/dialogs/root_dialog";
import { CookiesDialogHTML } from "./app/dialogs/cookies_management_dialog";
import { CookiesDivHtml } from "./app/dialogs/cookies_dialog";
import { VendorDialogHTML } from "./app/dialogs/vendor_dialog";
import { HelpDialogHtml } from "./app/dialogs/help_dialog";

import { run } from "./app/app";
import "./main.scss";
var varknoband_data;
const localize = {
    el:{
        root :{
            title: `Η Intellisoft.gr θα ήθελε την συγκατάθεσή σας
                για να χρησιμοποιήσει τα προσωπικά σας στοιχεία
                με τους παρόχους στατιστικών δεδομένων`,
            infoAds : `Εξατομικευμένες διαφημίσεις και περιεχόμενο
                    για την διευκόλυνση των επιλογών σας και για
                    την καλύτερη ανάπτυξη των υπηρεσιών μας προς εσάς`,
            infoStore : `Αποθήκευση και χρήση πληροφοριών στην συσκευή σας`,
            infoDetailsStore : `Your personal data will be processed and
                information from your device (cookies, unique
                identifiers and other device data) may be stored
                by, accessed by and shared with
                <a class="fc-vendors-list-dialog" role="button" tabindex="0" href="#">third-party vendors</a>,
                or used specifically by this site or app.`,
            infoDetailsVentors : `Some vendors may process your personal data on
                the basis of legitimate interest, which you can
                object to by managing your options below. Look
                for a link at the bottom of this page or in our
                privacy policy where you can withdraw consent.`,
            buttons:{
                consent:'Συννενώ',
                donotconsent:'Δεν συννενώ',
                manageoptions:'Επιλογές',
            }
    
        }
    },
    en:{
        root :{
            title: `Intellisoft.gr would like permission to share your
                personal data with our ad partners to allow them
                to show ads tailored to your interests`,
            infoAds : `Personalised ads
                and content, ad and content measurement,
                audience insights and product
                development`,
            infoStore : `Store and/or
                access information on a device`,
            infoDetailsStore : `Your personal data will be processed and
                information from your device (cookies, unique
                identifiers and other device data) may be stored
                by, accessed by and shared with
                <a class="fc-vendors-list-dialog" role="button" tabindex="0" href="#">third-party vendors</a>,
                or used specifically by this site or app.`,
            infoDetailsVentors : `Some vendors may process your personal data on
                the basis of legitimate interest, which you can
                object to by managing your options below. Look
                for a link at the bottom of this page or in our
                privacy policy where you can withdraw consent.`,
            buttons:{
                consent:'Consent',
                donotconsent:'Do not consent',
                manageoptions:'Manage options',
            }
    
        }
    }
    
};

(function (window) {

    var allHtml = `<div class="fc-consent-root">
            <div class="fc-dialog-overlay"></div>
            <div class="fc-dialog-container">
                ${ RootDialogHTML(localize.el) }
                ${ CookiesDialogHTML }
                ${ VendorDialogHTML }
            </div>
            ${ HelpDialogHtml }
            ${ CookiesDivHtml }
           
        </div>`;

     // populating bottom banner HTML
    document.querySelector("body").innerHTML = allHtml + document.querySelector("body").innerHTML;
   
    $.getJSON("data.json", function (json){
        varknoband_data = json;
        console.log(varknoband_data);
        run(varknoband_data);
    });
   
})(window);