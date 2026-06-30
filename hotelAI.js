const API_KEY = "Your_API_KEY";

const hotelBtn = document.getElementById("hotelBtn");

hotelBtn.addEventListener("click", async () => {

    const prompt = document.getElementById("hotelPrompt").value;

    if (prompt === "") {
        alert("Enter your destination.");
        return;
    }

    document.getElementById("hotelResult").innerHTML =
        "Finding the best hotels...";

    const finalPrompt = `
You are a travel expert.

User Request:
${prompt}

Recommend:

Hotel Name

Price per night

Star Rating

Best Area

Nearby Attractions

Travel Tips

Return a beautiful formatted response.
`;

    try {

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    contents: [
                        {
                            parts: [
                                {
                                    text: finalPrompt
                                }
                            ]
                        }
                    ]

                })

            }
        );

        const data = await response.json();

        document.getElementById("hotelResult").innerHTML =
            data.candidates[0].content.parts[0].text;

    }

    catch (error) {

        document.getElementById("hotelResult").innerHTML =
            "Unable to get recommendations.";

        console.log(error);

    }

});