function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.substring(0, display.length - 1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
