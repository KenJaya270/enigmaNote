<?php

// koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "enigma_note");

function register($data)
{
    global $conn;

    $username = $data["username"];
    $email = $data["email"];
    $pass = mysqli_real_escape_string($conn, $data["pass"]);
    $repeatPass = mysqli_real_escape_string($conn, $data["repeatPass"]);

    // apakah username dgn nama yg sama sudah ada
    $result = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
    if (mysqli_fetch_assoc($result)) {
        echo "<script>
            alert('username sudah terdaftar');
        </script>";
        return false;
    }

    // apakah email dgn nama yg sama sudah ada
    $result = mysqli_query($conn, "SELECT * FROM users WHERE email = '$email'");
    if (mysqli_fetch_assoc($result)) {
        echo "<script>
            alert('email sudah terdaftar');
        </script>";
        return false;
    }

    // apakah apakah rptPass sudah sama
    if ($repeatPass !== $pass) {
        echo "<script>
            alert('password tidak sama');
        </script>";
        return false;
    };

    // encrypt password
    $pass = password_hash($pass, PASSWORD_DEFAULT);

    mysqli_query($conn, "INSERT INTO users VALUES (
                NULL, '$username', '$email', '$pass'
    )");

    return mysqli_affected_rows($conn);
}
