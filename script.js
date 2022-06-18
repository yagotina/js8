// Дано:
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

// 1. Объединить массивы destination, native, hero в общий массив rainbow.
rainbow = destination.concat(native, hero);

// 2. Сделать реверс элементов полученного массива rainbow.
rainbow.reverse();

// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
rainbow[0] = 'Richard';
rainbow.splice(3, 0, 'Gave','Battle');
rainbow[6] = 'Vain';

//4. Вывести элементы полученного массива в html в виде
background = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors = [];

for(i = 0; i < rainbow.length; i++) {
    colors.push(`
        <div>
            <div class="circle" style="background: ${background[i]}"></div>
            <div>${rainbow[i]}</div>
        </div>
    `);
}
document.write(`<div class="container">${colors.join('')}</div>`);