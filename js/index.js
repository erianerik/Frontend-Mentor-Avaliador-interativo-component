function $(elementName) {
    return document.querySelectorAll(elementName);
}

document.addEventListener("DOMContentLoaded", () => {
    const mainRatingClassList = $('.main__rating')[0].classList;
    const formRatingElement = $('.main__rating__form')[0];
    const ratingInputsElement = $('.form__fieldset__rating-button');
    const ratingThanksElement = $('.main__rating__thanks')[0];
    let ratingValue;

    function validateFormRadio() {
        let validForm = false;

        ratingInputsElement.forEach((ratingInput) => {
            if (!ratingInput.checked) { return; };
            validForm = ratingInput.checked;
            ratingValue = ratingInput.value;
        });

        if (!validForm) {
            mainRatingClassList.add('submit-error')
            setTimeout(() => mainRatingClassList.remove('submit-error'), 500);
        }

        return validForm;
    }

    function showRatingThanks() {
        formRatingElement.style.display = 'none';
        ratingThanksElement.style.display = 'flex';
        $('#rating-value')[0].innerText = ratingValue;
    }

    formRatingElement.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validateFormRadio()) { return; }
        showRatingThanks();
    });

});