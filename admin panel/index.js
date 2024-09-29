document.addEventListener("DOMContentLoaded", function () {
    // الحصول على العنصر الذي يحتوي على الرقم
    const numberElement = document.querySelector(".number");

    if (numberElement) {
        // قراءة القيمة النصية (مثل 1/12)
        const fractionText = numberElement.textContent.trim();

        // تقسيم النص للحصول على البسط والمقام
        const [numerator, denominator] = fractionText.split("/").map(Number);

        // حساب النسبة المئوية
        if (denominator && !isNaN(numerator) && !isNaN(denominator)) {
            const percentage = (numerator / denominator) * 100;

            // تطبيق العرض بناءً على النسبة المئوية
            const boxElement = document.querySelector(".cont-line");
            if (boxElement) {
                boxElement.style.width = `${percentage}%`;
            }
        }
    }
});





//البوكس الثاني




document.addEventListener("DOMContentLoaded", function () {
    // الحصول على العنصر الذي يحتوي على الرقم
    const numberElement = document.querySelector(".number-2");

    if (numberElement) {
        // قراءة القيمة النصية (مثل 1/12)
        const fractionText = numberElement.textContent.trim();

        // تقسيم النص للحصول على البسط والمقام
        const [numerator, denominator] = fractionText.split("/").map(Number);

        // حساب النسبة المئوية
        if (denominator && !isNaN(numerator) && !isNaN(denominator)) {
            const percentage = (numerator / denominator) * 100;

            // تطبيق العرض بناءً على النسبة المئوية
            const boxElement = document.querySelector(".cont-line-2");
            if (boxElement) {
                boxElement.style.width = `${percentage}%`;
            }
        }
    }
});