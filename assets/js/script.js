document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");
    const dataInput = document.getElementById("data-input");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", async () => {
        const newData = dataInput.value;
        if (newData) {
            // Use a Netlify Function to add data to your "database"
            const response = await fetch("/.netlify/functions/addData", {
                method: "POST",
                body: JSON.stringify({ data: newData }),
            });

            if (response.ok) {
                const data = await response.json();
                const listItem = document.createElement("li");
                listItem.textContent = data.data;
                dataList.appendChild(listItem);
                dataInput.value = "";
            } else {
                console.error("Failed to add data");
            }
        }
    });
});
