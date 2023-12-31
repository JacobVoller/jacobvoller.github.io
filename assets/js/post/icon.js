window.onload = function()
{
    const initButton = function (id, css)
    {
        css = "val-middle " + css;
        const button = document.getElementById(id);
        button.addEventListener("click", function()
        {
            graphic.className = css;
        });
    };

    const initDownload = function ()
    {
        const canvas = document.getElementById("canvas");
        const button = document.getElementById("download");
        button.addEventListener("click", function()
        {
            screenshot(canvas, "icon");
        });
    };

    const initFontAwesomeCss = function ()
    {
        const input = document.getElementById("fa-css");
        const events = [
            "keydown",
            "keyup"
        ];

        events.forEach(function(event)
        {
            input.addEventListener(event, function()
            {
                iElement.className = input
                    .value
                    .toLowerCase()
                    .replace("da-", "fa-");
            });
        });

        input.value = "fa-solid fa-person";
    };

    const graphic = document.getElementById("canvas");
    const iElement = graphic.querySelector('i');
    initButton("home", "home");
    initButton("inverse-home", "inverse-home");
    initButton("folder", "folder");
    initButton("inverse-folder", "inverse-folder");
    initDownload();
    initFontAwesomeCss();
};