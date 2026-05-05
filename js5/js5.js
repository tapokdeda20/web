function clearResult() 
{
    document.getElementById("result").textContent = "";
}


function task1() 
{
    clearResult();

    let input = prompt("Введите число:", "123");

    let result = "";
    for (let i = input.length - 1; i >= 0; i--) 
    {
        result += input[i];
    }

    document.getElementById("result").textContent = result;
}


function task2() 
{
    clearResult();

    let input = prompt("Введите число:", "111333456");

    let result = "";
    for (let i = 0; i < input.length; i++) 
    {
        let currentDigit = input[i];
        let isAlreadyAdded = false;

        for (let j = 0; j < result.length; j++) 
        {
            if (result[j] === currentDigit) 
            {
                isAlreadyAdded = true;
                break;
            }
        }

        if (!isAlreadyAdded) 
        {
            result += currentDigit;
        }
    }
    
    document.getElementById("result").textContent = result;
}


function task3() 
{
    clearResult();
    
    let number = prompt("Введите число:", "1355567");
    let digit = prompt("Введите цифру:", "5");

    let count = 0;
    for (let i = 0; i < number.length; i++) 
    {
        if (number[i] === digit[0]) 
        {
            count++;
        }
    }

    document.getElementById("result").textContent = count;
}


function task4() 
{
    clearResult();

    let input = prompt("Введите число:", "13");
    let num = Number(input);
    let binary = num.toString(2);

    let maxQueque = 1;
    let currentQueque = 1;

    for (let i = 1; i < binary.length; i++) 
    {
        if (binary[i] === binary[i - 1]) 
        {
            currentQueque++;
        } 
        else 
        {
            if (currentQueque > maxQueque) 
            {
                maxQueque = currentQueque;
            }
            currentQueque = 1;
        }
    }
    if (currentQueque > maxQueque) 
    {
        maxQueque = currentQueque;
    }

    document.getElementById("result").textContent = maxQueque;
}


function task5() 
{
    clearResult();

    let str = prompt("Введите строку:", "фывфавыапрс");

    for (let i = 0; i < str.length; i++)
    {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) 
        {
            if (str[j] === char) 
            {
                count++;
            }
        }
        if (count === 1) 
        {
            document.getElementById("result").textContent = char;
            return;
        }
    }

    document.getElementById("result").textContent = "Нет";
}


function task6() 
{
    clearResult();

    let length = prompt("Введите длину строки:", "5");

    length = Number(length);

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) 
    {
        let index = Math.floor(Math.random() * chars.length);
        result += chars[index];
    }

    document.getElementById("result").textContent = result;
}

function task7() 
{
    clearResult();

    let str = prompt("Введите строку:", "позволяеткопироватьтекстиз");

    let result = "";
    let seen = {};

    for (let i = 0; i < str.length; i++) 
    {
        let char = str[i];
        if (!seen[char]) 
        {
            result += char;
            seen[char] = true;
        }
    }

    document.getElementById("result").textContent = result;
}