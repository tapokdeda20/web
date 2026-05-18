function clearResult()
{
    document.getElementById("result").textContent = "";
}

function showResult(text)
{
    document.getElementById("result").textContent = text;
}

function readArray(text, defaultValue)
{
    let input = prompt(text, defaultValue);
    return JSON.parse(input);
}

function getMaxDifference(arr)
{
    if (arr.length === 0)
    {
        return 0;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }

        if (arr[i] > max)
        {
            max = arr[i];
        }
    }

    return max - min;
}

function getUniqueArray(arr)
{
    return Array.from(new Set(arr));
}

function getDoneObjects(arr)
{
    let result = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].isDone === true || arr[i].idDone === true)
        {
            result.push(arr[i]);
        }
    }

    return result;
}

function getMoreThanNumber(arr, number)
{
    let result = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > number)
        {
            result.push(arr[i]);
        }
    }

    return result;
}

function flattenArray(arr)
{
    let result = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (Array.isArray(arr[i]))
        {
            result = result.concat(flattenArray(arr[i]));
        }
        else
        {
            result.push(arr[i]);
        }
    }

    return result;
}

function countZeroPairs(arr)
{
    let counts = new Map();
    let pairs = 0;

    for (let i = 0; i < arr.length; i++)
    {
        let number = arr[i];
        let opposite = -number;
        let oppositeCount = counts.get(opposite) || 0;

        if (oppositeCount > 0)
        {
            pairs++;
            counts.set(opposite, oppositeCount - 1);
        }
        else
        {
            counts.set(number, (counts.get(number) || 0) + 1);
        }
    }

    return pairs;
}

function countZeroTriples(arr)
{
    let used = [];
    let triples = 0;

    for (let i = 0; i < arr.length; i++)
    {
        used[i] = false;
    }

    for (let i = 0; i < arr.length; i++)
    {
        if (used[i])
        {
            continue;
        }

        for (let j = i + 1; j < arr.length; j++)
        {
            if (used[j])
            {
                continue;
            }

            for (let k = j + 1; k < arr.length; k++)
            {
                if (!used[k] && arr[i] + arr[j] + arr[k] === 0)
                {
                    used[i] = true;
                    used[j] = true;
                    used[k] = true;
                    triples++;
                    j = arr.length;
                    break;
                }
            }
        }
    }

    return triples;
}

function* random(n, m)
{
    while (true)
    {
        yield Math.floor(Math.random() * (m - n + 1)) + n;
    }
}

function* padovan()
{
    let first = 1;
    let second = 1;
    let third = 1;

    while (true)
    {
        yield first;

        let next = first + second;
        first = second;
        second = third;
        third = next;
    }
}

function isPrime(number)
{
    if (number < 2)
    {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++)
    {
        if (number % i === 0)
        {
            return false;
        }
    }

    return true;
}

function* primeNumbers()
{
    let number = 2;

    while (true)
    {
        if (isPrime(number))
        {
            yield number;
        }

        number++;
    }
}

function countWordsAndLetters(str)
{
    let letters = new Map();
    let words = new Map();
    let cleanWords = str.toLowerCase().match(/[а-яёa-z0-9]+/gi) || [];

    for (let i = 0; i < str.length; i++)
    {
        let char = str[i].toLowerCase();

        if (/[а-яёa-z0-9]/i.test(char))
        {
            letters.set(char, (letters.get(char) || 0) + 1);
        }
    }

    for (let i = 0; i < cleanWords.length; i++)
    {
        let word = cleanWords[i].toLowerCase();
        words.set(word, (words.get(word) || 0) + 1);
    }

    return {
        letters: letters,
        words: words
    };
}

function mapToText(map)
{
    let result = "";

    for (let item of map)
    {
        result += item[0] + ": " + item[1] + "\n";
    }

    return result;
}

function isPrimeBigInt(number)
{
    if (number < 2n)
    {
        return false;
    }

    for (let i = 2n; i * i <= number; i++)
    {
        if (number % i === 0n)
        {
            return false;
        }
    }

    return true;
}

function getPrime(n)
{
    let count = 0n;
    let number = 2n;

    while (true)
    {
        if (isPrimeBigInt(number))
        {
            count++;

            if (count === BigInt(n))
            {
                return number;
            }
        }

        number++;
    }
}

function task1()
{
    clearResult();

    let arr = readArray("Введите массив чисел:", "[1, 7, 4, 20, 4, 7, 1]");
    let objects = readArray("Введите массив объектов:", "[{\"id\":1,\"isDone\":true},{\"id\":2,\"isDone\":false},{\"id\":3,\"isDone\":true}]");

    let result = "Максимальная разница: " + getMaxDifference(arr) + "\n";
    result += "Массив без повторов: " + JSON.stringify(getUniqueArray(arr)) + "\n";
    result += "Объекты с isDone true: " + JSON.stringify(getDoneObjects(objects));

    showResult(result);
}

function task2()
{
    clearResult();

    let arr = readArray("Введите массив чисел:", "[1, 4, 6, 3, 2]");
    let number = Number(prompt("Введите число:", "2"));
    let multiArray = readArray("Введите многомерный массив:", "[1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]");

    let result = "Элементы больше числа: " + JSON.stringify(getMoreThanNumber(arr, number)) + "\n";
    result += "Плоский массив: " + JSON.stringify(flattenArray(multiArray));

    showResult(result);
}

function task3()
{
    clearResult();

    let arr = readArray("Введите массив чисел:", "[-1, 2, 4, 7, -4, 1, -2]");

    let result = "Количество пар с суммой 0: " + countZeroPairs(arr) + "\n";
    result += "Количество троек с суммой 0: " + countZeroTriples(arr);

    showResult(result);
}

function task4()
{
    clearResult();

    let n = Number(prompt("Минимальное число для random(n, m):", "1"));
    let m = Number(prompt("Максимальное число для random(n, m):", "10"));
    let count = Number(prompt("Сколько чисел вывести:", "10"));

    let randomGenerator = random(n, m);
    let padovanGenerator = padovan();
    let primeGenerator = primeNumbers();

    let randomResult = [];
    let padovanResult = [];
    let primeResult = [];

    for (let i = 0; i < count; i++)
    {
        randomResult.push(randomGenerator.next().value);
        padovanResult.push(padovanGenerator.next().value);
        primeResult.push(primeGenerator.next().value);
    }

    let result = "Случайные числа: " + JSON.stringify(randomResult) + "\n";
    result += "Последовательность Падована: " + JSON.stringify(padovanResult) + "\n";
    result += "Простые числа: " + JSON.stringify(primeResult);

    showResult(result);
}

function task5()
{
    clearResult();

    let str = prompt("Введите строку:", "мама мыла раму мама");
    let n = Number(prompt("Какое простое число найти по счету:", "10"));
    let counts = countWordsAndLetters(str);

    let result = "Буквы:\n" + mapToText(counts.letters) + "\n";
    result += "Слова:\n" + mapToText(counts.words) + "\n";
    result += n + "-е простое число: " + getPrime(n).toString();

    showResult(result);
}
