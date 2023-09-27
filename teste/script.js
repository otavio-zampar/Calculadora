$(document).ready(function () {
    const data = [
        { option: "bhaskara", message: "Bom dia" },
        { option: "pitágoras", message: "Boa noite" },
        { option: "área do círculo", message: "Olá, como vai?" },
        // Adicione outras opções com mensagens personalizadas aqui
    ];
    

    $("#search-input").on("input", function () {
        const query = $(this).val().toLowerCase().trim();
        const resultsList = $("#lista");
        
        resultsList.empty();

        if (query.length === 0) {
            $(".pesquisa").hide();
            return;
        }

        const filteredResults = data.filter(item => item.option.toLowerCase().includes(query));

        if (filteredResults.length > 0) {
            filteredResults.forEach((result, index) => {
                setTimeout(() => {
                    const listItem = $("<li>").text(result.option);
                    listItem.addClass("resposta");
                    listItem.click(() => {
                        alert(result.message);
                    });
                    // listItem.on("click", alert());
                    resultsList.append(listItem);
                    // resultsList
                }, 1 * index); // Atraso de 100ms para cada item
            });
            $(".pesquisa").show();
        } else {
            $(".pesquisa").hide();
        }
    });
});
