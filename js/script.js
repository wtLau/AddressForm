
class addressForm {
    submitForm() {
        console.log('hihih');
        return $('.address-form').on('submit', function () {
            event.preventDefault();
            alert('hi')
        })
    }

    intlTel() {
        $(document).ready($("#phone").intlTelInput({
            // allowDropdown: false,
            // autoHideDialCode: false,
            autoPlaceholder: "off",
            // dropdownContainer: "body",
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            geoIpLookup: function (callback) {
                $.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            // hiddenInput: "full_number",
            initialCountry: "auto",
            // nationalMode: false,
            onlyCountries: ['us', 'gb', 'tw', 'cn', 'ca', 'do', 'hk', 'fr'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            // separateDialCode: true,
            utilsScript: "./js/utils.js"
        }));
    }
}
const addressFormCall = new addressForm()
addressFormCall.submitForm()
addressFormCall.intlTel()
