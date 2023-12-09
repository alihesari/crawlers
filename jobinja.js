const allJobs = [];
for (let i = 1; i <= 8; i++) {
    const company = $(`ul.o-listView__list.c-jobListView__list > li:nth-child(${i}) .o-listView__itemComplementInfo.c-jobListView__meta li:nth-child(1) span`).text().trim();
    const location = $(`ul.o-listView__list.c-jobListView__list > li:nth-child(${i}) .o-listView__itemComplementInfo.c-jobListView__meta li:nth-child(2) span`).text().trim();
    let salary = $(`ul.o-listView__list.c-jobListView__list > li:nth-child(${i}) .o-listView__itemComplementInfo.c-jobListView__meta li:nth-child(3) span span:nth-child(2)`).text().trim();

    // Regular expression to match Persian numbers
    const persianNumbersRegex = /[\u06F0-\u06F9]/g;
    
    // Replacing Persian numbers with English numbers
    const englishText = salary.replace(persianNumbersRegex, function (match) {
      return String.fromCharCode(match.charCodeAt(0) - 1728);
    });
    
    // Extracting numbers from the modified text (assuming they're in English format)
    salary = englishText.match(/\d+/g).join("");

    allJobs.push({
        company,
        location,
        salary
    });
}