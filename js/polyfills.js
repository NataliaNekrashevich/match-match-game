Array.prototype.shuffle = function () {
    let newArr = this.slice(), i = this.length, randIndex;
    while (i) {
        randIndex = Math.floor(Math.random() * i);
      [newArr[i-1], newArr[randIndex]] = [newArr[randIndex], newArr[i-1]];
      i--;
    }
    return newArr;  
}

Array.prototype.getRandItemsRange = function (numItems) {
    numItems = typeof numItems === 'number' ? numItems : parseInt(numItems);

    if (this.length <= numItems) return this;
    
    let newArr = this.slice(), resArr = [];
    while(resArr.length !== numItems) {
        resArr.push(newArr.splice(Math.floor(Math.random()*newArr.length), 1)[0]);
    }
    return resArr;
}