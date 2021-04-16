$.getJSON("data.json", function (data) {
    data.questions.forEach((q, i) => {
        $(`<section id= "${q.question_id}">
            <h3 class="question">${q.question}</h3>
            <div class="choices"> 
            
            </section>`
            ).insertBefore("#submit");
        
        q.options.forEach((o, ia) => {
            let option_id = o.option_text.replace(/ /g, "")

            if (o.option_img != "") {
                $(`#${q.question_id} .choices`).append(
                    `<label class="choice">
                        <input id="${option_id}" type="radio" name="${q.question}" value="${o.result}" />
                        <img src="${o.option_img}" />
                        <h4>${o.option_text}</h4>
                    </label>`
                );
            }
            else {
                $(`#${q.question_id} .choices`).append(
                    `<label class="choice-text">
                        <input type="radio" name="${q.question}" value="${o.result}" />
                        <div>
                            <h4> ${o.option_text} </h4>
                        </div>
                    </label>
                </div>
                </div> `
                );
            }

        });
        $(`</div>`).insertBefore('#submit');
    })

});

//find result

$('#submit').on('click', function (e) {
    // gather all checked radio-button values
    let choices = $("input[type='radio']:checked").map(function (i, radio) {
        return $(radio).val();
    }).toArray();

    console.log(choices)
    const results = document.querySelector("#results");

    $.getJSON("data.json", function (data) {
        let num_qs = data.questions.length;

        if (choices.length != num_qs) {
            document.querySelector('.results-page').innerHTML =
            `<div id="results">
            <h1>
                HULK MAD !
                <br>
                HULK SMASH !
                <br>
                Must answer all questions!!
            </h1>
            <div class="hero">
                <img src="./images/hulk.jpeg" alt="Hero">
            </div>`
            showResults();
        }
        else {
            document.querySelector('.results-page').innerHTML = 
            `<div id="results">
            <h1>
                Your Marvel <br>
                <span>
                <span class="blue">s</span>
                <span class="red">u</span>
                <span class="blue">p</span>
                <span class="red">e</span>
                <span class="blue">r</span><br>
                <span class="red">h</span>
                <span class="blue">e</span>
                <span class="red">r</span>
                <span class="blue">o</span> 
                <br> 
                </span>
                is <br>
                <span id="answer">Thor</span>
            </h1>
            <div class="hero">
                <img src="./images/thor.jpg" alt="Hero">
            </div>
        </div>`;
            rep = {};
            maxVal = 0;
            maxChoice = choices[0];
            for (let choice in choices) {
                choice = choices[choice]
                if (rep[choice] === undefined) {
                    rep[choice] = 1;
                    if (1 > maxVal) {
                        maxVal = 1;
                        maxChoice = choice;
                    }
                }
                else {
                    rep[choice] = rep[choice] + 1;
                    if (rep[choice] > maxVal) {
                        maxVal = rep[choice];
                        maxChoice = choice;
                    }
                }
            }

            $.getJSON("data.json", function (data) {
                let el = data.results[maxChoice[0]];
                console.log(el)
                $('#answer').text(`${el.result_text} !`);
                $('.hero img').attr("src", `${el.result_img}`)
                showResults ();
            });

        }
    });
    function showResults (){
        const sections = document.querySelectorAll("section");
        const results = document.querySelector(".results-page");
        sections.forEach(section => {section.style.display = "none"});
        results.style.opacity = "1";
        results.style.display = "block";
    }
});

window.onclick = (e) => {
    if (e.target != document.querySelector(".results-page")) {
        const sections = document.querySelectorAll("section");
        const results = document.querySelector(".results-page");
        sections.forEach(section => {section.style.display = "flex"});
        results.style.opacity = "0";
        results.style.display = "none";
    }
}

$(".choice img").click(function(){
    $(this).prev().attr('checked',true);
})
