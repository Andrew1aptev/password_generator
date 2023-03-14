// Получаем элементы по их id

const output = document.getElementById("output"); // Поле вывода
const generate_btn = document.getElementById("generate"); // Кнопка чтобы выполнить функцию генерации
const copy_btn = document.getElementById("copy") // Кнопка чтобы скопировать в буфер обмена
const reset_btn = document.getElementById("reset") //Кнопка, чтобы очистить поле output

function randomString() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-"
    let result = ""

    for(let i = 0; i < 14; i++){
        const index = Math.floor(Math.random() * chars.length)
        result = result + chars[index]
    }
  output.value = result;
}
// Добавляем обработчик события click к кнопке generate_btn
generate_btn.addEventListener("click", function() {
    // Вызываем функцию randomString и выводим ее результат в поле output
    randomString();
  });
reset_btn.addEventListener("click", function(){
    output.value = ""
})
copy_btn.addEventListener("click", function() {
   navigator.clipboard.writeText(output.value)
}) 
