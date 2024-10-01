const SUBJECT = document.getElementById('subject')
const CONTENT = document.getElementById('content')
const FILE = document.getElementById('fajl')
var list = []
var finalList = []

function tick(cBox) {
    console.log(cBox.id)
    var idNum = cBox.id.match(/\d+$/)[0];
    console.log(idNum)
    var butt = document.getElementById('butt'+idNum)
    var text = document.getElementById('text'+idNum)
    var item = finalList.find((value,index) => index == idNum)

    if (cBox.checked == true){
        butt.disabled = true;
        butt.style.textDecorationLine = 'line-through'
        //item.finished = 'true'
        console.log(item)
        fetch('strReplacer.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'idNum=' + encodeURIComponent(idNum) + '&bool=' + encodeURIComponent('true')
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
    else {
        butt.disabled = false;
        butt.style.textDecorationLine = 'none'
        //item.finished = 'false'
        console.log(item)
        fetch('strReplacer.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'idNum=' + encodeURIComponent(idNum) + '&bool=' + encodeURIComponent('false')
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
    if (text.style.display == 'block') {text.style.display = 'none'}
}

function display(butt) {
    console.log(butt.id);
    var idNum = butt.id.match(/\d+$/)[0];
    console.log(idNum);
    var text = document.getElementById('text'+idNum);
    
    if (text.style.display == 'none') {
        text.style.display = 'block'
        console.log(finalList[idNum])
        butt.innerText = finalList[idNum].subject + '▲'
    }
    else {
        text.style.display = 'none';
        butt.innerText = finalList[idNum].subject + '▼'
    }
}

window.onload = () => {
    fetch('loremIpsum.txt')
    .then(response => response.text())
    .then(data => {
        list = data.split(';');
        list.pop()
        console.log(list)
                        
        finalList = list.map(group => {
            const [subjectPair, contentPair, finishedPair] = group.split(',');
            const [subjectKey, subjectValue] = subjectPair.split(':');
            const [contentKey, contentValue] = contentPair.split(':');
            const [finishedKey, finishedValue] = finishedPair.split(':');
            return { [subjectKey]: subjectValue, [contentKey]: contentValue, [finishedKey]: finishedValue };
        });
                        
        console.log(finalList)
                        
        finalList.forEach((element,index) => {
            console.log(element)
            var checkB = document.createElement("input")
            var dropD = document.createElement('button')
            var cont = document.createElement('div')
            var text = document.createElement('div')
            dropD.innerText = element.subject+'▼'
            text.innerText = element.content
            text.style.display = 'none'
            text.style.border = '2px solid'
            text.style.margin = '4px'
            text.style.padding = '3px'
            text.style.fontFamily = 'calibri' 
            checkB.setAttribute('type','checkbox')
            checkB.setAttribute('id','checkB'+index)
            checkB.setAttribute('onclick','tick(this)')
            dropD.setAttribute('id','butt'+index)
            dropD.setAttribute('onclick','display(this)')
            text.setAttribute('id','text'+index)
            cont.appendChild(checkB)
            cont.appendChild(dropD)
            cont.appendChild(text)
            FILE.appendChild(cont)
            var values = Object.values(element)
            if (values[2] == 'true') {checkB.click(); console.log('click')}
        });
    })
    .catch(error => {
        console.error('Error fetching the file:', error);
    });
}