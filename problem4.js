

function findAddress(address) {
    let formatted = '';
    for (let key in address) {
        if (address.hasOwnProperty(key)) {
            formatted += address[key] + ',';
        }
    }
    return formatted.slice(0, -1); // Remove the trailing comma
}

const inputAddress = { street: 10, house: "15A", society: "Earth Perfect" };
const finalAddress = findAddress(inputAddress);

console.log(finalAddress);

// NOTE:This problem is not complete, but almost 70 percent complete. Becareful, This problem solve code type is intermediate level code.So i say  you thinks to your skill apply this problem finish. Please,Try to your learning code apply.