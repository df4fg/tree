function copyCode(event) {
    const codeElement = event.target;
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const notification = codeElement.nextElementSibling;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 1000);
    }).catch(err => {
        console.error('فشل النسخ:', err);
    });
}




const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    const spanText = number.querySelector('span').textContent;
    const fraction = spanText.split('/');
    const numerator = parseInt(fraction[0]); // العدد الأعلى (1, 2, 3)
    const denominator = parseInt(fraction[1]); // العدد الأسفل (6)

    // حساب نسبة العرض بناءً على الرقم
    const percentage = (numerator / denominator) * 100;

    // تحديث عرض العنصر .color بناءً على النسبة
    const colorElement = number.querySelector('.color');
    colorElement.style.width = `${percentage}%`;
});