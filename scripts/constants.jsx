﻿// ================================================// constants// ================================================// Add to the fonts array to make the script work with your own custom fonts.// To make it easier to add to this array, use the "fonts" worksheet of this Google Spreadsheet:	// https://docs.google.com/spreadsheets/d/13ESQ9ktfkdzFq78FkWLGaZr2s3lNbv2cN25F2pYf5XM/edit?usp=sharing	// Make a copy of the spreadsheet for yourself.	// Modify the settings to taste.var fonts = [	{"aifont":"ArialMT","family":"arial,helvetica,sans-serif","weight":"","style":""},	{"aifont":"Arial-BoldMT","family":"arial,helvetica,sans-serif","weight":"bold","style":""},	{"aifont":"Arial-ItalicMT","family":"arial,helvetica,sans-serif","weight":"","style":"italic"},	{"aifont":"Arial-BoldItalicMT","family":"arial,helvetica,sans-serif","weight":"bold","style":"italic"},	{"aifont":"Georgia","family":"georgia,'times new roman',times,serif","weight":"","style":""},	{"aifont":"Georgia-Bold","family":"georgia,'times new roman',times,serif","weight":"bold","style":""},	{"aifont":"Georgia-Italic","family":"georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"Georgia-BoldItalic","family":"georgia,'times new roman',times,serif","weight":"bold","style":"italic"},	{"aifont":"NYTFranklin-Light","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"NYTFranklin-Medium","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"500","style":""},	{"aifont":"NYTFranklin-SemiBold","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"600","style":""},	{"aifont":"NYTFranklinSemiBold-Regular","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"600","style":""},	{"aifont":"NYTFranklin-Bold","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"NYTFranklin-LightItalic","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"300","style":"italic"},	{"aifont":"NYTFranklin-MediumItalic","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"500","style":"italic"},	{"aifont":"NYTFranklin-BoldItalic","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"700","style":"italic"},	{"aifont":"NYTFranklin-Headline","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"bold","style":""},	{"aifont":"NYTFranklin-HeadlineItalic","family":"nyt-franklin,arial,helvetica,sans-serif","weight":"bold","style":"italic"},	{"aifont":"NYTCheltenham-ExtraLight","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"200","style":""},	{"aifont":"NYTCheltenham-Light","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"300","style":""},	{"aifont":"NYTCheltenham-Book","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"400","style":""},	{"aifont":"NYTCheltenham-Wide","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":""},	{"aifont":"NYTCheltenham-Medium","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"500","style":""},	{"aifont":"NYTCheltenham-Bold","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"700","style":""},	{"aifont":"NYTCheltenham-BoldCond","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"bold","style":""},	{"aifont":"NYTCheltenham-BoldExtraCond","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"bold","style":""},	{"aifont":"NYTCheltenham-ExtraBold","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"bold","style":""},	{"aifont":"NYTCheltenham-ExtraLightIt","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-ExtraLightItal","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-LightItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-BookItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-WideItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-MediumItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"","style":"italic"},	{"aifont":"NYTCheltenham-BoldItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"700","style":"italic"},	{"aifont":"NYTCheltenham-ExtraBoldItal","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"bold","style":"italic"},	{"aifont":"NYTCheltenham-ExtraBoldItalic","family":"nyt-cheltenham,georgia,'times new roman',times,serif","weight":"bold","style":"italic"},	{"aifont":"NYTKarnakText-Regular","family":"nyt-karnak-display-130124,georgia,'times new roman',times,serif","weight":"400","style":""},	{"aifont":"NYTKarnakDisplay-Regular","family":"nyt-karnak-display-130124,georgia,'times new roman',times,serif","weight":"400","style":""},	{"aifont":"NYTStymieLight-Regular","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"NYTStymieMedium-Regular","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"500","style":""},	{"aifont":"StymieNYT-Light","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"StymieNYT-LightPhoenetic","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"StymieNYT-Lightitalic","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":"italic"},	{"aifont":"StymieNYT-Medium","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"500","style":""},	{"aifont":"StymieNYT-MediumItalic","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"500","style":"italic"},	{"aifont":"StymieNYT-Bold","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"StymieNYT-BoldItalic","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":"italic"},	{"aifont":"StymieNYT-ExtraBold","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"StymieNYT-ExtraBoldText","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"StymieNYT-ExtraBoldTextItal","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":"italic"},	{"aifont":"StymieNYTBlack-Regular","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"StymieBT-ExtraBold","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"700","style":""},	{"aifont":"Stymie-Thin","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"Stymie-UltraLight","family":"nyt-stymie,arial,helvetica,sans-serif","weight":"300","style":""},	{"aifont":"NYTMagSans-Regular","family":"'nyt-mag-sans',arial,helvetica,sans-serif","weight":"500","style":""},	{"aifont":"NYTMagSans-Bold","family":"'nyt-mag-sans',arial,helvetica,sans-serif","weight":"700","style":""}];var caps = [	{"ai":"FontCapsOption.NORMALCAPS","html":""},	{"ai":"FontCapsOption.ALLCAPS","html":"uppercase"},	{"ai":"FontCapsOption.SMALLCAPS","html":"uppercase"}];var align = [	{"ai":"Justification.LEFT","html":""},	{"ai":"Justification.RIGHT","html":"right"},	{"ai":"Justification.CENTER","html":"center"},	{"ai":"Justification.FULLJUSTIFY","html":"justify"},	{"ai":"Justification.FULLJUSTIFYLASTLINELEFT","html":"justify"},	{"ai":"Justification.FULLJUSTIFYLASTLINECENTER","html":"justify"},	{"ai":"Justification.FULLJUSTIFYLASTLINERIGHT","html":"justify"}];var pStyleKeyTags = [	"aifont",	"size",	"capitalization",	"r",	"g",	"b",	"tracking",	"leading",	"spacebefore",	"spaceafter",	"justification",	"opacity"];