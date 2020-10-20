module.exports = function check(str, bracketsConfig) {

    let stack = [];
    if (str.length % 2 !== 0) {
        return false;
    } // проверяю скобки в строке на четность, что бы исключить строку без пары по количеству

    for (j = 0; j < str.length; j++) {
        for (i = 0; i < bracketsConfig.length; i++) { // проверяю совпадение конфига проходя по строке
            if (bracketsConfig[i][0] === str[j] && stack[stack.length - 1] !== bracketsConfig[i][1]) { //кладу открывающие скобки в стэк, если последний элемент в нем не закрывающая скобка
                stack.push(str[j]);
            } else if (bracketsConfig[i][1] === str[j]) {
                if (stack[stack.length - 1] === bracketsConfig[i][0]) { // иначе, при закрытой паре, удаляю открывающую часть из стэка
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return stack.length === 0 ? true : false;
}
