const fs = require('fs');
const path = require('path');

// Path to the exported legacy dictionary
// Using raw string for Windows path to avoid escaping issues if possible, but standard Node path.resolve handles forward slashes well.
const legacyDictPath = 'C:/Users/JOSE/.gemini/antigravity/brain/eb979ada-e2ac-4312-8855-8cbebf3ed00c/full_legacy_dict.json';
const messagesDir = path.resolve(__dirname, 'src/messages');

const locales = ['en', 'es', 'fr', 'de', 'it', 'nl', 'pl', 'ru', 'sv', 'no', 'da'];
const namespacesToMigrate = ['home', 'footer', 'services_page', 'audit_page', 'calculator_section'];

if (!fs.existsSync(legacyDictPath)) {
    console.error(`Legacy dictionary not found at: ${legacyDictPath}`);
    process.exit(1);
}

const legacyDict = JSON.parse(fs.readFileSync(legacyDictPath, 'utf8'));

locales.forEach(locale => {
    const jsonPath = path.join(messagesDir, `${locale}.json`);
    let currentJson = {};

    if (fs.existsSync(jsonPath)) {
        try {
            currentJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        } catch (e) {
            console.error(`Error parsing existing JSON for ${locale}:`, e);
        }
    }

    let updated = false;

    namespacesToMigrate.forEach(ns => {
        // Skip if namespace already exists (assume manual edits take precedence)
        // EXCEPT if keys are clearly missing, but detecting "completeness" is hard.
        // Better rule: If key exists, DON'T OVERWRITE.
        if (currentJson[ns]) {
            console.log(`[${locale}] Skipping namespace '${ns}' (already exists)`);
            return;
        }

        // Get content from legacy dict
        // 1. Try exact locale match
        let content = legacyDict[locale]?.[ns];

        // 2. Fallback to English if missing for this locale (e.g., FR/IT/PL/RU missing most things)
        if (!content) {
            console.warn(`[${locale}] No legacy translations for '${ns}', falling back to English.`);
            content = legacyDict['en']?.[ns];
        }

        if (content) {
            currentJson[ns] = content;
            updated = true;
            console.log(`[${locale}] Added namespace '${ns}'`);
        } else {
            console.error(`[${locale}] CRITICAL: Could not find content for '${ns}' even in English fallback!`);
        }
    });

    if (updated) {
        fs.writeFileSync(jsonPath, JSON.stringify(currentJson, null, 4), 'utf8');
        console.log(`✅ Updated ${locale}.json`);
    } else {
        console.log(`ℹ️ No changes allowed for ${locale}.json`);
    }
});
