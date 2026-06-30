
const button = document.getElementById("generateTrip");

const loading = document.getElementById("loading");

const responseBox = document.getElementById("aiResponse");

button.addEventListener("click", async () => {

    const prompt =
        document.getElementById("userPrompt").value.trim();

    if(prompt===""){

        alert("Please describe your trip.");

        return;

    }

    loading.classList.remove("hidden");

    responseBox.classList.add("hidden");

    try{

        const response = await fetch(

`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

contents:[

{

parts:[

{

text:prompt

}

]

}

]

})

}

);

const data=await response.json();

const text=data.candidates[0].content.parts[0].text;

loading.classList.add("hidden");

responseBox.classList.remove("hidden");

responseBox.innerText=text;

}

catch(error){

loading.classList.add("hidden");

responseBox.classList.remove("hidden");

responseBox.innerText="Something went wrong.";

console.log(error);

}

});