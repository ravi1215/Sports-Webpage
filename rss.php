<?php
// Simulate fetching an RSS feed (replace with your actual logic)
$xmlString = '<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Sample RSS Feed</title>
        <item>
            <title>News Title 1</title>
            <description>News Description 1</description>
        </item>
        <item>
            <title>News Title 2</title>
            <description>News Description 2</description>
        </item>
    </channel>
</rss>';

header('Content-Type: application/xml');
echo $xmlString;
?>


