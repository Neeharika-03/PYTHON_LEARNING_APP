document.addEventListener('DOMContentLoaded', function () {
    // Predefined resources
    var predefinedResources = [
        { title: 'Lesson 1', url: 'https://www.geeksforgeeks.org/introduction-to-python/?ref=lbp' },
        { title: 'Lesson 2', url: 'https://www.geeksforgeeks.org/taking-input-in-python/?ref=lbp' },
        { title: 'Lesson 3', url: 'https://www.geeksforgeeks.org/python-operators/?ref=lbp' },
        { title: 'Lesson 4', url: 'https://www.geeksforgeeks.org/python-data-types/?ref=lbp' },
        { title: 'Lesson 5', url: 'https://www.geeksforgeeks.org/python-string/?ref=lbp'},
        { title: 'Lesson 6', url: 'https://www.geeksforgeeks.org/python-lists/?ref=lbp'},
        { title: 'Lesson 7', url: 'https://www.geeksforgeeks.org/python-dictionary/?ref=lbp'},
        { title: 'Lesson 8', url: 'https://www.geeksforgeeks.org/python-if-else/?ref=lbp'},
        { title: 'Lesson 9', url: 'https://www.geeksforgeeks.org/python-functions/?ref=lbp'},
        { title: 'Lesson 10', url: 'https://www.geeksforgeeks.org/python-oops-concepts/?ref=lbp'},
        // Add more resources as needed
    ];

    // Function to add resources to the list
    function addResourceToList(resource) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${resource.title}:</strong> <a href="${resource.url}" target="_blank">${resource.url}</a>`;
        
        document.getElementById('resourceList').appendChild(listItem);
    }

    // Add predefined resources to the list
    predefinedResources.forEach(function (resource) {
        addResourceToList(resource);
    });
});
