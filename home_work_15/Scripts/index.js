// в HTML прописываем <script src="Scripts/index.js" type="module"></script>

import file1 from '../JSONs/book1.json' with { type: 'json' };
import file2 from '../JSONs/book2.json' with { type: 'json' };
import file3 from '../JSONs/book3.json' with { type: 'json' };


const parsedData1 = JSON.stringify(file1);
const parsedData2 = JSON.stringify(file2);
const parsedData3 = JSON.stringify(file3);

var res = [parsedData1, parsedData2, parsedData3];

const library = {
    titleSearch: function (title) {
        for (let el of res) {
            el = JSON.parse(el)
            if (title == el.name) {
                return el.name;
            } 
        }
    },

    info: function () {
        for (let el of res) {
            el = JSON.parse(el)
            let s = `\n\nНазвание книги: ${el.name}\nГод издания: ${el.publicationDate}\nОписание: ${el.about}\n----------------------------------------------------------------------------------------`
            let bookInfo = document.querySelector('#box');
            bookInfo.innerText += s;
        }
    }
}

console.log(library.titleSearch('Грокаем алгоритмы'));
library.info();
