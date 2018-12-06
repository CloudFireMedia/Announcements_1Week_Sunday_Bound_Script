var SCRIPT_NAME = "Announcements_1Week_Sunday_Bound_Script"
var SCRIPT_VERSION = "v0.dev_ajr"

function onOpen(){
  DocumentApp.getUi().createMenu('CloudFire')
    .addItem('Format All', 'runAllFormattingFunctions_oneWeekOut')
    .addSeparator()
    .addItem('Format Font', 'formatFont_oneWeek')
    .addItem('Format Paragraphs', 'format_removeEmptyParagraphs')
    .addToUi();
}

function runAllFormattingFunctions_oneWeekOut() {Announcements.runAllFormattingFunctions_oneWeekOut()}
function formatFont_oneWeek()                   {Announcements.formatFont_oneWeek()}
function format_removeEmptyParagraphs()         {Announcements.format_removeEmptyParagraphs()}