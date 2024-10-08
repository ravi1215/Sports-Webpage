<?php
// Simulate fetching live scores (replace with your actual logic)
$liveScores = array(
    'team1' => 'Team A',
    'team2' => 'Team B',
    'score' => '2 - 1'
);

// Convert the live scores to XML
$xmlString = '<?xml version="1.0" encoding="UTF-8"?>
<liveScores>
    <team1>' . $liveScores['team1'] . '</team1>
    <team2>' . $liveScores['team2'] . '</team2>
    <score>' . $liveScores['score'] . '</score>
</liveScores>';

header('Content-Type: application/xml');
echo $xmlString;
?>

