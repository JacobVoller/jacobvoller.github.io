const initTables = function() {
    const tables = document.getElementsByTagName("table");
    if (!tables)
        return;

    for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
        const rows = tables[tableIndex].rows;
        if (!rows)
            return;

        for (let index = 0; index < rows.length; index++) {
            const row = rows[index], 
                link = row.getElementsByTagName("a")[0];
                
            if (!row || !link)
                continue;

            const target = link.target;

            row.addEventListener("click", function(){
                if (target) {
                    window.open(link.href, "_blank");
                } else {
                    window.location = link.href;
                }
            });
        }
    }
};

window.onload = function() {
    initTables();
};