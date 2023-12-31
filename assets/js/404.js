window.onload = function()
{
    var attemptedUrl = document.getElementById("attemptedUrl");
    if (attemptedUrl)
    {
        attemptedUrl.innerHTML = window.location.href;
    }
    
    var counter = document.getElementById("counter");
    if (counter)
    {
        var count = 20;
        var decrement = function()
        {
            count = count - 1;

            if (count == 0)
            {
                window.location.href = "https://jacobvoller.com/";
            }
            else
            {
                counter.innerHTML = count;

                setTimeout(function()
                {
                    decrement();   
                }, 1000);
            }
        }

        decrement();
    }
}
