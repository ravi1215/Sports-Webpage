$(document).ready(function () {
    // Dynamic heading color change
    setInterval(function () {
        var randomColor = getRandomColor();
        $('#dynamic-heading').css('color', randomColor);
    }, 3000);

    // Fetch sports news using AJAX and RSS
    $.ajax({
        url: 'rss.php',
        type: 'GET',
        dataType: 'xml',
        success: function (data) {
            // Process the XML data and update the DOM
            displayRssFeed(data.xml);
        },
        error: function () {
            console.error('Error fetching RSS feed.');
        }
    });

    // Fetch live scores using AJAX
    $.ajax({
        url: 'live-scores.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Process the JSON data and update the DOM
            displayLiveScores(data);
        },
        error: function () {
            console.error('Error fetching live scores.');
        }
    });

    // Fetch and display news from XML file
    $.ajax({
        url: 'data.xml',
        type: 'GET',
        dataType: 'xml',
        success: function (data) {
            // Process the XML data and update the DOM
            displayNews(data);
        },
        error: function () {
            console.error('Error fetching news data.');
        }
    });

    // Handle contact form submission
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        // Process and submit the form data
        handleFormSubmission($(this));
    });
});

// Function to display RSS feed
function displayRssFeed(data) {
    var rssItems = $(data).find('item');
    var rssList = $('#rss-list');

    // Clear any existing items in the list
    rssList.empty();

    // Loop through each RSS item and display content
    rssItems.each(function () {
        var title = $(this).find('title').text();
        var description = $(this).find('description').text();

        // Append content to the RSS list
        rssList.append('<li><strong>' + title + '</strong>: ' + description + '</li>');
    });
}

// Function to display live scores
function displayLiveScores(data) {
    // Replace the following line with your actual code
    // Example: $('#live-scores').html('<p>' + data.team1 + ' vs. ' + data.team2 + ': ' + data.score + '</p>');
}

// Function to display news from XML
function displayNews(data) {
    var newsItems = $(data).find('news');

    // Loop through each news item and display content
    newsItems.each(function () {
        var title = $(this).find('title').text();
        var content = $(this).find('content').text();

        // Append content to the news section
        $('#news-section').append('<div class="news-item"><h3>' + title + '</h3><p>' + content + '</p></div>');
    });
}

// Function to handle contact form submission
function handleFormSubmission(form) {
    var formData = form.serialize();
    $.ajax({
        url: 'submitForm.php',
        type: 'POST',
        data: formData,
        success: function (response) {
            // Handle the success response
            console.log('Form submitted successfully:', response);
        },
        error: function () {
            console.error('Error submitting form.');
        }
    });
}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
