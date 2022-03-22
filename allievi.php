<?php
$s="localhost";
$u="root";
$p="";
$d="javascript";
$conn = new mysqli($s, $u, $p, $d);
if ($conn->connect_errno) {
  die("Connessione in errore: " . $conn->connect_error);
}
//$data = $_GET["id"];
$sql="SELECT * FROM allievi WHERE id=?";
$stmt=$conn->prepare($sql);
$stmt->bind_param("i",$_GET["id"]);
$stmt->execute();
$result=$stmt->get_result();
$data=$result->fetch_assoc();
if (is_null($data)) {
  die("Record non trovato.");
};
header('Content-Type: application/json');
//specifico formato json
echo json_encode($data);
/*
vuole sapere il numero di righe, questa funzione deve sostituire la variabile TOT
parte 2 parte grafica
stampare la scheda allievo
*/
?>