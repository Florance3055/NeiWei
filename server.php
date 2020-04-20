<?php
header("Content-Type: text/html; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');

$name = $_POST['name'];

$info = $_POST['info'];

$servername = "localhost";
$username = "neivei";
$password = "1314520250";
$dbname = "neivei";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "INSERT INTO pinglun (name, info)
VALUES ('".$name."','".$info."')";

if ($conn->query($sql) === TRUE) {
    echo "看你🐴呢？新记录插入成功！";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();