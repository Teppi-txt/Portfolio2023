var label = $("#study-input");

var texts = ["Web Development", "Web Designer", "Artificial Intelligence"]

async function changeColor(lengthMs) {

    while (true) {
        for (let index = 0; index < "Development".length; index++) {
            var current = label.html();
            await sleep(100)
            label.html(current.substring(0, current.length - 1))
        }
    
        await sleep(200)
        
        for (let index = 0; index <= "Design".length; index++) {
            var current = label.html();
            var addition = "Design";
            await sleep(100)
            label.html(current + addition.charAt(index))
        }
    
        await sleep(200)
    
        for (let index = 0; index < "eb Design".length; index++) {
            var current = label.html();
            await sleep(100)
            label.html(current.substring(0, current.length - 1))
        }
    
        label.html("A")
        
        for (let index = 0; index < "Artificial Intelligence".length; index++) {
            var current = label.html();
            var addition = "rtificial Intelligence";
            await sleep(100)
            label.html(current + addition.charAt(index))
        }
    
        await sleep(300)
    
        for (let index = 0; index < "Artificial Intelligence".length; index++) {
            var current = label.html();
            await sleep(100)
            label.html(current.substring(0, current.length - 1))
        }
    
        label.html("W")
        for (let index = 0; index <= "eb Development".length; index++) {
            var current = label.html();
            var addition = "eb Development";
            await sleep(100)
            label.html(current + addition.charAt(index))
        }   
    }

    console.log(label.html())
}


changeColor(1500)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}