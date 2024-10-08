<?php
// Simulate handling form submission (replace with your actual logic)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the form data (e.g., save to a database, send email, etc.)

    // Simulate a successful response (replace with your actual response)
    $response = array(
        'success' => true,
        'message' => 'Form submitted successfully',
        'formData' => array(
            'name' => $name,
            'email' => $email,
            'message' => $message
        )
    );

    // Convert the response to XML
    $xmlString = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xmlString .= '<response>';
    foreach ($response as $key => $value) {
        $xmlString .= "<$key>" . htmlspecialchars($value) . "</$key>";
    }
    $xmlString .= '</response>';

    header('Content-Type: application/xml');
    echo $xmlString;
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(array('error' => 'Invalid request method'));
}
?>

