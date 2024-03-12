const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart App test report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "121",
        },
        device: "Kysor - PC",
        platform: {
            name: "Mac OS",
            version: "Darwin",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Book Cart Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});