// Selettore con "not"
$("button").not("#quattro").addClass("green");

// Metodo "empty"
let dieci = "#dieci";
$(dieci).empty();

// Metodo "off"
const outline = () => $("#cinque").addClass("btn btn-outline-success");
$("button").click(outline);

const undo = () => $("#cinque").off("click", "#uno");
