# PlayWrightCucumber
This repo contains playwright with cucumber and generate html test report
## install following plugin for VS code
    playwright test for vs code
    cucumber plugin for VS code

## install playwright
    npm install playwright

## install ts-node (//"ts-node is a TypeScript execution environment for Node.js. It allows you to run TypeScript code directly in a Node.js environment without the need to transpile the TypeScript code into JavaScript before executing it")
	 npm install -g ts-node 
        
## install cucumber
    npm i @cucumber/cucumber -D

## remove the default example test file and playwright.config.ts file

## create cucumber.json file under the ROOT folder
    
   ### Details about cucumber.json
            "requireModule" :["ts-node/register"] 
                >>>> indicates that we want to use ts-node for registering TypeScript files in our Cucumber tests

            "dryRun": false 
                >>> specifies whether to execute the scenarios in "dry run" mode. In "dry run" mode, Cucumber will only check if the steps in our feature files have corresponding step definitions. It won't execute the actual steps or perform any interactions with the system.

            "formatOptions": {
                    "snippetInterface": "async-await"
                }
                >>> The "formatOptions" configuration in Cucumber.js is used to specify options related to the formatting of the output. The snippetInterface option within formatOptions allows us to choose the snippet interface for step definitions. The async-await snippet interface allows us to write step definitions using asynchronous functions, which can be more convenient when dealing with asynchronous operations or promises

            "paths" :[
                "src/test/features/"
                ]
                >>> The "paths" configuration in Cucumber.js is used to specify the locations of your feature files.

            "require": [
                "src/test/steps/*.ts",
                "hooks/hooks.ts"
                ]
                >>> The "require" configuration in Cucumber.js is used to specify the locations of files that contain our step definitions and hooks
             "format": [
                        "html: test-results/cucumber-report.html"
                         ]
                >>> generates Default HTML report

## create the following folder srt/test:
        feature (where we will write feature files)
        steps   (where we will write stpes definition fof the feature file)
    
## Detailed Reporting
### add following in cucumber.json file
            "progress-bar" >>> gives realt time data like how many test out of total test exectued
            "json:test-results/cucumber-report.json" >>> generated the json file which have all the info about the tests

### now, install the dependency using following command in terminal
        npm install multiple-cucumber-html-reporter --save-dev

 ###create a file that can execute report
           >>> add a report.ts file under srt/helper folder.

update package.json 
### 
    "scripts": {
            "test": "cucumber-js test || true",
             "posttest": "npx ts-node src/helper/report.ts"
              }
    >>> || true will execute the next command even if the test fails.

## Running test in parallel
        ### Add following code in cucumber.json file
                "parallel" : 2
                    >>> it will run in 2 scenarios in 2 browser in parallel, if you want to run 10 number of browser, replace 2 with 10
        





  